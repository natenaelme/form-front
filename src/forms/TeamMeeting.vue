<template>
<div>

    <HeaderFile :FirstHeader="$t('Team_Meeting.TeamMeeting')" />

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Team_Meeting.Detail") }}</small>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col>
                        <span>
                            <b-form inline>
                                {{ $t("Common.Date") + " : " }}
                                <b-form-datepicker id="example-datepicker" v-model="form.date"></b-form-datepicker>
                            </b-form>
                        </span>

                    </b-col>
                    <b-col>
                        <span>
                            <b-form inline>
                                {{ $t("Common.Time") + " : "}}
                                <b-form-timepicker id="ex-disabled-readonly" v-model="form.time"></b-form-timepicker>
                            </b-form>
                        </span>

                    </b-col>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.Venue") + " :"}}
                                <b-form-input id="ex-disabled-readonly" v-model="form.venue">
                                </b-form-input>
                            </span>
                        </b-form>

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Common.Participants") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq1" :key="index">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq1[index]" type="text" required :placeholder="(index+1)+'. Full Name'"></b-form-input>
                        <br />
                    </div>
                    <b-col style="text-align:right;padding:0 !important">
                        <b-button variant="danger" v-on:click="form.answerForq1.push('')">+</b-button>
                    </b-col>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Team_Meeting.Header") }}
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Team_Meeting.Point1") }} <br>
                {{ $t("Team_Meeting.Point2") }} <br>
                {{ $t("Team_Meeting.Point3") }}<br>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Common.Assignments") }}
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>

                            <th scope="col">{{ $t("Common.Name") }}</th>
                            <th scope="col">{{ $t("Common.Assignments") }}</th>
                            <th scope="col">{{ $t("Common.Deadline") }}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in form.answerForq2" :key="index">
                            <th>{{index + 1}}</th>

                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="item.name" type="text" required :placeholder="'Name' + (index + 1)"></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="item.assignment" type="text" required :placeholder="'Assignment' + (index + 1)"></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="item.deadline" type="text" required :placeholder="'Deadline' + (index + 1)"></b-form-input>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq2.push({

                    name:'' ,
                    assignment: '',
                    deadline: '',

                })">+</b-button>
                </b-col>
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
            <b-button to="/question/gsystem_attitude" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/team_task" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>

</div>
</template>

<script>
const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')
import HeaderFile from '../containers/HeaderFile'

export default {
    components: {
        HeaderFile
    },
    data() {
        return {
            form: {
                answerForq1: [''],
                answerForq2: [{
                    name: '',
                    assignment: '',
                    deadline: '',
                }],
                venue: '',
                date: Date,
                time: '',
                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
            items: 1
        }
    },
    mounted: function () {
        let dataBase = '/teamMeetings';
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
            let dataBase = "/TeamMeetings";
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
                        this.form.answerForq1 = '';
                        this.form.answerForq2 = '';
                        this.form.answerForq3 = '';
                        this.form.answerForq4 = '';
                        this.form.answerForq5 = '';
                        this.form.answerForq6 = '';
                        this.form.answerForq7 = '';
                        this.form.answerForq8 = '';
                        this.form.answerForq9 = '';
                        this.form.answerForq10 = '';
                        this.form.answerForq11 = '';
                        this.form.answerForq12 = '';
                        this.form.answerForq13 = '';
                        this.form.answerForq14 = '';
                        this.form.answerForq15 = '';
                        this.form.answerForq16 = '';
                        this.submited = true;
                        this.$emit('changeTitle', 'teamBuilding');
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

</style>
