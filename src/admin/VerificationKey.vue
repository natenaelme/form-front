<template>
  <div>
    <h3 class="text-center">Generatr Verification Key</h3>
    <b-form-select
      style="margin-top: 10px"
      v-model="selected"
      :options="options"
    ></b-form-select>
    <div>
      <p style="color: red" v-if="notSelected">You Have To Select Workbook</p>
    </div>
    <CInput
      label="Number Of Verification Code"
      type="number"
      v-model="numberOfCodes"
      style="margin-top: 10px"
      horizontal
      placeholder=""
    />

    <p style="color: red" v-if="noNotSelected">
      Number Of Verification Code Can't Be Empity
    </p>

    <p style="color: red" v-if="noNotNegative">
      Number Of Verification Code Can't Be Negative number
    </p>

    <b-button style="float: right" variant="success" @click="submit()"
      >Generate</b-button
    >
    <div v-if="verification.length">
      <div id="printMe">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">WorkBook</th>
              <th scope="col">Key</th>
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
              <th style="font-size: 2">{{ verification.key }}</th>
              `
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
import VueHtmlToPaper from "vue-html-to-paper";

import "bootstrap-vue/dist/bootstrap-vue.css";

const { postsVerification } = require("../assets/js/service");
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],

  styles: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  ],
};
Vue.use(VueHtmlToPaper, options);
export default {
  data() {
    return {
      verification: [],
      notSelected: false,
      noNotSelected: false,
      noNotNegative: false,
      numberOfCodes: null,
      selected: null,
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
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    submit() {
      if (!this.selected) {
        this.notSelected = true;
      }
      if (!this.numberOfCodes) {
        this.noNotSelected = true;
      }
      if (this.numberOfCodes < 0) {
        this.noNotNegative = true;
      }
      if (this.selected && this.numberOfCodes && this.numberOfCodes > 0) {
        console.log("tests");

        for (var i = 0; i < this.numberOfCodes; i++) {
          const today = new Date();
          var timestamp = today.valueOf().toString();
          var rand = Math.round(Math.random() * 100).toString();
          console.log(timestamp);
          console.log(rand);
          var key = timestamp + rand;

          this.verification.push({ workbook: this.selected, key: key });
        }
        var database = "verifications/postVerifcation";
        postsVerification(database, {"elements":this.verification})
          .then((resp) => {
            this.notSelected = false;
            this.noNotSelected = false;
            this.noNotNegative = false;
            this.makeToast(
              "success",
              "You have successfully Generate Verfication Key"
            );
          })
          .catch((err) => {
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
  },
};
</script>
<style>
</style>