<template>
<div>

    <HeaderFile :FirstHeader="$t('Alpha_Discipline.AlphaDiscipline')" />
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
                        <b-form-input id="input-1" style="font-size:12px; width:100% !important" v-model="form.answerForq1[index]" type="text" required :placeholder="'answer ' + (index + 1)"></b-form-input>
                        <br />
                    </div>
                    <b-col style="text-align:right;padding:0 !important">
                        <b-button variant="danger" v-on:click="form.answerForq1.push('')">+</b-button>
                    </b-col>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Discipline.2ndQuestion") }}
                <b-form-textarea id="textarea3" v-model="form.answerForq2" placeholder="Enter something..." rows="5" max-rows="6"></b-form-textarea>
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
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3[0].date" type="date" required></b-form-input>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].morning" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].morning}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].midDay" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].midDay}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].evening" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].evening}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3[0].remarks" type="text" required :placeholder="'Remarks'"></b-form-input>
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
            <b-button to="/question/silence_time" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/alpha_responsibility" variant="outline-success">
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
                userId: localStorage.getItem("userId"),
            },
            items: 1,
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/alphaDisciplines';
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
            let dataBase = "/AlphaDisciplines";
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
                        this.form.answerForq1 = [""];
                        this.werForq2ans = "";
                        this.answerForq3 = [{
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

<style lang="">

</style>
