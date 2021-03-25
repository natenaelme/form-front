<template>
  <div class="main" style="padding-top: 5%">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
          <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-5 d-none d-lg-flex">
                  <div class="flex-grow-1 bg-register-image" style="background-color: black">
                    <h3 class="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style="color: white; height: 100%">
                      <img src="@/assets/img/alpha_icon.png" alt="" width="10%" />
                      {{ $t("Login.Login") }}
                    </h3>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">{{ $t("Common.Welcome") }}</h4>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input class="form-control form-control-user" v-model="form.email" type="email" id="exampleInputEmail" aria-describedby="emailHelp" :placeholder="$t('Login.Email')" name="email" />
                      </div>
                      <div class="form-group">
                        <input class="form-control form-control-user" v-model="form.password" type="password" id="exampleInputPassword" :placeholder="$t('Login.Password')" name="password" />
                      </div>

                      <hr />
                    </form>

                    <button class="btn btn-primary btn-block text-white btn-user" @click="login()" type="submit">{{ $t("Login.Login") }}</button>

                    <div class="text-center">
                      <router-link to="/signup">{{ $t("Common.CreateAccount") }}</router-link>
                    </div>
                    <div v-if="!show" class="text-center">
                      <div class="lds-ripple">
                        <div></div>
                        <div></div>
                      </div>
                      loading..
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const {Login, posts, getterId, setUserInfo, getUserInfo, getDataOfUsers } = require("../assets/js/service");

import Vue from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
export default {
  data() {
    return {
      count: 0,
      form: {
        email: "",
        password: "",
      },
      show: true,
      token: localStorage.getItem("token"),
      userType: localStorage.getItem("userType"),
      id: localStorage.getItem("userId"),
    };
  },

  methods: {
    makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
      });
    },
    login() {
      this.show = false;

      Login(this.form)
        .then((resp) => {
          console.log("loginInfor")
          console.log(resp.data.user);

          let resps = resp.data.user;

            setUserInfo(resp.data.id, resps.userType, resps.firstName, resps.lastName);
            console.log(getUserInfo());

            if (resps.userType == "user") {

              if (resps.canAccess) {
                localStorage.setItem("token", resp.data.id);
                localStorage.setItem("userId", resp.data.userId);
                localStorage.setItem("profileImage", resps.profileImage);
                localStorage.setItem("userType", resps.userType);
                localStorage.setItem("fullName", resps.firstName + " " + resps.lastName);
                localStorage.setItem("progress", resps.progress);
                localStorage.setItem("pages", resps.pages);
                localStorage.setItem("workBook", resps.workBook);
                this.show = true;
                this.makeToast("success", "Sucessfull login");
                console.log("user");
                this.$router.replace("/question/main");
              } else if (!resps.canAccess) {
                this.$store.commit('set', ['user', resps]);
                this.$store.commit('set', ['token', resp.data.id]);
                this.$router.replace("/payment");
                this.show = true;
              }
            } else if (resps.userType == "admin") {
              console.log(resps.profileImage);
              localStorage.setItem("token", resp.data.id);
              localStorage.setItem("userId", resp.data.userId);
              localStorage.setItem("profileImage", resps.profileImage);
              localStorage.setItem("userType", resps.userType);
              localStorage.setItem("fullName", resps.firstName + " " + resps.lastName);
              localStorage.setItem("progress", resps.progress);
              localStorage.setItem("pages", resps.pages);
              localStorage.setItem("workBook", resps.workBook);
              this.show = true;
              this.makeToast("success", "Sucessfull login");
              this.$router.replace("/admin/dashboard");
            } else if (resps.userType == "mentor" || resps.userType == "accountant" || resps.userType == "it" || resps.userType == "customer_service") {
              console.log("mentor");
              localStorage.setItem("token", resp.data.id);
              localStorage.setItem("userId", resp.data.userId);
              localStorage.setItem("profileImage", resps.profileImage);
              localStorage.setItem("userType", resps.userType);
              localStorage.setItem("fullName", resps.firstName + " " + resps.lastName);
              localStorage.setItem("progress", resps.progress);
              localStorage.setItem("pages", resps.pages);
              localStorage.setItem("workBook", resps.workBook);
              this.show = true;
              this.makeToast("success", "Sucessfull login"  );
              
              this.$router.replace("/admin/dashboard");}
            
         
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
    },
  },
  mounted() {
    
    if (this.token) {
      getDataOfUsers("users/", this.id, this.token).then((resp) => {
        console.log(resp);
        if (resp.data.userType == "user") {
          this.$router.replace("/question/main");
        } else {
          console.log("user type : " + resp.data.userType == "accountant");
                        if(resp.data.userType == "it" || resp.data.userType == "customer_service"){
                this.$router.replace("/admin/view_deposit");
              }else if(resp.data.userType == "accountant"){
                this.$router.replace("/admin/view_deposit");
              }
              
              else{
              this.$router.replace("/admin/view");}
          
        }
      });
    }
  },
};
</script>

<style>
.box.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}
</style>
