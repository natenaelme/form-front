<template>
<div>

    <HeaderFile :FirstHeader="$t('How_To_Build.HowToBuild')" />

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
                        <div v-for="(item,index) in form.IdentifyYourGoal.answerForq1" :key="index">
                            <b-form-input style="font-size:12px" v-model="form.IdentifyYourGoal.answerForq1[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.IdentifyYourGoal.answerForq1.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion2")}}
                        <div v-for="(item,index) in form.IdentifyYourGoal.answerForq2" :key="index">
                            <b-form-input style="font-size:12px" v-model="form.IdentifyYourGoal.answerForq2[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.IdentifyYourGoal.answerForq2.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="3">
                        {{ $t("How_To_Build.1stQuestion.subQuestion3")}}
                        <div v-for="(item,index) in form.IdentifyYourGoal.answerForq3" :key="index">
                            <b-form-input style="font-size:12px" v-model="form.IdentifyYourGoal.answerForq3[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.IdentifyYourGoal.answerForq3.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion4")}}
                        <div v-for="(item,index) in form.IdentifyYourGoal.answerForq4" :key="index">
                            <b-form-input style="font-size:12px" v-model="form.IdentifyYourGoal.answerForq4[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.IdentifyYourGoal.answerForq4.push('')">+</b-button>
                        </b-col>
                    </b-col>
                    <b-col md="2">
                        {{ $t("How_To_Build.1stQuestion.subQuestion5")}}
                        <div v-for="(item,index) in form.IdentifyYourGoal.answerForq5" :key="index">
                            <b-form-input style="font-size:12px" v-model="form.IdentifyYourGoal.answerForq5[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                            <br />
                        </div>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.IdentifyYourGoal.answerForq5.push('')">+</b-button>
                        </b-col>
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
                        <b-form-textarea id="textarea3" v-model="form.CreateHabit.answerForq1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("How_To_Build.2ndQuestion.subQuestion2")}}
                        <b-form-textarea id="textarea3" v-model="form.CreateHabit.answerForq2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="4">{{ $t("How_To_Build.2ndQuestion.subQuestion3")}}
                        <b-form-textarea id="textarea3" v-model="form.CreateHabit.answerForq3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("How_To_Build.Header3") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Build.3rdQuestion") }}
                <b-form-textarea id="textarea3" v-model="form.CreateNewIdentity.answerForq1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
            <b-button to="/question/habit" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/process_of_change" variant="outline-success">
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
        let dataBase = '/howToBuilds';
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
            let dataBase = "/HowToBuilds";
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
                        this.submited = true;
                        this.edit = true;
                        console.log(resp.data);
                        this.form.IdentifyYourGoal = {
                                answerForq1: [],
                                answerForq2: [],
                                answerForq3: [],
                                answerForq4: [],
                                answerForq5: [],
                            },
                            this.form.CreateHabit = {
                                answerForq1: "",
                                answerForq2: "",
                                answerForq3: "",
                            },
                            this.form.CreateNewIdentity = {
                                answerForq1: "",
                            },
                            this.form.Daily_Rep = [];
                        this.$emit('changeTitle', 'habit');
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
