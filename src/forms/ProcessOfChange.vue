<template>
<div>

    <HeaderFile :FirstHeader="$t('Process_Of_Change.ProcessOfChange')" />

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
                        <div v-for="(item,index) in form.UnconsciousWrong.answerForq1" :key="index">
                            <b-form-input id="input-1" style="font-size:12px" v-model="form.UnconsciousWrong.answerForq1[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.UnconsciousWrong.answerForq1.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion2")}}
                        <div v-for="(item,index) in form.UnconsciousWrong.answerForq2" :key="index">
                            <b-form-input id="input-1" style="font-size:12px" v-model="form.UnconsciousWrong.answerForq2[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.UnconsciousWrong.answerForq2.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="3">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion3")}}
                        <div v-for="(item,index) in form.UnconsciousWrong.answerForq3" :key="index">
                            <b-form-input id="input-1" style="font-size:12px" v-model="form.UnconsciousWrong.answerForq3[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.UnconsciousWrong.answerForq3.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        {{ $t("Process_Of_Change.1stQuestion.subQuestion4")}}
                        <div v-for="(item,index) in form.UnconsciousWrong.answerForq4" :key="index">
                            <b-form-input id="input-1" style="font-size:12px" v-model="form.UnconsciousWrong.answerForq4[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.UnconsciousWrong.answerForq4.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        <div>
                            {{ $t("Process_Of_Change.1stQuestion.subQuestion5")}}
                        </div>
                        <br>
                        <div v-for="(item,index) in form.UnconsciousWrong.answerForq5" :key="index">
                            <b-form-input id="input-1" style="font-size:12px" v-model="form.UnconsciousWrong.answerForq5[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.UnconsciousWrong.answerForq5.push('')">+</b-button>
                        </b-col>
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
                        <b-form-textarea id="textarea3" v-model="form.ConsciousWrong.answerForq1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">
                        <div>{{ $t("Process_Of_Change.2ndQuestion.subQuestion2")}}</div> <br>
                        <b-form-textarea id="textarea3" v-model="form.ConsciousWrong.answerForq2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.2ndQuestion.subQuestion3")}}
                        <b-form-textarea id="textarea3" v-model="form.ConsciousWrong.answerForq3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
                        <b-form-textarea id="textarea3" v-model="form.ConsciousRight.answerForq1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.3rdQuestion.subQuestion2")}}
                        <b-form-textarea id="textarea3" v-model="form.ConsciousRight.answerForq2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("Process_Of_Change.3rdQuestion.subQuestion3")}}
                        <b-form-textarea id="textarea3" v-model="form.ConsciousRight.answerForq3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") + " 1"}}
                            </b-col>
                            <b-col md="9">
                                <div>
                                    <b-form-checkbox id="checkbox-1" v-model="form.Daily_Rep[0]" name="checkbox-1" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.Daily_Rep[0] }}</strong></div>
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
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
            <b-button to="/question/how_to_build" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>

            <b-button :disabled="!submited" to="/question/silence_time" variant="outline-success">
                Next<b-icon icon="arrow-right"></b-icon>
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
                userId: localStorage.getItem("userId"),
            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,

        };
    },
    mounted: function () {
        let dataBase = '/processOfChanges';
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
            let dataBase = "/ProcessOfChanges";
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
                        this.form.UnconsciousWrong = {
                                answerForq1: [],
                                answerForq2: [],
                                answerForq3: [],
                                answerForq4: [],
                                answerForq5: [],
                            },
                            this.form.ConsciousWrong = {
                                answerForq1: "",
                                answerForq2: "",
                                answerForq3: "",
                            },
                            this.form.ConsciousRight = {
                                answerForq1: "",
                                answerForq2: "",
                                answerForq3: "",
                            },

                            this.form.Daily_Rep = [];
                        this.form.items = 1,
                            this.form.items2 = 1,
                            this.form.items3 = 1,
                            this.form.items4 = 1,
                            this.form.items5 = 1,
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
