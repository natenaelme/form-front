<template>
<div>

    <HeaderFile :FirstHeader="$t('Alpha_Responsibility.AlphaResponsibility')" />

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
                            <th scope="col">{{ $t("Common.Health") }}</th>
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
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Knowledge" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Health" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Food" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Shelter" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Cloth" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Income" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Others" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveTime.Family" type="text" required placeholder=""></b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion2") }}</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Knowledge" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Health" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Food" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Shelter" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Cloth" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Income" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Others" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveMoney.Family" type="text" required placeholder=""></b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion3") }}</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Knowledge" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Health" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Food" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Shelter" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Cloth" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Income" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Others" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.dontGiveEffort.Family" type="text" required placeholder=""></b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("Alpha_Responsibility.1stQuestion.subQuestion4") }}</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Knowledge" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Health" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Food" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Shelter" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Cloth" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Income" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Others" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.levelOfResponsibility.Family" type="text" required placeholder=""></b-form-input>
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
                        <b-form-textarea id="textarea3" v-model="form.takeResponsibility.answerForq1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("Alpha_Responsibility.2ndQuestion.subQuestion2")}}
                        <b-form-textarea id="textarea3" v-model="form.takeResponsibility.answerForq2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("Alpha_Responsibility.2ndQuestion.subQuestion3")}}
                        <b-form-textarea id="textarea3" v-model="form.takeResponsibility.answerForq3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Responsibility.3rdQuestion")}}
                <b-form-input id="input-1" style="font-size:12px; width:300px" v-model="form.answerForq3" type="text" required placeholder="answer"></b-form-input>
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Morning") }}</th>
                            <th scope="col">{{ $t("Common.MidDay") }}</th>
                            <th scope="col">{{ $t("Common.Evening") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4[0].date" type="date" required></b-form-input>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].morning" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].morning}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].midDay" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].midDay}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].evening" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].evening}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4[0].remarks" type="text" required :placeholder="'Remarks'"></b-form-input>
                            </td>
                        </tr>

                    </tbody>
                </table>
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
            <b-button to="/question/alpha_displine" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/gratitude_journal" variant="outline-success">
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
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/alphaResponsibilities';
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
            let dataBase = "/AlphaResponsibilities";
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
                        this.form.dontGiveTime = {
                            Knowledge: "",
                            Health: "",
                            Food: "",
                            Shelter: "",
                            Cloth: "",
                            Income: "",
                            Others: "",
                            Family: ""
                        };
                        this.form.dontGiveMoney = {
                            Knowledge: "",
                            Health: "",
                            Food: "",
                            Shelter: "",
                            Cloth: "",
                            Income: "",
                            Others: "",
                            Family: ""
                        };
                        this.form.dontGiveEffort = {
                            Knowledge: "",
                            Health: "",
                            Food: "",
                            Shelter: "",
                            Cloth: "",
                            Income: "",
                            Others: "",
                            Family: ""
                        };
                        this.form.levelOfResponsibility = {
                            Knowledge: "",
                            Health: "",
                            Food: "",
                            Shelter: "",
                            Cloth: "",
                            Income: "",
                            Others: "",
                            Family: ""
                        };
                        this.form.takeResponsibility = {
                            answerForq1: "",
                            answerForq2: "",
                            answerForq3: ""
                        };
                        this.form.answerForq3 = "";
                        this.form.answerForq4 = [{
                            date: "",
                            morning: "",
                            midDay: "",
                            evening: "",
                            remarks: ""
                        }];

                        this.submited = true;
                        this.$emit('changeTitle', 'habit');
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
th {
    font-weight: normal !important
}
</style>
