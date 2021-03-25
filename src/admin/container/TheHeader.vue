<template>
<CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" @click="$store.commit('toggleSidebarMobile')" />
    <CToggler in-header class="ml-3 d-md-down-none" @click="$store.commit('toggleSidebarDesktop')" />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">

        <img width="40em" height="40em" src="../../assets/img/alpha_icon.png" alt="">
        <h5>Breakthrough</h5>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
        <CHeaderNavItem class="px-3">
            <CHeaderNavLink>

                <b-navbar-nav>
                    <b-nav-item-dropdown class="lang" text="Lang">
                        <LocaleSwitcher />
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </CHeaderNavLink>
        </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav v-if="UserType == 'mentor'" class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-2">
        <CHeaderNavLink>
          
                  <b-navbar-nav>
          <router-link to="mentor_notification">
            <b-avatar
              :badge="UnreadMessages.toString()"
              variant="primary"
              badge-variant="light"
              icon="b-icon-bell-fill"
            ></b-avatar>
          </router-link>
        </b-navbar-nav>
        </CHeaderNavLink>
      </CHeaderNavItem>
     
      
      
    </CHeaderNav>
    <CHeaderNav class="mr-4">

        <TheHeaderDropdownAccnt />
    </CHeaderNav>

</CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import LocaleSwitcher from '../../containers/LocaleSwitcher'
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import { BootstrapVue, IconsPlugin, BIconArrowUp } from "bootstrap-vue";

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);
const {  Gets } = require("../../assets/js/service");
export default {

    name: 'TheHeader',
    components: {
        
        TheHeaderDropdownAccnt,
        LocaleSwitcher
    },
    data() {
        return {
            UnreadMessages:0,
            UserType : localStorage.getItem("userType")
        }
    },
    mounted() {
    let token = localStorage.getItem("token");
    let userId = localStorage.getItem("userId");

    Gets("messages/mentorUnreadMessage", token, { customerId: userId }).then(
      (resp) => {
        console.log("count" + resp.data.count);
        this.UnreadMessages = resp.data.count;
      }
    );
    },
}
</script>
