<template>
<div>
    <h1>{{$t('GoalCommon.VitionGoal') }}</h1>
    <b-container cols="9">
        <b-list-group>
            <b-row>

                <b-col lg=1>Date :</b-col>
                <b-col lg=2 style="background-color:white"> {{form.Date}}
                    <br>
                </b-col>
            </b-row>

            <b-list-group-item class="table-responsive">

                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th colspan="2" class="text-center">{{ $t("GoalCommon.Well") }}</th>
                            <th colspan="16" class="text-center">{{ $t("GoalCommon.Detail") }}</th>
                            <th colspan="5" class="text-center">{{ $t("GoalCommon.Process") }}</th>
                        </tr>
                        <tr>

                            <th scope="row" colspan="2" class="align-middle col-6" style="background-color:black;color:white">{{ $t("GoalCommon.VitionGoal") }}</th>

                            <th class="align-middle" scope="col">{{ $t("GoalCommon.FirstStep") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.DeadLine") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Where") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Required") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Skills") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.DidI") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.AnyOne") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Purpose") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.WhatWill") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Impact") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Visualization") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Check") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.WhoCold") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.None") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Useful") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Hindering") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Daily") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Weekly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Monthly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Yearly") }}</th>
                            <th class="align-middle" scope="col">{{ $t("GoalCommon.Calendar") }}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.LongTerm") }}</th>

                            <td style="background-color:white">
                                {{form.LongTermOne.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Visualization}}
                            </td>
                            <td style="background-color:white">
                                <ul v-if="form.LongTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.LongTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermOne.Calendar}}
                            </td>

                        </tr>

                        <tr>

                            <td style="background-color:white">
                                {{form.LongTermTwo.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Visualization}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Check}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.LongTermTwo.Calendar}}
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.MidTerm") }}</th>

                            <td style="background-color:white">
                                {{form.MidTermOne.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Visualization}}
                            </td>
                            <td style="background-color:white">
                                <ul v-if="form.MidTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.MidTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermOne.Calendar}}
                            </td>

                        </tr>
                        <tr>

                            <td style="background-color:white">
                                {{form.MidTermTwo.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Visualization}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Check}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.MidTermTwo.Calendar}}
                            </td>

                        </tr>
                        <tr>
                            <th rowspan="2" class="align-middle">{{ $t("GoalCommon.ShortTerm") }}</th>

                            <td style="background-color:white">
                                {{form.ShortTermOne.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Visualization}}
                            </td>
                            <td style="background-color:white">
                                <ul v-if="form.ShortTermOne.Check" style="overflow-y: scroll; height:150px">
                                    <li v-for="file in form.ShortTermOne.Check" :key='file'>{{file}}</li>

                                </ul>
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermOne.Calendar}}
                            </td>

                        </tr>
                        <tr>

                            <td style="background-color:white">
                                {{form.ShortTermTwo.FinancialGoal}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.FirstStep}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.DeadLine}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Where}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Required}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Skills}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.DidI}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.AnyOne}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Purpose}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.WhatWill}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Impact}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Visualization}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Check}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.WhoCold}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.None}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Useful}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Hindering}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Daily}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Weekly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Monthly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Yearly}}
                            </td>
                            <td style="background-color:white">
                                {{form.ShortTermTwo.Calendar}}
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

} = require("../../assets/js/service");
export default {
    components: {

    },
    mounted: function () {

        let dataBase = '/visionGoals';
        getUserData(dataBase, localStorage.getItem("userToView"), this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    // this.makeToast("", "Wellcome")
                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem")
                } else {
                    this.makeToast("danger", "Some Error has Happened")
                }
            })
    },

    data() {
        return {
            form: {
                LongTermOne: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',

                },
                Date: '',
                LongTermTwo: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',

                },
                MidTermOne: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                MidTermTwo: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                ShortTermOne: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                ShortTermTwo: {
                    FinancialGoal: '',
                    FirstStep: '',
                    DeadLine: '',
                    Where: '',
                    Required: '',
                    Skills: '',
                    DidI: '',
                    AnyOne: '',
                    Purpose: '',
                    WhatWill: '',
                    Impact: '',
                    Visualization: '',
                    Check: '',
                    WhoCold: '',
                    None: '',
                    Useful: '',
                    Hindering: '',
                    Daily: '',
                    Weekly: '',
                    Monthly: '',
                    Yearly: '',
                    Calendar: '',
                },
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
    },
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },

    }

}
</script>

<style>
input {
    width: 100px !important;
}
</style>
