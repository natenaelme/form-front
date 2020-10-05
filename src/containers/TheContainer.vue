<template>
<div class="c-app">
    <TheSidebar />
    <CWrapper>
        <TheHeader />
        <div class="c-body">
            <main class="c-main">
                <CContainer fluid>
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </CContainer>
            </main>
        </div>
        <TheFooter />
    </CWrapper>
</div>
</template>

<script>
import TheSidebar from './TheSidebar'
import Vue from 'vue'
import TheHeader from './TheHeader'
import TheFooter from './TheFooter'

import CoreuiVue from '@coreui/vue'
import 'core-js/stable'
Vue.use(CoreuiVue)

export default {
    name: 'TheContainer',
    components: {
        TheSidebar,
        TheHeader,
        TheFooter
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
