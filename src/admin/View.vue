<template>
<div>
    
        <b-card>
            <h5>filter data by approval date</h5>
        <b-row>
      <b-col>
        <b-form-datepicker v-model="filterData.StartingDate" placeholder="Select Staring Date" ></b-form-datepicker>
      </b-col>
      <b-col>
        <b-form-datepicker v-model="filterData.EndDate" placeholder="Select End Date" ></b-form-datepicker>
      </b-col>
    </b-row>
    <p style="color:red" v-if="incorectDate">fill the date correctly to filter the Data</p>
    <br>
    <b-button style="float: right" @click="filterByDate()" variant="primary">Filter</b-button>
    <br>
        <br>
       <b-row>
           <b-col>
               <b-input-group  class="mt-3">
                   <div class="input-group-prepend">
    <b-form-select v-model="selected" class="mb-3">
      <b-form-select-option value="email">Search by email</b-form-select-option>
      <b-form-select-option value="username">Search by User Name</b-form-select-option>
      
    </b-form-select>

  </div>
    <b-form-input v-bind:class="{  'is-invalid': searchempity }" :placeholder="selected" v-model="searchValue" style="width: 0% !important;"></b-form-input>
    
    <b-input-group-append>
      <b-button style="height: 35px;" @click="search()" variant="primary"><CIcon name="cil-magnifying-glass"/> Search</b-button>
    </b-input-group-append>
  </b-input-group>
           </b-col>
       </b-row>
     
    </b-card>
    
    <h3 class="text-center">List of Customers</h3>
    <p v-if="filteredData">from date : {{filterData.StartingDate}}  to date : {{filterData.EndDate}}</p>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Approval</th>
                    <th scope="col" v-if="userType != 'accountant'">View</th>
                    <th v-if="userType == 'mentor'">ViewMessage</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="Imagere(user.profileImage)" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>{{user.username}}</th>
                    <th>
                        <b-container>
                            <b-progress style="background-color:lightgray" :max="maxValue(user.workBook)" col='8'>
                                <b-progress-bar :value="user.progress" :label="`${((user.progress / maxValue(user.workBook)) * 100).toFixed(2)}%`"></b-progress-bar>
                            </b-progress>

                            <p v-if="user.progress==0" style="color:red">0%</p>
                        </b-container>
                    </th>
                    <th>
                        <p v-if="user.Approved" style="color:green">Approved</p>
                        <p v-if="!user.Approved" style="color:red">Not Approved</p>
                    </th>
                    <th v-if="userType != 'accountant'"><button class="btn btn-outline-dark" @click="test(user)">View</button></th>
                    <th v-if="userType == 'mentor'"><button class="btn btn-outline-dark" @click="message(user)">ViewMessage</button></th>
                </tr>

            </tbody>
            <tbody class="text-center" v-if="usersData.length == 0">
                <th colspan="12"> <strong>There Is no Approved User</strong></th>

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

</div>
</template>

<script>
const {
    getterUsers,
    getVisionPages,
    MindProgrammingPages,
    getHabitPages,
    TeamBuildingPages,
    getterId,
    getMentorsData,
    postsVerification,
    getterwhere,
    getterWhere,
    ImageResize,
    getterWh,
    getUserData
} = require('../assets/js/service')

export default {
    data() {
        return {
            selected: 'email',
            searchValue: null,
            searchempity:false,
            placeholderForsearch:'email',
            filterData:{
        StartingDate:null,
        EndDate:null
      },
      filteredData:false,
            usersData: {},
            loading: false,
            userType : null,
            incorectDate:false,
            rows: 0,
            perPage: 1,
      currentPage: 1,
        }
    },
    mounted() {
        this.loading = true;
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('userId');
        
        let dataBase = '/users';
        getterId(dataBase+'/',id,token).then(resp=>{
            console.log("useruseruseruser");
            console.log(resp.data);
            this.userType =resp.data.userType;
            if (this.userType == 'admin') {
            getterWhere('users/count','canAccess',true,'userType','user').then(resp=>{
                this.rows = Math.ceil(resp.data.count / 10);
                console.log("count count of he verified users"+resp.data.count);
                getterUsers(token,1,'user').then(resp => {
                this.usersData = resp.data;
                this.loading = false;
                })
            })
           
        } else if (this.userType == 'mentor') {
            getUserData(dataBase, id, token).then(resp => {
                this.usersData = resp.data;
                this.loading = false;
                console.log(this.users)
            })
        }
        else if (this.userType == 'accountant') {
            getterUsers(token, 'user').then(resp => {
                this.usersData = resp.data;
                this.loading = false;
            })
        }
        })
        

    },
    methods: {
          Imagere(image){
            
            return ImageResize("square tumble",image)
        },
         pageChange(page) {
             this.loading = true;
             let token = localStorage.getItem('token');
             this.usersData = {};
         getterUsers(token,page,'user').then(resp => {
                this.usersData = resp.data;
                this.loading = false;
                })
    },
    search(){
        if(this.searchValue){
            this.loading = true;
            this.usersData = {};
            this.searchempity = false;
            let token = localStorage.getItem('token');
            getterWh('users',token,this.selected,this.searchValue,'canAccess',true,'userType','user').then(resp=>{
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
    filterByDate(){
        console.log(this.filterData);
         this.loading = true;
             this.usersData = {};
             this.filterData.type = "AprovedDate";
        if(this.filterData.StartingDate && this.filterData.EndDate){
        postsVerification("users/filterUserByApprovalDate",this.filterData).then(resp=>{
            console.log(resp.data.responce);
            this.filteredData =true;
            this.usersData = resp.data.responce;
                this.loading = false;

        })
        }else{
            this.incorectDate = true;
        }
    },
        test(user) {
            localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/admin/main_view')
        },
        message(user){
                        localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/admin/message')
        },
        maxValue(WorkBook) {
            let max;
            if (WorkBook) {
                console.log(WorkBook);

                if (WorkBook == 1) {
                    console.log("workbook :" + WorkBook)
                    max = getVisionPages().length
                } else if (WorkBook == 2) {

                    max = (getVisionPages().length + getHabitPages().length)
                } else if (WorkBook == 3) {

                    max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length)
                } else if (WorkBook == 4) {

                    max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length + TeamBuildingPages().length - 1)
                } else {
                    max = 0
                }
            }

            return (max);

        }
    },
}
</script>

<style >

</style>
