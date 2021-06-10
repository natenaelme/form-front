<template>
<div>

    <h1>{{$t('My_Dream.MyDream')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-row>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamHouse')}}</label>
                        {{form.House}}
                    </div>

                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamCars')}}</label>
                        {{form.Cars}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamIntertainment')}}</label>
                        {{form.Intertainment}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamFamily')}}</label>
                        {{form.Family}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamSpiritualLife')}}</label>
                        {{form.SpiritualLife}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamServiceLifeStyle')}}</label>
                        {{form.ServiceLifeStyle}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamPhysicalStructure')}}</label>
                        {{form.PhysicalStructure}}
                    </div>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.DreamSocialLife')}}</label>
                        {{form.SocialLife}}
                    </div>
                </b-col>
                <b-col md="4">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.OtherDreamLifestyles')}}</label>
                        {{form.DreamLifestyles}}
                    </div>

                </b-col>
                <b-col md="4">
                    <div style="background-color:white">
                        <label for="">{{$t('My_Dream.Others')}}</label>
                        {{form.Others}}
                    </div>
                </b-col>

            </b-row>
            <b-list-group-item>
                <b-row>

                    <b-col md="3">
                        {{$t("Common.Date")}}
                    </b-col>
                    <b-col md="6">
                        <div style="background-color:white">

                            {{form.Date}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>
        </b-list-group>

    </b-container>

</div>
</template>

<script>
const {

    getUserData,

} = require('../../assets/js/service')
export default {
    components: {

    },
    data() {
        return {
            form: {
                House: '',
                Cars: '',
                Intertainment: '',
                Family: '',
                SpiritualLife: '',
                ServiceLifeStyle: '',
                PhysicalStructure: '',
                SocialLife: '',
                DreamLifestyles: '',
                Others: '',
                Date: '',
                VerifiedByMentor: false,
                userId: localStorage.getItem("userId"),
            },

        }
    },
    mounted: function () {
        let dataBase = '/dreamBoards';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)

                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem")
                } else {
                    this.makeToast("danger", "Some Error has Happened")
                }
            })
    },
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },

    },
}
</script>

<style>
th {
    font-weight: normal !important
}
</style>
