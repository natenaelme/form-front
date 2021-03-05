<template>
  <div>
       <b-jumbotron style="background-color:black" text-variant="white" border-variant="dark">
       <h3 style="text-align: center"><img src="@/assets/img/alpha_icon.png" alt="" width="60em"> {{ $t("Common.Payment") }}</h3>
          </b-jumbotron>
    <b-container>
        
      <div class="o-hidden border-0 my-5">
         
        <b-row>
          <b-col md="6" sm="12" @click="routeTo('/verify')">
            <b-card no-body class="overflow-hidden hoverableButton">
              <b-row no-gutters>
                <b-col md="6">
                  <img
                    src="@/assets/img/password.png"
                    style="width: 100%"
                    height="200em"
                  />
                </b-col>
                <b-col md="6">
                  <b-card-body :title="$t('Common.PaymentKey')">
                    <b-card-text>
                      {{ $t("Common.PaymentKeyDetail") }}
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col md="6" sm="12" @click="routeTo('/deposit')">
            <b-card no-body class="overflow-hidden hoverableButton">
              <b-row no-gutters>
                <b-col md="6">
                  <img
                    src="@/assets/img/bank.jpg"
                    style="width: 100%"
                    height="200em"
                  />
                </b-col>
                <b-col md="6">
                  <b-card-body :title="$t('Common.UploadDepositInformation')">
                    <b-card-text>
                      {{ $t("Common.DepositDetail") }}
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

          <div class="text-center">
                      <router-link to="/login">{{
                        $t("Common.BackLogin")
                      }}</router-link>
                    </div>
      </div>
    </b-container>
  </div>
</template>
<script>
import Vue from "vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
export default {
  data() {
    return {};
  },
  methods: {
      routeTo(route){
          this.$router.replace(route);
      }
  },
};
</script>
<style>
.hoverableButton :hover {
  opacity: 0.8;
}
</style>