<template>
<div>

    <HeaderFile :FirstHeader="$t('Levels_of_Leadership.LevelsOfLeadership')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col md="6">
                        {{$t("Levels_of_Leadership.1stQuestion.subQuestion1")}}
                        <div v-for="(item, index) in 5" :key="index">
                            <b-form-input id="ex-disabled-readonly" v-model="form.answerForq1['influencers' + (index+1)].answerForq1"></b-form-input>
                            <br>
                        </div>
                    </b-col>
                    <b-col md="6">
                        {{$t("Levels_of_Leadership.1stQuestion.subQuestion2")}}
                        <div v-for="(item, index) in 5" :key="index">
                            <b-form-input id="ex-disabled-readonly" v-model="form.answerForq1['influencers' + (index+1)].answerForq2"></b-form-input>
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
                    <table class="table" style="width:100%">
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
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.leader" type="text" required :placeholder="'Name'"></b-form-input>
                                </td>
                                <td>
                                    <div>
                                        <b-form-input id="input-1" style="font-size:12px" v-model="item.date" type="date" required></b-form-input>
                                    </div>
                                </td>

                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.time" type="time" required></b-form-input>

                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.place" type="text" required :placeholder="'Place'"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.remarks" type="text" required :placeholder="'Remarks'"></b-form-input>
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
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.month" type="number" required :placeholder="'Month'"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.activity" type="text" required :placeholder="'Activity'"></b-form-input>
                                </td>

                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.time" type="time" required></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.place" type="text" required :placeholder="'Place'"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.fund" type="text" required :placeholder="'Fund'"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.remarks" type="text" required :placeholder="'Remarks'"></b-form-input>
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
                    <b-form-input id="ex-disabled-readonly" v-model="form.answerForq4['point' + (index+1)]" :placeholder="'Point ' + (index+1)"></b-form-input>
                    <br>
                </div>
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
            <b-button to="/question/qualities" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/four_attributes" variant="outline-success">
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
        let dataBase = '/Levelsofleaderships';
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
                title: variant,
                variant: variant,
                solid: true
            })
        },
        saveForm() {
            let dataBase = "/Levelsofleaderships";
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
                        this.form.answerForq1 = {
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
                        };
                        this.form.answerForq2 = [{
                            leader: '',
                            date: '',
                            time: '',
                            place: '',
                            remarks: ''
                        }];
                        this.form.answerForq3 = [{
                            month: '',
                            activity: '',
                            time: '',
                            place: '',
                            fund: '',
                            remarks: ''
                        }];
                        this.form.answerForq4 = {
                            point1: '',
                            point2: '',
                            point3: ''
                        };
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
