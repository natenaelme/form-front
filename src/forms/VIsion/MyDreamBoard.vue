<template>
<div>
    <HeaderFile :FirstHeader="$t('My_Dream_Board')" />
    <b-row style="margin-top: -15%;">
        <b-col md=3></b-col>
        <b-col md=6 class="view overlay">
            <img style="margin-top: 46%;margin-left: -2%" @click="route('physical')" class="img-fluid image" src="../../assets/img/health.png" width='40%'>

            <img style="margin-left: -22%;margin-top: 21px;" @click="route('spirtual')" class="image" src="../../assets/img/spri.png" width='40%'>
            <img style="margin-left: -7%; margin-top: 24px;" @click="route('service')" class="image" src="../../assets/img/vission.png" width='40%'>
            <img style="margin-top: 61%;margin-left: -59%;" class="image" src="../../assets/img/circle.png" width='40%'>
            <img style="margin-top: -50%;margin-left: 65%;" @click="route('financial') " class="image" src="../../assets/img/finacal.png" width='40%'>
            <img style="margin-top: -19%;margin-left: 59%;" @click="route('family')" class="image" src="../../assets/img/family.png" width='40%'>
            <img style="margin-top: -27%;margin-left: 31%;" @click="route('socal_dream')" class="image" src="../../assets/img/socal.png" width='40%'>
            <img style="margin-top: -62%;margin-left: 3%;" @click="route('my_mental')" class="image" src="../../assets/img/Knowlage.png" width='40%'>
        </b-col>
        <b-col md=3></b-col>
    </b-row>
    <p class="text-center">
        <b-button to="/question/use_posetive" :disabled='next' variant="success">Next</b-button>
    </p>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile'
export default {
    components: {
        HeaderFile
    },
    data() {
        return {
            pages: localStorage.getItem('pages'),
            next: true
        }
    },
    mounted() {
        let pages = this.pages.split(',');
        console.log(pages[0]);

        if (pages[0] >= 12) {
            this.next = false;
        }
    },
    methods: {
        route(value) {
            this.$router.replace(value)
        }
    },
}
</script>

<style>
.image:hover {
    opacity: 0.5;
    align-self: flex-end;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    margin: 0 auto 0 auto;
    transform-origin: bottom;

}
</style>
