<template>
<div>
    <h1>{{$t('Mental_Bank_Ledger.MentalBankLedger')}}</h1>
    <b-container cols="5">
        <b-list-group-item>
            <b-row>
                <b-col>
                    <b-col>{{$t('Common.Date')}}:</b-col>
                    <b-col style="background-color:white">
                        {{form.date}}
                    </b-col>

                </b-col>
                <b-col>
                    <b-col>{{$t('Mental_Bank_Ledger.goal')}} :</b-col>
                    <b-col style="background-color:white">
                        {{form.perHoure}}
                    </b-col>

                </b-col>
            </b-row>
        </b-list-group-item>
        <b-list-group-item class="tabel-responsive">

            <table class="table">
                <thead>
                    <tr>
                        <th class="col-4" style="width: 50%;">{{ $t("My_New_Mental.Value") }}</th>
                        <th scope="col">{{ $t("My_New_Mental.Hourly") }}</th>
                        <th scope="col">{{ $t("Mental_Bank_Ledger.Rate") }}</th>
                        <th scope="col">{{ $t("My_New_Mental.Flat") }}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in form.answer1" :key="index">
                        <th style="background-color:white">
                            {{form.answer1[index].ValueEvents}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer1[index].HourlyRate}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer1[index].Rate}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer1[index].FlatRate}}
                        </th>

                    </tr>

                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
                        <th style="background-color:white" colspan="3">
                            {{form.TodaysDeposite}}
                        </th>
                    </tr>
                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
                        <th style="background-color:white" colspan="3">
                            {{form.BalanceForward}}
                        </th>
                    </tr>
                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
                        <th style="background-color:white" colspan="3">
                            {{form.NewMbBalance}}
                        </th>
                    </tr>
                </tbody>
            </table>

        </b-list-group-item>
        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.NewMental") }}</strong>
            <div style="background-color:white"> {{form.Newmental}}</div>

        </b-list-group-item>
        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.Happennings") }}</strong>
            <div style="background-color:white">{{form.Happennings}}</div>

        </b-list-group-item>

        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.Affirmation") }}</strong>
            <div style="background-color:white">{{form.Affirmation}}</div>

        </b-list-group-item>

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

        let dataBase = '/mentalBanks';
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
                answer1: [{
                    ValueEvents: '',
                    HourlyRate: '',
                    Rate: '',
                    FlatRate: ''
                }],
                TodaysDeposite: '',
                BalanceForward: '',
                NewMbBalance: '',
                Newmental: '',
                Affirmation: '',
                Happennings: '',
                date: '',
                perHoure: '',
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
                title: variant,
                variant: variant,
                solid: true
            })
        },

    }

}
</script>

<style>
.normalInput {
    width: 100% !important;
}
</style>
