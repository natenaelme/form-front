<template>
  <div>
    <div>
      <b-navbar toggleable="sm" variant="light" type="light" fixed="top">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand>Breakthrough</b-navbar-brand>

        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>
              <router-link to="/question/main">{{
                $t("Common.Home")
              }}</router-link>
            </b-nav-text>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-text>
              <router-link to="/question/progress">{{
                $t("Common.Progress")
              }}</router-link>
            </b-nav-text>
          </b-navbar-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown class="lang" text="Lang">
              <LocaleSwitcher />
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-nav>
          <router-link to="notification">
            <b-avatar
              :badge="UnreadMessages.toString()"
              variant="primary"
              badge-variant="dark"
              icon="b-icon-bell-fill"
            ></b-avatar>
          </router-link>
        </b-navbar-nav>

        <b-nav-item-dropdown>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em
              ><img
                class="border rounded-circle img-profile"
                thumbnail
                fluid
                :src="profileImage"
                width="40em"
                height="40em"
              /><span class="d-none d-lg-inline mr-2 text-gray-600 small">{{
                fullName
              }}</span></em
            >
          </template>
          <b-dropdown-item style="margin: 0 !important; width: 100%">
            <router-link to="profile"> Profile</router-link>
          </b-dropdown-item>
          <b-dropdown-item
            @click="logOut()"
            style="margin: 0 !important; width: 100%"
            >Sign Out</b-dropdown-item
          >
        </b-nav-item-dropdown>

        <!--<b-button @click="logOut()" variant="outline" class="mb-2">
                <b-icon icon="power" aria-hidden="true"></b-icon> Logout
            </b-button>-->
      </b-navbar>
    </div>
  </div>
</template>

<script>
const { logout, Gets } = require("../assets/js/service");
import Vue from "vue";
import LocaleSwitcher from "./LocaleSwitcher.vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin, BIconArrowUp } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
export default {
  name: "NavBar",
  components: {
    LocaleSwitcher,
    BIconArrowUp,
  },
  data() {
    return {
      UnreadMessages: 0,
      profileImage: localStorage.getItem("profileImage"),
      fullName: localStorage.getItem("fullName"),
    };
  },
  mounted() {
    this.profileImage = localStorage.getItem("profileImage");
    this.fullName = localStorage.getItem("fullName");
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");
    Gets("messages/customerUnreadMessage", token, { customerId: userId }).then(
      (resp) => {
        console.log("count" + resp.data.count);
        this.UnreadMessages = resp.data.count;
      }
    );
  },
  methods: {
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    logOut() {
      const token = localStorage.getItem("token");
      if (token == "") {
        localStorage.clear();
        this.$router.replace("/login");
      } else {
        logout(token).then(
          (resp) => {
            localStorage.clear();
            console.log(resp);
            this.$router.replace("/login");
          },
          (err) => {
            localStorage.clear();

            this.$router.replace("/login");
          }
        );
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
