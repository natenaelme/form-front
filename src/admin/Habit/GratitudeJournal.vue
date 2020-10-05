<template>
<div>

    <h1>{{$t('Gratitude_Journal.GratitudeJournal')}}
    </h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{$t('Gratitude_Journal.Detail')}}</small>
            </b-list-group-item>
            <b-list-group-item v-for="(date,index) in form.Daily_Rep" :key="index">
                <h6 class="text-center">Progress number {{index + 1}}</h6>
                <b-row>
                    <b-col md="6" v-for="item in 50" :key="item.message">
                        <b-row>

                            <b-col md="12">
                                <b-row v-if="item">
                                    <b-col md="2">{{'point'+item}}</b-col>
                                    <b-col md="10" style="background-color:white">
                                        <p md="12">{{form.Daily_Rep[index][item - 1]}}</p>
                                    </b-col>
                                </b-row>
                                <b-row v-if="!item">
                                    <b-col md=2>{{'point'+item}}</b-col>
                                    <b-col md=10 style="background-color:white">
                                        <ul></ul>
                                    </b-col>
                                </b-row>

                                <br>
                            </b-col>
                        </b-row>
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
                Daily_Rep: [],

            },

        }
    },
    mounted: function () {
        let dataBase = '/gratitudeJournals';
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
                title: variant,
                variant: variant,
                solid: true
            })
        },

    },
}
</script>

<style lang="stylus" scoped>

</style>
