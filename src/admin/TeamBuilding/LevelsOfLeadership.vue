<template>
<div>

    <h1>{{$t('Levels_of_Leadership.LevelsOfLeadership')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col md="6">
                        {{$t("Levels_of_Leadership.1stQuestion.subQuestion1")}}
                        <div v-for="(item, index) in 5" :key="index">
                            <div style="background-color:white">
                                {{form.answerForq1['influencers' + (index+1)].answerForq1}}
                            </div>
                            <br>
                        </div>
                    </b-col>
                    <b-col md="6">
                        {{$t("Levels_of_Leadership.1stQuestion.subQuestion2")}}
                        <div v-for="(item, index) in 5" :key="index">
                            <div style="background-color:white">
                                {{form.answerForq1['influencers' + (index+1)].answerForq2}}
                            </div>
                            <br>
                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Levels_of_Leadership.Header")}}
            </b-list-group-item>
            <b-list-group-item>
                <div class="table-responsive">
                    <table class="table " style="width:100%">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{ $t("Common.NameLeader") }}</th>
                                <th scope="col">{{ $t("Common.Date") }}</th>
                                <th scope="col">{{ $t("Common.Time") }}</th>
                                <th scope="col">{{ $t("Common.Place") }}</th>
                                <th scope="col">{{ $t("Common.Remarks") }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in form.answerForq2" :key="index">
                                <th>{{index + 1}}</th>
                                <td>
                                    <div style="background-color:white">
                                        {{item.leader}}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div style="background-color:white">
                                            {{item.date}}
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div style="background-color:white">
                                        {{item.time}}
                                    </div>

                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.place}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.remarks}}
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Levels_of_Leadership.2ndQuestion")}}
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{ $t("Common.Month") }}</th>
                                <th scope="col">{{ $t("Common.Activity") }}</th>
                                <th scope="col">{{ $t("Common.Time") }}</th>
                                <th scope="col">{{ $t("Common.Place") }}</th>
                                <th scope="col">{{ $t("Common.Fund") }}</th>
                                <th scope="col">{{ $t("Common.Remarks") }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in form.answerForq3" :key="index">
                                <th>{{index + 1}}</th>
                                <td>
                                    <div style="background-color:white">
                                        {{item.month}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.activity}}
                                    </div>
                                </td>

                                <td>
                                    <div style="background-color:white">
                                        {{item.time}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.place}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.fund}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.remarks}}
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Levels_of_Leadership.3rdQuestion")}}
            </b-list-group-item>
            <b-list-group-item>
                <div v-for="(item, index) in 3" :key="index">
                    <div style="background-color:white">
                        {{form.answerForq4['point' + (index+1)]}}
                    </div>
                    <br>
                </div>
            </b-list-group-item>
        </b-list-group>

    </b-container>
</div>
</template>

<script>
const {

    posts,
    getUserData,
    patchData
} = require('../../assets/js/service')
export default {
    components: {

    },
    data() {
        return {
            form: {
                answerForq1: {
                    influencers1: {
                        answerForq1: '',
                        answerForq2: ''
                    },
                    influencers2: {
                        answerForq1: '',
                        answerForq2: ''
                    },
                    influencers3: {
                        answerForq1: '',
                        answerForq2: ''
                    },
                    influencers4: {
                        answerForq1: '',
                        answerForq2: ''
                    },
                    influencers5: {
                        answerForq1: '',
                        answerForq2: ''
                    },
                },
                answerForq2: [{
                    leader: '',
                    date: '',
                    time: '',
                    place: '',
                    remarks: ''
                }],
                answerForq3: [{
                    month: '',
                    activity: '',
                    time: '',
                    place: '',
                    fund: '',
                    remarks: ''
                }],
                answerForq4: {
                    point1: '',
                    point2: '',
                    point3: ''
                },

            },

        }
    },
    mounted: function () {
        let dataBase = '/Levelsofleaderships';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp);
                this.form = resp.data;

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

</style>
