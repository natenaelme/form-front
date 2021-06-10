<template>
<div>

    <h1>{{$t('Process_Of_Change.ProcessOfChange')}}</h1>

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Process_Of_Change.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Process_Of_Change.MainHeader") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Process_Of_Change.Header") }}
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Action")+":"+ $t("Process_Of_Change.Action") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row b-container style="font-size:15px">
                    <b-col md="3">
                        <div>
                            {{ $t("Process_Of_Change.1stQuestion.subQuestion1")}}
                        </div>
                        <br>
                        <div style="background-color:white" v-for="(item,index) in form.UnconsciousWrong.answerForq1" :key="index">
                            <label>{{form.UnconsciousWrong.answerForq1[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion2")}}
                        <div style="background-color:white" v-for="(item,index) in form.UnconsciousWrong.answerForq2" :key="index">
                            <label>{{form.UnconsciousWrong.answerForq2[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="3">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion3")}}
                        <div style="background-color:white" v-for="(item,index) in form.UnconsciousWrong.answerForq3" :key="index">
                            <label>{{form.UnconsciousWrong.answerForq3[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion4")}}
                        <div style="background-color:white" v-for="(item,index) in form.UnconsciousWrong.answerForq4" :key="index">
                            <label>{{form.UnconsciousWrong.answerForq4[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                    <b-col md="2">
                        <div>
                            {{ $t("Process_Of_Change.1stQuestion.subQuestion5")}}
                        </div>
                        <br>
                        <div style="background-color:white" v-for="(item,index) in form.UnconsciousWrong.answerForq5" :key="index">
                            <label>{{form.UnconsciousWrong.answerForq5[index]}}</label>
                            <br />
                        </div>

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Process_Of_Change.MainHeader2") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Process_Of_Change.Header2") }}
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Action")+":"+ $t("Process_Of_Change.Action2") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        <div>{{ $t("Process_Of_Change.2ndQuestion.subQuestion1")}}</div>

                        <br>
                        <div style="background-color:white">
                            <label>{{form.ConsciousWrong.answerForq1}}</label>

                        </div>
                    </b-col>
                    <b-col md="4">
                        <div>{{ $t("Process_Of_Change.2ndQuestion.subQuestion2")}}</div> <br>
                        <div style="background-color:white">
                            <label>{{form.ConsciousWrong.answerForq2}}</label>

                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.2ndQuestion.subQuestion3")}}
                        <div style="background-color:white">
                            <label>{{form.ConsciousWrong.answerForq3}}</label>

                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Process_Of_Change.MainHeader3") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Process_Of_Change.Header3") }}
            </b-list-group-item>
            <b-list-group-item>
                <span style="overflow: hidden;">
                    {{$t("Action")+":"+ $t("Process_Of_Change.Action3") }}
                </span>

            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        <div>{{ $t("Process_Of_Change.3rdQuestion.subQuestion1")}}</div>

                        <br>
                        <div style="background-color:white">
                            <label>{{form.ConsciousRight.answerForq1}}</label>

                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.3rdQuestion.subQuestion2")}}
                        <div style="background-color:white">
                            <label>{{form.ConsciousRight.answerForq2}}</label>

                        </div>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.3rdQuestion.subQuestion3")}}
                        <div style="background-color:white">
                            <label>{{form.ConsciousRight.answerForq3}}</label>

                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Process_Of_Change.Header4") }}
            </b-list-group-item>
            <b-list-group-item>
                {{$t("Action")+":"+ $t("Process_Of_Change.Action4") }}
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
                                <label>day</label>
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

                UnconsciousWrong: {
                    answerForq1: [''],
                    answerForq2: [''],
                    answerForq3: [''],
                    answerForq4: [''],
                    answerForq5: [''],
                },
                ConsciousWrong: {
                    answerForq1: "",
                    answerForq2: "",
                    answerForq3: "",
                },
                ConsciousRight: {
                    answerForq1: "",
                    answerForq2: "",
                    answerForq3: "",
                },
                Daily_Rep: [],

            },
            show: true,

        };
    },
    mounted: function () {
        let dataBase = '/processOfChanges';
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
                title: "Error",
                variant: variant,
                solid: true
            })
        },

    },
    name: "ProcessOfChange",

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
