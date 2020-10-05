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
    <CHeaderNav class="mr-4">

        <TheHeaderDropdownAccnt />
    </CHeaderNav>

</CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'
import LocaleSwitcher from '../../containers/LocaleSwitcher'
export default {
    name: 'TheHeader',
    components: {
        TheHeaderDropdownAccnt,
        LocaleSwitcher
    }
}
</script>
