<template>
<div>
    <h1>{{$t('My_Life_Purpose.MyLifePurpose')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{$t('My_Life_Purpose.Year')}}
                    </b-col>
                    <b-col sm=9>
                        {{$t('My_Life_Purpose.MajorEvent')}}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row v-for="(item,index) in form.history" :key="index">
                    <b-col sm='3' style="background-color:white">
                        {{form.history[index].year}}

                    </b-col>
                    <b-col sm='9' style="background-color:white">
                        {{form.history[index].majorEvent}}
                        <br>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyPurpose')}}</strong>
            </b-list-group-item>
            <b-list-group-item style="background-color:white">
                {{form.myPurpose}}
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyMission')}}</strong>
            </b-list-group-item>
            <b-list-group-item style="background-color:white">
                {{form.myMission}}
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyLifePrinciple')}}</strong>
            </b-list-group-item>
            <b-list-group-item style="background-color:white">
                {{form.myLifePrinciple}}
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
                history: [{
                    year: Number,
                    majorEvent: ''
                }],
                myPurpose: '',
                myMission: '',
                myLifePrinciple: '',
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
    },
    mounted: function () {

        let dataBase = '/myLives';
        getUserData(dataBase, localStorage.getItem("userToView"), this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    // this.makeToast("", "Wellcome")
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

    }

}
</script>

<style lang="stylus" scoped>

</style>
