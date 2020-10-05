<template>
<div>

    <h1>{{$t('Team_Task.TeamTask')}}</h1>
    <b-container cols="5">
        <b-list-group>

            <b-list-group-item>

                <b-col>
                    <span>
                        <b-form inline>
                            <span>
                                <strong>{{$t("Common.Department") +" : "}}</strong>
                                <div style="background-color:white">
                                    {{form.venue}}
                                </div>

                            </span>
                        </b-form>
                        <div style="float:right">
                            <span>
                                <b-form inline>

                                    {{ $t("Common.Date") + " :"}}
                                    <div style="background-color:white">
                                        {{form.date}}
                                    </div>
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
                                    <div style="background-color:white">
                                        {{item.specificTask}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.purpose}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.deadline}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.responsibleLeader}}
                                    </div>
                                </td>
                                <td>
                                    <div style="background-color:white">
                                        {{item.requiredFinance}}
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
                <b-row>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.PreparedBy") + " :"}}
                                <div style="background-color:white">
                                    {{form.preparedBy}}
                                </div>

                            </span>

                        </b-form>
                        ({{ $t("Common.DepartmentLeader")}})
                    </b-col>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.CheckedBy") + " :"}}
                                <div style="background-color:white">
                                    {{form.checkedBy}}
                                </div>

                            </span>
                        </b-form>
                        ({{ $t("Common.TeamLeader")}})

                    </b-col>
                </b-row>
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

            },

        }
    },
    mounted: function () {
        let dataBase = '/teamTasks';
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
                title: variant,
                variant: variant,
                solid: true
            })
        },

    },
}
</script>
