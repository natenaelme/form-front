<template>
<div>

    <h1>{{$t('Six_Steps.SixSteps')}} </h1>

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Six_Steps.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.1stQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq1}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.2ndQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq2}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.3rdQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq3}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.4thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq4}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.5thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq5}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.6thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") }}
                            </b-col>
                            <b-col md="9">
                                {{ $t("Four_Attributes.ReadingMorining")+" , "+$t("Four_Attributes.ReadingEvening")}}
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row v-for="(day,index) in form.Daily_Rep" :key="index">
                            <b-col md="3">
                                {{ $t("Common.Day") + (index+1)}}
                            </b-col>
                            <b-col md="9">
                                <div style="background-color:white">
                                    {{day}}
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
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
                answerForq1: "",
                answerForq2: "",
                answerForq3: "",
                answerForq4: "",
                answerForq5: "",
                userId: localStorage.getItem("userId"),
            },

        }
    },
    mounted: function () {
        let dataBase = '/sixSteps';
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

<style>

</style>
