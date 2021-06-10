<template>
<div>

    <h1>{{$t('Alpha_Team.AlphaTeam')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{$t("Alpha_Team.Detail")}}</small>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("Alpha_Team.TeamVision") }}
                    </b-col>
                    <b-col sm="8">
                        <div style="background-color:white">
                            {{form.teamVision}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("Alpha_Team.TeamName") }}
                    </b-col>
                    <b-col sm="8">
                        <div style="background-color:white">
                            {{form.teamName}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("Alpha_Team.MeaningOfName") }}
                    </b-col>
                    <b-col sm="8">
                        <div style="background-color:white">
                            {{form.meaningOfName}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col>
                        <strong> {{ $t("Alpha_Team.TeamGoals") }}</strong>

                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="9">
                        {{ $t("Alpha_Team.LongTerm") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Year") }}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row class="mar" v-for="(item, index) in form.answerForq1" :key="index">
                    <b-col sm="9">
                        <div style="background-color:white">
                            {{item.longTerm}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.year}}
                        </div>
                    </b-col>

                </b-row>
                <br>

            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="9">
                        {{ $t("Alpha_Team.Medium") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Year") }}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row class="mar" v-for="(item, index) in form.answerForq2" :key="index">
                    <b-col sm="9">
                        <div style="background-color:white">
                            {{item.medium}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.year}}
                        </div>
                    </b-col>
                    <br>
                </b-row>
                <br>

            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="9">
                        {{ $t("Alpha_Team.ShortTerm") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Month") }}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row class="mar" v-for="(item, index) in form.answerForq3" :key="index">
                    <b-col sm="9">
                        <div style="background-color:white">
                            {{item.shortTerm}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.month}}
                        </div>
                    </b-col>
                    <br>

                </b-row>
                <br>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Common.TeamLeaders") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="3">
                        {{ $t("Common.Name") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Position") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Telephone") }}
                    </b-col>
                    <b-col sm="3">
                        {{ $t("Common.Email") }}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row class="mar" v-for="(item, index) in form.answerForq4" :key="index">
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.name}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.position}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.telephone}}
                        </div>
                    </b-col>
                    <b-col sm="3">
                        <div style="background-color:white">
                            {{item.email}}
                        </div>
                    </b-col>
                </b-row>
                <br>

            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.ActivitySchedule')}}
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Monthly')}}
                <div style="background-color:white">
                    {{form.monthly}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Weekly')}}
                <div style="background-color:white">
                    {{form.weekly}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Daily')}}
                <div style="background-color:white">
                    {{form.daily}}
                </div>
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
                teamVision: '',
                teamName: '',
                meaningOfName: '',
                answerForq1: [{
                    longTerm: '',
                    year: ''
                }],
                answerForq2: [{
                    medium: '',
                    year: ''
                }],
                answerForq3: [{
                    shortTerm: '',
                    month: ''
                }],
                answerForq4: [{
                    name: '',
                    position: '',
                    telephone: '',
                    email: ''
                }],
                monthly: '',
                weekly: '',
                daily: '',

            },

        }
    },
    mounted: function () {
        let dataBase = '/alphaTeams';
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
.mar {
    margin-bottom: 5px;
}
</style>
