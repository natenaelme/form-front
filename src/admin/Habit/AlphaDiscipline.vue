<template>
<div>

    <h1>{{$t('Alpha_Discipline.AlphaDiscipline')}}
    </h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Alpha_Discipline.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Discipline.1stQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq1" :key="index">
                        <div style="background-color:white">
                            {{form.answerForq1[index]}}
                        </div>
                        <br />
                    </div>

                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Discipline.2ndQuestion") }}
                <div style="background-color:white">
                    {{form.answerForq2}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Discipline.Header") }}
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
                        <tr v-for="(day,index) in form.answerForq3" :key="index">
                            <th>{{index+1}}</th>
                            <td style="background-color:white">
                                <div style="background-color:whhite">
                                    {{day.date}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:whhite">
                                    {{day.morning}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:whhite">
                                    {{day.midDay}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:whhite">
                                    {{day.evening}}
                                </div>
                            </td>
                            <td style="background-color:white">
                                <div style="background-color:whhite">
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
    components: {},
    name: "AlphaDiscipline",
    data() {
        return {
            form: {
                answerForq1: [""],
                answerForq2: "",
                answerForq3: [{
                    date: "",
                    morning: "",
                    midDay: "",
                    evening: "",
                    remarks: ""
                }],

            },

        }
    },
    mounted: function () {
        let dataBase = '/alphaDisciplines';
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

<style lang="">

</style>
