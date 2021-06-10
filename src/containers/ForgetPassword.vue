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
                      {{ $t("Common.forgetPassword") }}
                    </h3>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">{{ $t("Common.email") }}</h4>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input class="form-control form-control-user" v-model="form.email" type="email" id="exampleInputEmail" aria-describedby="emailHelp" :placeholder="$t('Login.Email')" name="email" />
                      </div>
                      

                      <hr />
                    </form>

                    <button class="btn btn-primary btn-block text-white btn-user" @click="sendEmail()" type="submit">{{ $t("Common.send") }}</button>

                   <div v-if="showSuccess">
                     <p style="color:green">
                       a link has been sent to your email check your email account
                     </p>
                   </div>
                   <div v-if="noUser">
                     <p style="color:red">
                       There is no user with this email
                     </p>
                   </div>
                    <div v-if="!show" class="text-center">
                      <div class="lds-ripple">
                        <div></div>
                        <div></div>
                      </div>
                      loading..
                    </div>
                     <div class="text-center">
                      <router-link to="/login">{{
                        $t("Common.BackLogin")
                      }}</router-link>
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
const {ForgetPassword} = require("../assets/js/service");
export default {
    data() {
        return {
            show:true,
            noUser:false,
            showSuccess : false,
             form: {
        email: "",
      },
        }
    },
    methods: {
      sendEmail(){
        this.show = false;
        let dataBase = "users/forgotPassword";

      ForgetPassword(dataBase,this.form).then(resp=>{
        if(resp.data.responce == "Email sent"){
          console.log(resp);
          this.form = {
            email: ""
          }
          this.showSuccess = true;
        this.show = true;
        }
        else if(resp.data.responce == "there is no user by this email"){
          this.noUser = true;
          this.show = true;
        }
        
      })
      }
      
    },
}
</script>
<style>

</style>