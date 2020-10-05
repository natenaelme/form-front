<template>
<div>
    <h1>{{$t('How_To_Build.HowToBuild')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("How_To_Build.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("How_To_Build.MainHeader") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Build.Header") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row b-container style="font-size:15px">
                    <b-col md="3">
                        {{ $t("How_To_Build.1stQuestion.subQuestion1")}}
                        <div style="background-color:white" v-for="(item,index) in form.IdentifyYourGoal.answerForq1" :key="index">
                            <label style="font-size:12px">{{form.IdentifyYourGoal.answerForq1[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion2")}}
                        <div style="background-color:white" v-for="(item,index)  in form.IdentifyYourGoal.answerForq2" :key="index">
                            <label style="font-size:12px">{{form.IdentifyYourGoal.answerForq2[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="3">
                        {{ $t("How_To_Build.1stQuestion.subQuestion3")}}
                        <div style="background-color:white" v-for="(item,index) in form.IdentifyYourGoal.answerForq3" :key="index">
                            <label style="font-size:12px">{{form.IdentifyYourGoal.answerForq3[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion4")}}
                        <div style="background-color:white" v-for="(item,index) in form.IdentifyYourGoal.answerForq4" :key="index">
                            <label>{{form.IdentifyYourGoal.answerForq4[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion5")}}
                        <div style="background-color:white" v-for="(item,index) in form.IdentifyYourGoal.answerForq5" :key="index">
                            <label style="font-size:12px">{{form.IdentifyYourGoal.answerForq5[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("How_To_Build.MainHeader2") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Build.Header2") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        <div>{{ $t("How_To_Build.2ndQuestion.subQuestion1")}}</div>

                        <br>
                        <div style="background-color:white">
                            <label>{{form.CreateHabit.answerForq1}}</label>
                        </div>

                    </b-col>
                    <b-col md="4">{{ $t("How_To_Build.2ndQuestion.subQuestion2")}}
                        <div style="background-color:white">
                            <label>{{form.CreateHabit.answerForq2}}</label>
                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("How_To_Build.2ndQuestion.subQuestion3")}}

                        <div style="background-color:white">
                            <label>{{form.CreateHabit.answerForq3}}</label>
                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("How_To_Build.Header3") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Build.3rdQuestion") }}
                <label>{{form.CreateNewIdentity.answerForq1}}</label>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Build.Header4") }}
            </b-list-group-item>

            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") }}
                            </b-col>
                            <b-col md="9">
                                {{ $t("Habit.f,v,a") }}
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row v-for="day in form.Daily_Rep" :key="day">
                            <b-col md="3">
                                {{ $t("Common.Day") + " 1"}}
                            </b-col>
                            <b-col md="9" style="background-color:white">
                                <label>{{day}}</label>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
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

                IdentifyYourGoal: {
                    answerForq1: [''],
                    answerForq2: [''],
                    answerForq3: [''],
                    answerForq4: [''],
                    answerForq5: [''],
                },
                CreateHabit: {
                    answerForq1: "",
                    answerForq2: "",
                    answerForq3: "",
                },
                CreateNewIdentity: {
                    answerForq1: "",
                },
                Daily_Rep: [],

            },

            show: true,

        };
    },
    mounted: function () {
        let dataBase = '/howToBuilds';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
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

    },
    name: "HowToBuild",

};
</script>

<style>
.vl {
    border-right: 2px solid gray;
    border-bottom: 3px solid gray;
    height: 100%;
}

.vl2 {
    border-left: 1px solid gray;
    height: 100%;
}

.lds-ripple {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
}

.lds-ripple div {
    position: absolute;
    border: 4px solid rgb(92, 91, 91);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

.lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
}

@keyframes lds-ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}
</style>
