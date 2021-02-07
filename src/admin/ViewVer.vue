<template>
  <div>
    <h3 class="text-center">View Verification Key</h3>
    <b-form-select
      style="margin-top: 10px"
      v-model="selected"
      :options="options"
    ></b-form-select>
    <div>
      <p style="color: red" v-if="notSelected">You Have To Select Workbook</p>
    </div>
    <b-button style="float: right" variant="success" @click="ViewForm()"
      >submit</b-button
    >
    <div v-if="verification.length">
      <b-row>
        <b-col>
          <b-button variant="success" @click="filter(true)">filter only used key</b-button>
          <b-button variant="success" @click="filter(false)">filter never used key</b-button>
        </b-col>
      </b-row>
      <div id="printMe">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">WorkBook</th>
              <th scope="col">Key</th>
              <th>Used</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(verification, index) in verification" :key="index">
              <th>{{ index + 1 }}</th>
              <th>
                <p v-if="verification.workbook == 1">1</p>
                <p v-if="verification.workbook == 2">1&2</p>
                <p v-if="verification.workbook == 3">1,2&3</p>
                <p v-if="verification.workbook == 4">All 4</p>
              </th>
              <th>{{ verification.key }}</th>
              <th>
                <p v-if="verification.used">Used</p>
                <p v-if="!verification.used">Never Used</p>
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
const { getterVerKey } = require("../assets/js/service");
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
      verification: [],
      allverfi:[],
      selected: null,
      notSelected: false,
      options: [
        { value: null, text: "Please select Workbook" },
        { value: 1, text: "Workbook 1" },
        { value: 2, text: "Workbook 1 & 2" },
        { value: 3, text: "Workbook 1 & 2 & 3" },
        { value: 4, text: "all 4 Workbooks" },
      ],
    };
  },
  methods: {
    ViewForm() {
      if (!this.selected) {
        this.notSelected = true;
      }
      if (this.selected) {
        getterVerKey(this.selected).then((resp) => {
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
        
      }
    },
    print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
    },
    filter(type){
      this.verification =this.allverfi;
      this.verification = this.verification.filter(ver=>ver.used==type);
    }
  },
};
</script>
<style>
</style>