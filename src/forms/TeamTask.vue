<template>
<div>

    <HeaderFile :FirstHeader="$t('Team_Task.TeamTask')" />
    <b-container cols="5">
        <b-list-group>

            <b-list-group-item>

                <b-col>
                    <span>
                        <b-form inline>
                            <span>
                                <strong>{{$t("Common.Department") +" : "}}</strong>
                                <b-form-input id="ex-disabled-readonly" v-model="form.venue">
                                </b-form-input>
                            </span>
                        </b-form>
                        <div style="float:right">
                            <span>
                                <b-form inline>

                                    {{ $t("Common.Date") + " :"}}

                                    <b-form-datepicker id="example-datepicker" v-model="form.date"></b-form-datepicker>
                                </b-form>
                            </span>

                        </div>

                    </span>

                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                <div class="table-responsive">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>

                                <th scope="col">{{ $t("Common.SpecificTask") }}</th>
                                <th scope="col">{{ $t("Common.Purpose") }}</th>
                                <th scope="col">{{ $t("Common.Deadline") }}</th>
                                <th scope="col">{{ $t("Common.ResponsibleLeader") }}</th>
                                <th scope="col">{{ $t("Common.RequiredFinance") }}</th>
                                <th scope="col">{{ $t("Common.Remarks") }}</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in form.answerForq1" :key="index">
                                <th>{{index + 1}}</th>

                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.specificTask" type="text" required :placeholder="'SpecificTask' + (index + 1)"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.purpose" type="text" required :placeholder="'Purpose' + (index + 1)"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.deadline" type="text" required :placeholder="'Deadline' + (index + 1)"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.responsibleLeader" type="text" required :placeholder="'Responsible Leader' + (index + 1)"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.requiredFinance" type="text" required :placeholder="'Required Finance' + (index + 1)"></b-form-input>
                                </td>
                                <td>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="item.remarks" type="text" required :placeholder="'Remarks' + (index + 1)"></b-form-input>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.answerForq1.push({
                    specificTask:'',
                    purpose:'',
                    deadline:'',
                    responsibleLeader:'',
                    requiredFinance:'',
                    remarks:''

                })">+</b-button>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.PreparedBy") + " :"}}
                                <b-form-input id="ex-disabled-readonly" v-model="form.preparedBy">
                                </b-form-input>
                            </span>

                        </b-form>
                        ({{ $t("Common.DepartmentLeader")}})
                    </b-col>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.CheckedBy") + " :"}}
                                <b-form-input id="ex-disabled-readonly" v-model="form.checkedBy">
                                </b-form-input>
                            </span>
                        </b-form>
                        ({{ $t("Common.TeamLeader")}})

                    </b-col>
                </b-row>
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
            <b-button to="/question/team_meeting" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/alpha_team" variant="outline-success">
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
                date: Date,
                checkedBy: '',
                preparedBy: '',
                answerForq1: [{
                    specificTask: '',
                    purpose: '',
                    deadline: '',
                    responsibleLeader: '',
                    requiredFinance: '',
                    remarks: ''
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
        let dataBase = '/teamTasks';
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
            let dataBase = "/TeamTasks";
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
                        this.form.date = Date;
                        this.form.checkedBy = '';
                        this.form.preparedBy = '';
                        this.form.answerForq1 = [{
                            specificTask: '',
                            purpose: '',
                            deadline: '',
                            responsibleLeader: '',
                            requiredFinance: '',
                            remarks: ''
                        }];
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
