<template>
<CHeader fixed with-subheader light>
    <CToggler in-header class="ml-3 d-lg-none" @click="$store.commit('toggleSidebarMobile')" />
    <CToggler in-header class="ml-3 d-md-down-none" @click="$store.commit('toggleSidebarDesktop')" />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">

        <img width="40em" height="40em" src="../../assets/img/alpha_icon.png" alt="">
        <h5>Breakthrough</h5>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">

    </CHeaderNav>
    <CHeaderNav class="mr-4">

        <TheHeaderDropdownAccnt />
    </CHeaderNav>

</CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
    name: 'TheHeader',
    components: {
        TheHeaderDropdownAccnt
    }
}
</script>
