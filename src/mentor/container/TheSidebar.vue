<template>
<CSidebar fixed :minimize="minimize" :show="show" @update:show="(value) => $store.commit('set', ['sidebarShow', value])">
    <CSidebarBrand class="d-md-down-none" to="/admin/view">
        <br>
        <div style="margin-top:10px">
            <p class="c-sidebar-brand-full text-center"><span><img src="../../assets/img/alpha_icon.png" alt="" width="40em"> <br> Breakthrough</span></p>
            <p class="c-sidebar-brand-minimized"><img src="../../assets/img/alpha_icon.png" alt="" width="40em"></p>
        </div>

        <!--<CIcon class="c-sidebar-brand-full" name="logo" size="custom-size" :height="35" viewBox="0 0 556 134" />
         <CIcon class="c-sidebar-brand-minimized" name="logo" size="custom-size" :height="35" viewBox="0 0 110 134" />-->
    </CSidebarBrand>

    <CRenderFunction flat :content-to-render="$options.nav" />
    <CSidebarMinimizer class="d-md-down-none" @click.native="$store.commit('set', ['sidebarMinimize', !minimize])" />
</CSidebar>
</template>

<script>
import nav from './_nav'

export default {
    name: 'TheSidebar',
    nav,
    computed: {
        show() {
            return this.$store.state.sidebarShow
        },
        minimize() {
            return this.$store.state.sidebarMinimize
        }
    }
}
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
