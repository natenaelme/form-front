<template>
  <div class="main" style="padding-top: 5%">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-9 col-lg-12 col-xl-10">
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
                      <img
                        src="@/assets/img/alpha_icon.png"
                        alt=""
                        width="10%"
                      />
                      {{ $t("Common.Deposit") }}
                    </h3>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">
                        {{ $t("Common.DepoInfo") }}
                      </h4>
                    </div>
                    <div v-if="!Loaded" class="text-center">
                      <div class="lds-ripple">
                        <div></div>
                        <div></div>
                      </div>
                      loading..
                    </div>
                    <form v-if="Loaded" class="user">
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          v-model="Deposit.fullName"
                          type="text"
                          :placeholder="$t('Common.FullName')"
                          name="verification"
                        />
                        <p v-if="!Deposit.fullName" style="color: red">
                          {{ $t("Common.fullnameBlank") }}
                        </p>
                        <br />
                        <input
                          class="form-control form-control-user"
                          v-model="Deposit.transactionId"
                          type="text"
                          :placeholder="$t('Common.TransactionId')"
                        />
                        <p v-if="!Deposit.transactionId" style="color: red">
                          {{ $t("Common.t-idnotblank") }}
                        </p>
                      </div>

                      <hr />

                      <p v-if="!Deposit.userId" style="color: red">
                        You Have To Login First
                      </p>
                      <div class="col-sm-12">
                                        <label for="dropzone">Picther</label>
                                        <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="vsuccess" :options="vdropzoneOptions"></vue-dropzone>
                                        <div v-if="!imageuploaded" style="color:red" class="text-center">
                                            the image is not uploaded
                                        </div>
                                    </div>
                    </form>
                    <p v-if="haveDeposit" style="color: green">
                      {{ $t("Common.waitToE-Pin") }}
                    </p>
                    <button
                      class="btn btn-primary btn-block text-white btn-user"
                      @click="sendDeposit()"
                      type="submit"
                    >
                      {{ $t("Common.verify") }}
                    </button>

                    <div class="text-center">
                      <router-link to="/payment">{{
                        $t("Common.BackPayment")
                      }}</router-link>
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
const { posts, getterDeposit, patchData,getUrl } = require("../assets/js/service");
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

export default { 
  components: {
        vueDropzone: vue2Dropzone,
    },
  mounted() {
    if (this.$store.state.user == null || this.$store.state.token == null) {
      this.$router.replace("/login");
    }
    this.Deposit.userId = this.$store.state.user.id;
    this.token = this.$store.state.token;
    console.log(this.Deposit.userId);
    getterDeposit("userId", this.Deposit.userId).then((resp) => {
      console.log(resp);
      this.Loaded = true;
      if (resp.data.length > 0) {
        this.Deposit = resp.data[0];
        this.edit = true;
        
      } else {
        this.edit = false;
      }
    });
  },
  data() {
    return {
      haveDeposit: false,
      user: null,
      imageuploaded:true,
      show: true,
      Loaded: false,
      Deposit: {
        fullName: null,
        transactionId: null,
        userId: null,
        imageOfSleep:null,
      },
      edit: false,
      token: null,
                  vdropzoneOptions: {
                url: getUrl(),
                thumbnailWidth: 150,
                maxFilesize: 3.5,
                addRemoveLinks: true,

                maxFiles: 1,
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD PICTURE",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },

            },
    };
  },
  methods: {
      vsuccess(file, response) {
            console.log(response);
            console.log(response.secure_url);
            this.Deposit.imageOfSleep = response.secure_url

        },
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    sendDeposit() {
      if (this.edit == false) {
        if(this.Deposit.imageOfSleep){
        if (
          this.Deposit.fullName != null &&
          this.Deposit.transactionId != null &&
          this.Deposit.userId != null
        ) {
          posts("/Deposites", this.Deposit)
            .then((resp) => {
              this.show = false;
              this.haveDeposit = true;

              this.show = true;
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
        }else{
          this.imageuploaded = false;
        }
      } else {
        console.log("patch");
        patchData("/Deposites", this.token, this.Deposit)
          .then((resp) => {
            this.makeToast(
              "Success",
              "You have Successfuly Edited your deposite history"
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
  },
};
</script>