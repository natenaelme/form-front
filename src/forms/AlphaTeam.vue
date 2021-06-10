<template>
<div>

    <HeaderFile :FirstHeader="$t('Alpha_Team.AlphaTeam')" />
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.teamVision" type="text" required placeholder="Team Vision"></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("Alpha_Team.TeamName") }}
                    </b-col>
                    <b-col sm="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.teamName" type="text" required placeholder="Team Name"></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("Alpha_Team.MeaningOfName") }}
                    </b-col>
                    <b-col sm="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.meaningOfName" type="text" required placeholder="Meaning Of Name"></b-form-input>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.longTerm" type="text" required placeholder="Long Term"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.year" type="number" required placeholder="Year"></b-form-input>
                    </b-col>

                </b-row>
                <br>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq1.push({
                    longTerm: '',
                    year: ''

                })">+</b-button>
                </b-col>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.medium" type="text" required placeholder="Medium"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.year" type="number" required placeholder="Year"></b-form-input>
                    </b-col>
                    <br>
                </b-row>
                <br>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq2.push({
                    medium: '',
                    year: ''

                })">+</b-button>
                </b-col>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.shortTerm" type="text" required placeholder="Short Term"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.month" type="number" required placeholder="Month"></b-form-input>
                    </b-col>
                    <br>

                </b-row>
                <br>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq3.push({
                    shortTerm: '',
                    month: ''

                })">+</b-button>
                </b-col>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.name" type="text" required placeholder="Name"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.position" type="text" required placeholder="Position"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.telephone" type="number" required placeholder="Telephone"></b-form-input>
                    </b-col>
                    <b-col sm="3">
                        <b-form-input id="input-1" style="font-size:12px" v-model="item.email" type="email" required placeholder="Email"></b-form-input>
                    </b-col>
                </b-row>
                <br>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq4.push({
                                       name: '',
                    position: '',
                    telephone: '',
                    email: ''

                })">+</b-button>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.ActivitySchedule')}}
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Monthly')}}
                <b-form-textarea id="textarea3" v-model="form.monthly" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Weekly')}}
                <b-form-textarea id="textarea3" v-model="form.weekly" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{$t('Alpha_Team.Daily')}}
                <b-form-textarea id="textarea3" v-model="form.daily" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
            </b-list-group-item>
        </b-list-group>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save </button><br>
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div><br>
        </div>
        <div class="text-center">
            <b-button to="/question/team_task" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/alpha" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>
</div>
</template>

<script>
import HeaderFile from '../containers/HeaderFile'
const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')
export default {
    components: {
        HeaderFile
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
                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/alphaTeams';
        getUserData(dataBase, this.id, this.token).then(resp => {
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
        saveForm() {
            let dataBase = "/AlphaTeams";
            this.show = false;
            console.log(this.show);
            if (this.edit) {
                patchData(dataBase, this.token, this.form).then(resp => {
                        console.log(resp);
                        this.makeToast("success", "success fully edited your form");
                        this.show = true;
                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            } else {
                posts(dataBase, this.form).then((resp) => {
                        console.log(resp.data);
                        this.edit = true;
                        this.form.teamVision = '';
                        this.form.teamName = '';
                        this.form.meaningOfName = '';
                        this.form.answerForq1 = [{
                            longTerm: '',
                            year: ''
                        }];
                        this.form.answerForq2 = [{
                            medium: '',
                            year: ''
                        }];
                        this.form.answerForq3 = [{
                            shortTerm: '',
                            month: ''
                        }];
                        this.form.answerForq4 = [{
                            name: '',
                            position: '',
                            telephone: '',
                            email: ''
                        }];
                        this.form.monthly = '';
                        this.form.weekly = '';
                        this.form.daily = '';
                        this.submited = true;
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            }
        }

    },
}
</script>

<style>
.mar {
    margin-bottom: 5px;
}
</style>
