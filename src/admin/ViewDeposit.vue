<template>
  <div>
    <b-card v-if="verification">
      <label for="">Filter</label>
      <b-form-select @change="filterDeposit()" v-model="selected" class="mb-3">
      <b-form-select-option :value="null">All</b-form-select-option>
      <b-form-select-option :value="true">Approved</b-form-select-option>
      <b-form-select-option :value="false">Not Approved </b-form-select-option>
      </b-form-select>
    </b-card>
    <h3 class="text-center">Deposit List</h3>
    <table class="table">
      
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Deposit Full Name</th>
          <th scope="col">Deposite Number</th>
          <th scope="col">Users Account Information</th>
          <th scope="col">Image</th>
          <th scope="col">Send E-Epin</th>
          
          <th scope="col">Aprroved By Accountant</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(verification, index) in verification" :key="index">
          
          <th>{{ index + 1 }}</th>
          <th>
            {{ verification.fullName }}
          </th>
          <th>{{ verification.transactionId }}</th>
          <th>
            <p v-if="verification.used">Used</p>

            <p v-if="!verification.used">
              {{
                "Full Name : " +
                verification.user.firstName +
                " " +
                verification.user.lastName
              }}
              <br />
              {{ "User Name :" + verification.user.username }}
              <br>
              {{"email :" + verification.user.email}}
            </p>
          </th>
          <th>
           <img style="width:50px;height:50px" :src="verification.imageOfSleep" @click="$bvModal.show('bv-modall-'+index)" class="rounded-circle butImag" width="50em" height="50em" alt="">
 


  <b-modal :id="'bv-modall-'+index" hide-footer>
    <template #modal-title>
      Diposit Information
    </template>
    <div class="d-block">
      <p>
                 Full Name : {{
                    verification.user.firstName +
                    " " +
                    verification.user.lastName
                  }}
                </p>
                <p>Transaction Id :{{verification.transactionId}}</p>
                    <p class="text-center"><img style="width:100%" :src="verification.imageOfSleep" alt=""></p>
                    
    </div>
    
  </b-modal>
          </th>
          <th>
            <p style="color: green" v-if="verification.send">E-Pin Sent</p>
            <p style="color: red" v-if="!verification.send">E-Pin Not Sent</p>
          </th>
          <th v-if="userType != 'it'">
            <p style="color: green" v-if="verification.approvedByAccountant">
              Approved
            </p>
            <p style="color: red" v-if="!verification.approvedByAccountant">
              Not Approved
            </p>
          </th>
          <th v-if="userType == 'it'">
            <div class="mb-2">
              
              <b-button v-if="!verification.approvedByAccountant" @click="$bvModal.show('modal-' + index)"
                >Approve</b-button
              ><p v-if="verification.approvedByAccountant" style="color:green"> Approved</p>
              <b-modal
                :id="'modal-' + index"
                title="Approve Diposit"
                @ok="approveUser(verification)"
              >
                <p>
                  {{
                    verification.user.firstName +
                    " " +
                    verification.user.lastName
                  }}
                </p>

                <p class="my-4">Are you sure to Approve this account</p>

                
              </b-modal>
            </div>
          </th>
                    <th v-if="userType == 'it'">
            <div class="mb-2">
              
              <b-button v-if="!verification.send" @click="$bvModal.show('modal-ver' + index)"
                >E-Pin Sent Approve</b-button
              ><p v-if="verification.send" style="color:green"> E-Pin Sent</p>
              <b-modal
                :id="'modal-ver' + index"
                title="Approve Diposit"
                @ok="SentEpin(verification)"
              >
                <p>
                  {{
                    verification.user.firstName +
                    " " +
                    verification.user.lastName
                  }}
                </p>

                <p class="my-4">Are you sure you have sent the E-Pin</p>

                
              </b-modal>
               <b-modal
                :id="'Image-' + index"
                title="Diposit Information"
                @ok="SentEpin(verification)"
              >
                <p>
                  {{
                    verification.user.firstName +
                    " " +
                    verification.user.lastName
                  }}
                </p>
                    {{verification.transactionId}}
                    <img style="width:100%" :src="verification.imageOfSleep" alt="">
                <p class="my-4">Are you sure you have sent the E-Pin</p>

                
              </b-modal>
            </div>
          </th>
        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="text-center">

            <div class="lds-ripple">
                <div></div>
                <div></div>

            </div>loading..
        </div><br>
    <b-pagination
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
</template>
<script>
const { getters, getterPerPage, getterId,patchDataId,postsVerification } = require("../assets/js/service");
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  mounted() {
    this.loading =true;
    let token = localStorage.getItem("token");
    let id = localStorage.getItem("userId");

    let dataBase = "/users";
    getterId(dataBase + "/", id, token).then((resp) => {
      console.log("useruseruseruser");
      console.log(resp.data);
      this.userType = resp.data.userType;
      if(this.userType == "accountant"){
              getters("/Deposites/count").then((resp) => {
        this.rows = Math.ceil(resp.data.count / 10);
        console.log(this.rows);
        getterPerPage("Deposites", 1, "where").then((resp) => {
          this.verification = resp.data;
          this.loading = false;
          console.log(resp.data);
        });
      }).catch(err=>{
        this.loading =false;
      })
      }else{
      getters("/Deposites/count").then((resp) => {
        this.rows = Math.ceil(resp.data.count / 10);
        
        console.log(this.rows);
        getterPerPage("Deposites", 1, "user").then((resp) => {
          this.verification = resp.data;
          this.allDeposite = resp.data;
          this.loading= false;
          console.log(resp.data);
        }).catch(err=>{
          this.loading =false
        });
      }).catch(err=>{
        this.loading=false;
      });}
    });
  },
  data() {
    return {
      selected:null,
      loading:false,
      rows: 0,
      perPage: 1,
      currentPage: 1,
      verification: null,
      userType: null,
      allDeposite:null,
    };
  },
  methods: {
    filterDeposit(){
      console.log("Sdddddffffffsd");
      console.log( this.selected + "false")
      console.log(this.selected == "false");
      if(this.selected == null){
        console.log("alll");
        console.log(this.allDeposite);
        this.verification = this.allDeposite;
      }else if(!this.selected){
        this.verification = this.allDeposite;
        console.log("not approve");
        this.verification = this.verification.filter(ver=>ver.approvedByAccountant == false);
        console.log(this.verification.filter(ver=>ver.approvedByAccountant == false));
      }else if(this.selected){
        this.verification = this.allDeposite;
        this.verification = this.verification.filter((ver)=>ver.approvedByAccountant == true);
        console.log(this.verification.filter((ver)=>ver.approvedByAccountant == true));
      }
      
      
      
    },
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    SentEpin(verification) {
      console.log(verification);
      let dataBase = "Deposites/";
      let token = localStorage.getItem("token");

      verification.send = true;

      patchDataId(verification.id, dataBase, token, verification).then((resp) => {
        console.log(resp);
        getterPerPage("Deposites", page, "user")
          .then((resp) => {
            this.verification = resp.data;
            this.makeToast("success", "Sucessfully Approve The Account");
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)

              this.makeToast("danger", "Username Or Password Dosn't Match");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      });
    },
    approveUser(verification) {
      console.log(verification);
      let dataBase = "/users/depositeAproveByAccountant";
      let token = localStorage.getItem("token");

      verification.approvedByAccountant = true;

      postsVerification( dataBase, {id:verification.id}).then((resp) => {
        console.log(resp);
        getterPerPage("Deposites", page, "user")
          .then((resp) => {
            this.verification = resp.data;
            this.makeToast("success", "Sucessfully Approve The Account");
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)

              this.makeToast("danger", "Username Or Password Dosn't Match");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      });
    },
    pageChange(page) {
      console.log(this.currentPage);
      this.selected = null;
      getterPerPage("Deposites", page, "user").then((resp) => {
        this.verification = resp.data;
      });
    },
  },
};
</script>
<style>
.butImag:hover{
opacity: 0.5;
};


</style>