<template>
<div>
    <b-card>
         <b-row>
           <b-col>
               <b-input-group  class="mt-3">
                   <div class="input-group-prepend">
    <b-form-select v-model="selectedsearch" class="mb-3">
      <b-form-select-option value="email">Search by email</b-form-select-option>
      <b-form-select-option value="username">Search by User Name</b-form-select-option>
      
    </b-form-select>

  </div>
    <b-form-input v-bind:class="{  'is-invalid': searchempity }" :placeholder="selectedsearch" v-model="searchValue" style="width: 0% !important;"></b-form-input>
    
    <b-input-group-append>
      <b-button style="height: 35px;" @click="search()" variant="primary"><CIcon name="cil-magnifying-glass"/> Search</b-button>
    </b-input-group-append>
  </b-input-group>
           </b-col>
       </b-row>
    </b-card>
    <h3 class="text-center">List of Customers</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">User Name</th>
                    <th scope="col" v-if="userType != 'accountant'">View</th>
                </tr>
            </thead>
            <tbody v-if="usersData">
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="Imagere(user.profileImage)" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>
                        {{user.username}}
                    </th>
                    <th v-if="userType != 'accountant'">
                        <div class="mb-2">

                            <b-button @click="$bvModal.show('modal-'+(index))">Approve</b-button>
                            <b-modal :id="'modal-'+index" title="Assigne WorkBook" @ok="approveUser(user)">
                                <p>{{user.firstName + " " + user.lastName}}</p>

                                <p class="my-4">Select WorkBook</p>

                                <b-form-select v-model="selected" class="mb-3">
                                    <b-form-select-option value="1">WorkBook 1 only</b-form-select-option>
                                    <b-form-select-option value="2">WorkBook 1 and 2 only</b-form-select-option>
                                    <b-form-select-option value="3">WorkBook 1,2 and 3 only </b-form-select-option>
                                    <b-form-select-option value="4">All 4 WorkBook </b-form-select-option>

                                </b-form-select>

                            </b-modal>
                        </div>
                    </th>
                </tr>

            </tbody>

            <tbody class="text-center" v-if="usersData.length == 0">
                <th colspan="6"> <strong>There Is no An Approved User</strong></th>

            </tbody>
        </table>

        <div v-if="loading" class="text-center">

            <div class="lds-ripple">
                <div></div>
                <div></div>

            </div>loading..
        </div><br>
                <b-pagination
        v-if="!filteredData"
      @input="pageChange(currentPage)"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      align="center"
    ></b-pagination>

    </div>
    <div>
        <div>

        </div>
    </div>

</div>
</template>

<script>
const {
    getterUnApproUsers,
    patchDataId,
    ImageResize,
    getterWhere,
    getterWh,
    postsVerification,
    getterId
} = require('../assets/js/service')

export default {
    data() {
        return {
            selectedsearch: 'email',
            searchValue: null,
            searchempity:false,
            usersData: {},
            selectedUser: '',
            modalShow: false,
            selected: '',
            loading: false,
            userType:null,
            filteredData:false,
            page:1,
            rows: 0,
            perPage: 1,
      currentPage: 1,
        }
    },
    mounted() {
        this.loading = true;
        let id = localStorage.getItem('userId')
        let token = localStorage.getItem('token')
        let dataBase = '/users/';
        getterId(dataBase,id,token).then(resp=>{
            console.log("useruseruseruser");
            
            this.userType =resp.data.userType;
        getterWhere('users/count','canAccess',false,'userType','user').then(resp => {
            console.log(resp);
            this.rows = Math.ceil(resp.data.count / 10);
            console.log(this.rows);
            console.log("number of unapproved users  " +resp.data.count)
        
        getterUnApproUsers(token,this.page ,'user').then(resp => {
            this.usersData = resp.data;
            this.loading = false;
        })})})

    },
    methods: {
        Imagere(image){
            
            return ImageResize("square tumble",image)
        },
            search(){
        if(this.searchValue){
            this.loading = true;
            this.usersData = {};
            this.searchempity = false;
            let token = localStorage.getItem('token');
            getterWh('users',token,this.selectedsearch,this.searchValue,'canAccess',false,'userType','user').then(resp=>{
                console.log("search result getterwhere getterwhere");
                console.log(resp.data);
                 this.filteredData =true;
            this.usersData = resp.data;
                this.loading = false;

            })
        }else{
            this.searchempity = true;
        }
    },
        pageChange(page) {

             this.loading = true;
             this.page =page;
             let token = localStorage.getItem('token');
             this.usersData = {};
            getterUnApproUsers(token,page ,'user').then(resp => {
            this.usersData = resp.data
            this.loading = false;
        })
        },
        test(user) {
            localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/admin/main_view')
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },
        approveUser(user) {

            console.log(user);
            let dataBase = "/users/approveCustomers";
            let token = localStorage.getItem("token");

            user.canAccess = true;
            user.workBook = this.selected;
            postsVerification(dataBase, {id:user.id,workBook:this.selected}).then((resp => {
                getterUnApproUsers(token,this.page, 'user').then(resp => {
                    this.usersData = resp.data
                })
            }))
        },
        showMsgBoxOne(user) {
            this.boxOne = '',

                this.$bvModal.msgBoxConfirm(
                    'Are you sure you want to Approve ' + user.firstName + " " + user.lastName

                )
                .then(value => {
                    if (value == true) {

                    }
                })
                .catch(err => {
                    // An error occurred
                })
        },
    },
}
</script>

<style >

</style>
