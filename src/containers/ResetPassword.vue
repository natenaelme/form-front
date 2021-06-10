<template>
  <div class="container">
    <div class="card shadow-lg o-hidden border-0 my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-5 d-none d-lg-flex">
            <div
              class="flex-grow-1 bg-register-image"
              style="background-color: black"
            >
              <h3
                class="text-center d-xl-flex justify-content-xl-center align-items-xl-center"
                style="color: white; height: 100%"
              >
                <img src="@/assets/img/alpha_icon.png" alt="" width="10%" />
                POWERFUL PROCESS
              </h3>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h4 class="text-dark mb-4">
                  {{ $t("Common.CreateAccount") }}
                </h4>
              </div>
              <form>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <div class="form-group">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        v-model="user.password"
                        id="password"
                        name="password"
                        class="form-control"
                        :class="{
                          'is-invalid': submitted && $v.user.password.$error,
                        }"
                      />
                      <div
                        v-if="submitted && $v.user.password.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.user.password.required"
                          >Password is required</span
                        >
                        <span v-if="!$v.user.password.minLength"
                          >Password must be at least 6 characters</span
                        >
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label for="confirmPassword">Confirm Password</label>
                      <input
                        type="password"
                        v-model="user.confirmPassword"
                        id="confirmPassword"
                        name="confirmPassword"
                        class="form-control"
                        :class="{
                          'is-invalid':
                            submitted && $v.user.confirmPassword.$error,
                        }"
                      />
                      <div
                        v-if="submitted && $v.user.confirmPassword.$error"
                        class="invalid-feedback"
                      >
                        <span v-if="!$v.user.confirmPassword.required"
                          >Confirm Password is required</span
                        >
                        <span
                          v-else-if="!$v.user.confirmPassword.sameAsPassword"
                          >Passwords must match</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center">
                <button
                  class="btn btn-primary btn-block text-white btn-user"
                  @click="handleSubmit()"
                >
                  {{ $t("Common.changePassword") }}
                </button>
                <hr />
              </div>

              <div class="text-center">
                <router-link to="/signin"
                  >Back To Login</router-link
                >
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
</template>
<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
const {PostVerification} = require("../assets/js/service");
export default {
  data() {
    return {    
        submitted:false,
        token : null,
        show: true,
        
      user: {
        email: "",
        password: "",
        confirmPassword: "",

      },
      
    };
  },validations: {
        user: {
          password: {
            required,
            minLength: minLength(6),
          },
          confirmPassword: {
            required,
            sameAsPassword: sameAs("password"),
          },
        },
      },
  mounted() {
    console.log(this.$route.query.access_token);
    let dataFromUrl = this.$route.query.access_token.split("breakthrough");
    this.token = dataFromUrl[1];
    this.user.email = dataFromUrl[0];
    
  },
  methods: {
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    handleSubmit() {
      this.show = false;
      this.submitted = true;

      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }else{
        let database = "users/changePassword";
        PostVerification(database,this.token,this.user).then(resp=>{
this.makeToast("success", " you have success fully Changed Your Password");
this.show =true;
this.$router.replace('/login')
        }).catch((err) => {
                        console.log(this.form);
                        if (err.response) {
                            // client received an error response (5xx, 4xx)

                            this.makeToast("danger", "the Information that you entered is not correct.or the email or user name allrady existed");
                            this.show = true;
                            console.log(err);
                        } else if (err.request) {
                            console.log("dfghjkjhgfdfghjjhgfddfghjhgfdfg");
                            this.makeToast("Connection Problem");
                            this.show = true;
                        } else {
                            this.makeToast("Some Error has Happened");
                            this.show = true;
                        }
                    });
            }
      
    },
  },
};
</script>
<style>
</style>