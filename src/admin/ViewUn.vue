<template>
  <div>
    <h3 style="text-align:center">Users who Have Been sent Epin And Not Login Yet</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Full Name</th>
          <th scope="col">Deposite Number</th>
          <th scope="col">Users Account Information</th>
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
              {{"Email :" + verification.user.email}}
            </p>
          </th>
          <th>
            <p style="color: green" v-if="verification.send">E-Pin Sent</p>
            <p style="color: red" v-if="!verification.send">E-Pin Not Sent</p>
          </th>
          <th>
            <p style="color: green" v-if="verification.approvedByAccountant">
              Approved
            </p>
            <p style="color: red" v-if="!verification.approvedByAccountant">
              Not Approved
            </p>
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
  </div>
</template>
<script>
const { getters, getterPerPage } = require("../assets/js/service");
export default {
  mounted() {
    this.loading =true;
    getters("Deposites/getNotVerifide", 1, "user").then((resp) => {
      console.log(resp);
      this.rows = Math.ceil(resp.data.responce[0].length / 20);
      
      this.verification = resp.data.responce;
      this.loading =false;
    }).catch(err=>{
      this.loading =false;
    });
  },
  data() {
    return {
loading: false,
      verification: null,
    };
  },
  methods: {
    chageTest() {
      console.log("curreent Pager :" + this.currentPage);
    },
    pageChange(page) {
      console.log(this.currentPage);
      getterPerPage("getNotVerifide", page, "user").then((resp) => {
        this.verification = resp.data.responce;
      });
    },
  },
};
</script>
<style>
</style>