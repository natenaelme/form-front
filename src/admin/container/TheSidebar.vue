<template>
  <CSidebar
    fixed
    :minimize="minimize"
    :show="show"
    @update:show="(value) => $store.commit('set', ['sidebarShow', value])"
  >
    <CSidebarBrand class="d-md-down-none" to="/admin/view">
      <br />
      <div style="margin-top: 10px">
        <p class="c-sidebar-brand-full text-center">
          <span
            ><img src="../../assets/img/alpha_icon.png" alt="" width="40em" />
            <br />
            Breakthrough</span
          >
        </p>
        <p class="c-sidebar-brand-minimized">
          <img src="../../assets/img/alpha_icon.png" alt="" width="40em" />
        </p>
      </div>

      <!--<CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 556 134" />
         <CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" />-->
    </CSidebarBrand>

    <div v-if="userType == 'admin'">
      <CRenderFunction flat :content-to-render="admin"> </CRenderFunction>
    </div>
    <div v-if="userType == 'mentor'">
      <CRenderFunction flat :content-to-render="mentor" />
    </div>

    <CSidebarMinimizer
      class="d-md-down-none"
      @click.native="$store.commit('set', ['sidebarMinimize', !minimize])"
    />
  </CSidebar>
</template>

<script>
import nav from "./_nav";

export default {
  name: "TheSidebar",

  nav,

  data() {
    return {
      userType: localStorage.getItem("userType"),
      mentor: [
        {
          _name: "CSidebarNav",
          _children: [
            {
              _name: "CSidebarNavItem",
              name: "View",
              to: "/admin/view",
              icon: "cil-columns",
              user: "all",
            },
          ],
        },
      ],
      admin: [
        {
          _name: "CSidebarNav",
          _children: [
            {
              _name: "CSidebarNavItem",
              name: "View",
              to: "/admin/view",
              icon: "cil-columns",
              user: "all",
            },
            {
              _name: "CSidebarNavItem",
              name: "Waiting For Approval",
              to: "/admin/view_un_approved",
              icon: "cil-calendar-check",
              user: "admin",
            },
            {
              _name: "CSidebarNavItem",
              name: "Mentor",
              to: "/admin/mentor",
              icon: "cil-user",
              user: "admin",
            },
            {
              _name: "CSidebarNavDropdown",
              name: "Verification",
              route: "/base",
              icon: "cil-check",
              items: [
                {
                  _name: "CSidebarNavItem",
                  name: "Generate Verification",
                  to: "/admin/verification",
                  icon: "",
                  user: "admin",
                },
                {
                  _name: "CSidebarNavItem",
                  name: "View Verification",
                  to: "/admin/view_verification",
                  icon: "",
                  user: "admin",
                },
              ],
            },
          ],
        },
      ],
    };
  },

  computed: {
    show() {
      console.log(this.$store.state.sidebarShow);
      return this.$store.state.sidebarShow;
    },
    minimize() {
      return this.$store.state.sidebarMinimize;
    },
  },
};
</script>

<style>
.Aligner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.Aligner-item {
  max-width: 50%;
}
</style>
