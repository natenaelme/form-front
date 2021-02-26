<template>
  <div>
    <b-jumbotron>
    <h3 class="text-center">View Verification Key</h3>
    <b-form-select
      
      v-model="selected"
      :options="options"
    ></b-form-select>
    <div>
      <p style="color: red" v-if="notSelected">You Have To Select Workbook</p>
    </div><br>
    <b-button style="float: right" variant="success" @click="ViewForm()"
      >Submit</b-button>
      <br>
      <br>
      <h6>Filter All WorkBook Verification Key By Date</h6>
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
</b-jumbotron>


    <div v-if="!verification.length"><h5 style="color:green;text-align:center">there is no verification Key</h5></div>
    <div v-if="verification.length && verification[0]!= ''">
      
      <b-row>
        <b-col>
          <b-button variant="primary" @click="filter(true)">filter only used key</b-button>
        </b-col>
        <b-col>
          <b-button variant="primary" @click="filter(false)">filter never used key</b-button>

        </b-col>
                <b-col>
          <b-button variant="primary" @click="filter('all')">show all</b-button>

        </b-col>
        <br>
        <br>
      </b-row>
      
      <div id="printMe">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">WorkBook</th>
              <th scope="col">Key</th>
              <th>Used</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(verification, index) in verification" :key="index">
              <th>{{ index + 1 }}</th>
              <th>
                <p v-if="verification.workbook == 1">workbook 1</p>
                <p v-if="verification.workbook == 2">workbook 1&2</p>
                <p v-if="verification.workbook == 3">workbook 1,2&3</p>
                <p v-if="verification.workbook == 4">All 4 workbooks</p>
              </th>
              <th>{{ verification.key }}</th>
              <th>
                <p v-if="verification.used">Used</p>
                <p v-if="!verification.used">Never Used</p>
              </th>
              <th>
                {{verification.Date}}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <p style="text-align: center">
        
        <b-button name @click="print" variant="success">print</b-button>
      </p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
const { getterVerKey,getters,PostVerification} = require("../assets/js/service");
import VueHtmlToPaper from "vue-html-to-paper";
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],

  styles: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  ],
};
Vue.use(VueHtmlToPaper, options);
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  data() {
    return {
      filterData:{
        StartingDate:null,
        EndDate:null
      },
      incorectDate:false,
      value:null,
      verification: [''],
      allverfi:[],
      selected: null,
      notSelected: false,
      options: [
        { value: null, text: "Please select Workbook" },
        { value: 5, text:"all Verification Key"},
        { value: 1, text: "Workbook 1" },
        { value: 2, text: "Workbook 1 & 2" },
        { value: 3, text: "Workbook 1 & 2 & 3" },
        { value: 4, text: "all 4 Workbooks" },
      ],
    };
  },
  methods: {

    ViewForm() {
      console.log(this.selected);
      if (!this.selected) {
        this.notSelected = true;
      }
      if (this.selected) {
        if(this.selected == 5){
          getters("verifications").then(resp=>{
            console.log(resp.data);
            this.verification = resp.data;
          this.allverfi=resp.data;
          })
        }else{
        this.notSelected = false;
        getterVerKey("workbook",this.selected).then((resp) => {
          console.log(resp.data);
          this.verification = resp.data;
          this.allverfi=resp.data;
        }).catch((err) => {
              if (err.response) {
                // client received an error response (5xx, 4xx)
                this.makeToast(
                  "danger",
                  "There is Some Error.Please Check your Form"
                );
              } else if (err.request) {
                this.makeToast("danger", "Connection Problem");
              } else {
                this.makeToast("danger", "Some Error has Happened");
              }
            });
        
      }}
    },
    filterByDate(){
      let database = "users/getVerBnDate";
      if(this.filterData.StartingDate && this.filterData.EndDate){
        this.incorectDate = false;
      PostVerification(database,localStorage.getItem('token'),this.filterData).then(resp=>{
        console.log(resp);
        this.verification = resp.data.responce;
        this.allverfi=resp.data.responce;
      }).catch((err) => {
              if (err.response) {
                // client received an error response (5xx, 4xx)
                this.makeToast(
                  "danger",
                  "There is Some Error.Please Check your Form"
                );
              } else if (err.request) {
                this.makeToast("danger", "Connection Problem");
              } else {
                this.makeToast("danger", "Some Error has Happened");
              }
            });}
            else{
              this.incorectDate = true;
            }
        
    },
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    filter(type){
      this.verification =this.allverfi;
      if (type != "all"){
this.verification = this.verification.filter(ver=>ver.used==type);
      }else{
        this.verification =this.allverfi;
      }
      
    }
  },
};
</script>
<style>
</style>