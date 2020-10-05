<template>
<div>
    <HeaderFile :FirstHeader="$t('Mental_Bank_Ledger.MentalBankLedger')" />
    <b-container cols="5">
        <b-list-group-item>
            <b-row>
                <b-col>
                    <b-col>{{$t('Common.Date')}}:</b-col>
                    <b-col>
                        <b-input type="date" v-model="form.date" class="normalInput" />
                    </b-col>

                </b-col>
                <b-col>
                    <b-col>{{$t('Mental_Bank_Ledger.goal')}} :</b-col>
                    <b-col>
                        <b-input type="text" v-model="form.perHoure" class="normalInput" />
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
                        <th>
                            <b-form-input id="input-1" class="normalInput" style="font-size:12px" v-model="form.answer1[index].ValueEvents" type="text" required placeholder=""></b-form-input>
                        </th>
                        <th>
                            <b-form-input id="input-1" class="normalInput" style="font-size:12px" v-model="form.answer1[index].HourlyRate" type="number" required placeholder=""></b-form-input>
                        </th>
                        <th>
                            <b-form-input id="input-1" class="normalInput" style="font-size:12px" v-model="form.answer1[index].Rate" type="number" required placeholder=""></b-form-input>
                        </th>
                        <th>
                            <b-form-input id="input-1" class="normalInput" style="font-size:12px" v-model="form.answer1[index].FlatRate" type="number" required placeholder=""></b-form-input>
                        </th>

                    </tr>
                    <tr>
                        <th colspan="4">
                            <b-col style="text-align:right;padding:0 !important">
                                <b-button variant="danger" v-on:click="form.answer1.push({                                        
                    ValueEvents: '',
                    HourlyRate: '',
                    FlatRate: ''})">+</b-button>
                            </b-col>
                        </th>

                    </tr>
                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
                        <th colspan="3">
                            <b-input v-model="form.TodaysDeposite" class="normalInput" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
                        <th colspan="3">
                            <b-input v-model="form.BalanceForward" class="normalInput" type="text" />
                        </th>
                    </tr>
                    <tr>
                        <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
                        <th colspan="3">
                            <b-input v-model="form.NewMbBalance" class="normalInput" type="text" />
                        </th>
                    </tr>
                </tbody>
            </table>

        </b-list-group-item>
        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.NewMental") }}</strong>
            <b-form-textarea class="normalInput" v-model="form.Newmental" rows="6" max-rows="6" />

        </b-list-group-item>
        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.Happennings") }}</strong>
            <b-form-textarea class="normalInput" v-model="form.Happennings" rows="6" max-rows="6" />

        </b-list-group-item>

        <b-list-group-item>
            <strong>{{ $t("Mental_Bank_Ledger.Affirmation") }}</strong>
            <b-form-textarea class="normalInput" v-model="form.Affirmation" rows="6" max-rows="6" />

        </b-list-group-item>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save </button><br>
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div><br>
            <div class="text-center">
                <b-button to="/question/my_new_mental" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/main" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
const {
    posts,
    getUserData,
    patchData,
    getUrl
} = require("../../assets/js/service");
export default {
    components: {
        HeaderFile
    },
    mounted: function () {

        let dataBase = '/mentalBanks';
        getUserData(dataBase, this.id, this.token).then(resp => {
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

        saveForm() {
            this.show = false;
            let dataBase = "/mentalBanks";
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
                        this.form.answer1 = [{
                            ValueEvents: '',
                            HourlyRate: '',
                            Rate: '',
                            FlatRate: ''
                        }];
                        this.form.TodaysDeposite = '';
                        this.form.BalanceForward = '';
                        this.form.NewMbBalance = '';
                        this.form.Newmental = '';
                        this.form.Affirmation = '';
                        this.form.Happennings = '';
                        this.submited = true;
                        this.$emit('changeTitle', 'vision');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    }, )
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

    }

}
</script>

<style>
.normalInput {
    width: 100% !important;
}
</style>
