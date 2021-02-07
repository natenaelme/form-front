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
                      {{ $t("Common.ver") }}
                    </h3>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">
                        {{ $t("Common.verification") }}
                      </h4>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          class="form-control form-control-user"
                          v-model="verification"
                          type="text"
                          :placeholder="$t('Common.verification')"
                          name="verification"
                        />
                      </div>
                      

                      <hr />
                    </form>

                    <button
                      class="btn btn-primary btn-block text-white btn-user"
                      @click="verify()"
                      type="submit"
                    >
                      {{ $t("Common.verify") }}
                    </button>

                    <div class="text-center">
                      <router-link to="/login">{{
                        $t("Common.BackLogin")
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
const { getterVerKey, patchDataId } = require("../assets/js/service");
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  mounted() {
    console.log(this.$store.state.user);
    this.user = this.$store.state.user;
    this.token = this.$store.state.token;
    if (this.$store.state.user == null || this.$store.state.token == null) {
      this.$router.replace("/login");
    }
  },
  data() {
    return {
      verification: "",
      show: true,
      user: null,
      token: null,
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
    verify() {
      this.show = false;
      if (this.verification) {
        getterVerKey("key", this.verification)
          .then((resp) => {
            if (resp.data.length > 0) {
              console.log(resp);

              if (resp.data[0].used) {
                this.show = true;
                this.makeToast(
                  "danger",
                  "this verification key has been used before"
                );
              } else {
                console.log("sssssssssssssssssaaaaaaaaaaaaa");

                var data = {
                  canAccess: true,
                  workBook: resp.data[0].workbook,
                  verificationId: resp.data[0].id,
                };
                patchDataId(this.user.id, "users/", this.token, data)
                  .then((resps) => {
                    console.log(resps.data);
                    var verData = {
                      used: true,
                      userId: resps.data.id,
                    };
                    patchDataId(
                      resp.data[0].id,
                      "verifications/",
                      this.token,
                      verData
                    )
                      .then((responce) => {
                        localStorage.setItem("token", this.token);
                        localStorage.setItem("userId", resps.data.id);
                        localStorage.setItem(
                          "profileImage",
                          resps.data.profileImage
                        );
                        localStorage.setItem("userType", resps.data.userType);
                        localStorage.setItem(
                          "fullName",
                          resps.data.firstName + " " + resps.data.lastName
                        );
                        localStorage.setItem("progress", resps.data.progress);
                        localStorage.setItem("pages", resps.data.pages);
                        localStorage.setItem("workBook", resps.data.workBook);

                        this.$router.replace("/question/main");
                        this.show=true;
                        this.makeToast(
                          "success",
                          "Dear " +
                            resp.data.firstName +
                            " you have success Verified Your Account"
                        );
                      })
                      .catch((err) => {
                        if (err.response) {
                          // client received an error response (5xx, 4xx)
                          this.makeToast(
                            "danger",
                            "There is Some Error.Please Check your Form"
                          );
                          this.show=true;
                        } else if (err.request) {
                          this.makeToast("danger", "Connection Problem");
                          this.show=true;
                        } else {
                          this.makeToast("danger", "Some Error has Happened");
                          this.show=true;
                        }
                      });
                  })
                  .catch((err) => {
                    if (err.response) {
                      // client received an error response (5xx, 4xx)
                      this.makeToast(
                        "danger",
                        "There is Some Error.Please Check your Form"
                      );
                      this.show=true;
                    } else if (err.request) {
                      this.makeToast("danger", "Connection Problem");
                      this.show=true;
                    } else {
                      this.makeToast("danger", "Some Error has Happened");
                      this.show=true;
                    }
                  });
              }
            } else {
              this.show = true;
              this.makeToast("danger", "this verification key dosn't exist");
            }
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
<style>
.box.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
}
</style>