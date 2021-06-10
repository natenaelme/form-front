<template>
<div>

    <h1>{{$t('Alpha_Responsibility.AlphaResponsibility')}}</h1>

    <b-row>
        <b-col md="12">

        </b-col>
    </b-row>

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Alpha_Responsibility.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Responsibility.1stQuestion.main") }}
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">{{ $t("Common.Knowledge") }}</th>
                            <th scope="col">{{ $t("Common.Helth") }}</th>
                            <th scope="col">{{ $t("Common.Food") }}</th>
                            <th scope="col">{{ $t("Common.Shelter") }}</th>
                            <th scope="col">{{ $t("Common.Cloth") }}</th>
                            <th scope="col">{{ $t("Common.Income") }}</th>
                            <th scope="col">{{ $t("Common.Others") }}</th>
                            <th scope="col">{{ $t("Common.Family") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion1") }}</th>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Knowledge}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Health}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Food}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    <div style="background-color:white">
                                        {{form.dontGiveTime.Shelter}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Cloth}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Income}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Others}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveTime.Family}}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion2") }}</th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{form.dontGiveMoney.Knowledge}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Health}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Food}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Shelter}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Cloth}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Income}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Others}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveMoney.Family}}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion3") }}</th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{form.dontGiveEffort.Knowledge}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Health}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Food}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Shelter}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Cloth}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Income}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Others}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.dontGiveEffort.Family}}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion4") }}</th>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Knowledge}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Health}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Food}}

                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Shelter}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Cloth}}

                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Income}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Others}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.levelOfResponsibility.Family}}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Responsibility.2ndQuestion.main") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        <div>{{ $t("Alpha_Responsibility.2ndQuestion.subQuestion1")}}</div>
                        <div style="background-color:white">
                            {{form.takeResponsibility.answerForq1}}
                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("Alpha_Responsibility.2ndQuestion.subQuestion2")}}
                        <div style="background-color:white">
                            {{form.takeResponsibility.answerForq2}}
                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("Alpha_Responsibility.2ndQuestion.subQuestion3")}}
                        <div style="background-color:white">
                            {{form.takeResponsibility.answerForq3}}
                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Responsibility.3rdQuestion")}}
                <div style="background-color:white">
                    {{form.answerForq3}}
                </div>
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Visual") }}</th>
                            <th scope="col">{{ $t("Common.Gratitude") }}</th>
                            <th scope="col">{{ $t("Common.MentalBank") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(day,index) in form.answerForq4" :key="index">
                            <th>1</th>
                            <td style="background-color:white">
                                <div style="background-color:white">
                                    {{day.date}}

                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:white">
                                    {{day.morning}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:white">
                                    {{day.midDay}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:white">
                                    {{day.evening}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:white">
                                    {{day.remarks}}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
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
                dontGiveTime: {
                    Knowledge: "",
                    Health: "",
                    Food: "",
                    Shelter: "",
                    Cloth: "",
                    Income: "",
                    Others: "",
                    Family: ""
                },
                dontGiveMoney: {
                    Knowledge: "",
                    Health: "",
                    Food: "",
                    Shelter: "",
                    Cloth: "",
                    Income: "",
                    Others: "",
                    Family: ""
                },
                dontGiveEffort: {
                    Knowledge: "",
                    Health: "",
                    Food: "",
                    Shelter: "",
                    Cloth: "",
                    Income: "",
                    Others: "",
                    Family: ""
                },
                levelOfResponsibility: {
                    Knowledge: "",
                    Health: "",
                    Food: "",
                    Shelter: "",
                    Cloth: "",
                    Income: "",
                    Others: "",
                    Family: ""
                },
                takeResponsibility: {
                    answerForq1: "",
                    answerForq2: "",
                    answerForq3: ""
                },
                answerForq3: "",
                answerForq4: [{
                    date: "",
                    morning: "",
                    midDay: "",
                    evening: "",
                    remarks: ""
                }],
                userId: localStorage.getItem("userId"),
            },
            show: true,

        }
    },
    mounted: function () {
        let dataBase = '/alphaResponsibilities';
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
