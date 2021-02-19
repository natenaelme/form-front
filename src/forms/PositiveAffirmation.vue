<style>
.small {

    max-width: 600px;

}

.circle {
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

divs {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 100px;
    height: 100px;
    background-color: lightgray;

}

.rotate {
    background-color: transparent;

    transform: rotate(45deg);
}

.rotates {
    background-color: transparent;

}

.rotate45 {
    background-color: transparent;

    transform: rotate(-45deg);
}

.rotate90 {
    background-color: transparent;

    transform: rotate(90deg);
}

.rotate-90 {
    background-color: transparent;

    transform: rotate(-90deg);
}

.rotate-135 {
    background-color: transparent;

    transform: rotate(135deg);
}

.rotate-translate {
    background-color: pink;
    transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
    background-color: gold;
    transform: translateX(180px) rotate(45deg);
}

#topDiv {
    background-color: lightblue;
    max-height: 50%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

#insideDiv {
    background-color: pink;
    overflow-y: auto;
}

@media only screen and (max-width: 600px) {
    width {
        background-color: pink !important;
    }
}
</style>

<template>
<div>
    <HeaderFile :FirstHeader="$t('Positive_Affirmation.PositiveAffirmation')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Positive_Affirmation.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Positive_Affirmation.1stQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq1" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-group id="input-group-1" :label="$t('Positive_Affirmation.2ndQuestion')" label-for="input-1">
                    <b-row>
                        <b-col md="11">
                            <div v-for="(item, index) in form.answerForq2" :key="index">
                                <b-form-input id="input-1" v-model="form.answerForq2[index]" type="text" required :placeholder="'answer ' + (index + 1)"></b-form-input>
                                <br />
                            </div>
                        </b-col>

                        <b-col md="1" style="text-align:right">
                            <b-button variant="danger" v-on:click="form.answerForq2.push('')">+</b-button>
                        </b-col>
                    </b-row>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Positive_Affirmation.3rdQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion1") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br />
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion2") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br />
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion3") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq5" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br />
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion4") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq6" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
                <br />
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion5") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq7" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <div class="small">
                    <b-row>
                        <b-col sm=2>
                            <div style="width:100%">
                                <label for="socal">{{$t('Social')}}</label>
                                <b-form-input id="socal" min="0" max="10" v-model="form.Social" type="number" required></b-form-input>
                            </div>

                        </b-col>
                        <b-col sm=2>
                            <label for="Health">{{$t('Health')}}</label>
                            <b-form-input id="Health" style="300px" min="0" max="10" v-model="form.Health" type="number" required></b-form-input>
                        </b-col>
                        <b-col sm=2>
                            <label for="Family">{{$t('Familys')}}</label>
                            <b-form-input id="Family" style="300px" min="0" max="10" v-model="form.Family" type="number" required></b-form-input>
                        </b-col>
                        <b-col sm=2>
                            <label for="Spiritual">{{$t('Spiritual')}}</label>
                            <b-form-input id="Spiritual" style="300px" min="0" max="10" v-model="form.Spiritual" type="number" required></b-form-input>
                        </b-col>
                        <b-col sm=2>
                            <label for="Financials">{{$t('Financials')}}</label>
                            <b-form-input id="Financials" style="300px" min="0" max="10" v-model="form.Financial" type="number" required></b-form-input>
                        </b-col>
                        <b-col sm=2>
                            <label for="Mental">{{$t('Mental')}}</label>
                            <b-form-input id="Mental" style="300px" min="0" max="10" v-model="form.Mental" type="number" required></b-form-input>
                        </b-col>
                        <b-col sm=2>
                            <label for="Vision">{{$t('Vision')}}</label>
                            <b-form-input id="Vision" style="300px" min="0" max="10" v-model="form.Vision" type="number" required></b-form-input>
                        </b-col>
                    </b-row>

                    <line-chart :chart-data="datacollection"></line-chart>
                </div>
            </b-list-group-item>

            <b-list-group-item>

                <div class="table-responsive" style="margin:0 !important; padding:0Important">
                    <div class="width" style="width:450px;height:450px;  background-color: #f04a24;
  border-radius: 50%;
  display: inline-block; margin">
                        <div style="width:100%">
                            <div class="rotate90 divs" style="        width: 270px;
    margin-left: 26%;
    padding-left: 80px;
    line-height: 1.5 !important;
    padding-right: 0px !important;
    margin-bottom: -33px;">

                                <b-col>
                                    <label for="range-2" style="transform: rotate(-90deg);">Socal
                                        <br>
                                        Value: {{ form.Social }}</label>
                                    <b-form-input id="range-2" style="hight:200px;width:210px" v-model="form.Social" type="range" min="0" max="10" step="1"></b-form-input>
                                    <div class="mt-2"></div>
                                </b-col>
                            </div>

                            <div style="">
                                <b-row style="margin-bottom:10px">
                                    <div class="rotate divs" style=" line-height: 1.5 !important;width:170px;    margin-left: 14%;
    margin-top: 11px;">
                                        <label for="range-2" style="transform: rotate(-45deg);">Vision <br>
                                            Value: {{ form.Vision }}</label>
                                        <b-form-input id="range-2" style="width:210px" v-model="form.Vision" type="range" min="0" max="10" step="1"></b-form-input>

                                    </div>
                                    <div class="rotate-135 divs" style=" line-height: 1.5 !important;width:170px; ">

                                        <b-form-input id="range-2" style="width:210px" v-model="form.Health" type="range" min="0" max="10" step="1"></b-form-input>
                                        <label for="range-2" style="transform: rotate(-130deg);margin-bottom: 10px;">Helth
                                            <br>Value: {{ form.Health }}
                                        </label>
                                    </div>
                                </b-row>

                            </div>

                            <div style="margin-right:30%">
                                <b-row>
                                    <b-col style=" line-height: 1.5 !important;">
                                        <label for="range-2" style="width:200px">Mental <br> Value: {{ form.Mental }}</label>
                                        <b-form-input style="width:210px" id="range-2" v-model="form.Mental" type="range" min="0" max="10" step="1"></b-form-input>

                                    </b-col>
                                    <b-col style=" line-height: 1.5 !important; margin-left:40%">
                                        <label for="range-2" style="float: left;width:100px;margin-left: 200%;">Family <br>Value: {{ form.Family }}</label>
                                        <b-form-input style="transform:rotateY(180deg);width:210px" id="range-2" v-model="form.Family" type="range" min="0" max="10" step="1"></b-form-input>
                                        <div class="mt-2"></div>

                                    </b-col>

                                </b-row>
                            </div>
                            <div>
                                <div style="">
                                    <b-row style="margin-to:10px">
                                        <div class="rotate45 divs" style=" line-height: 1.5 !important;width:180px;    margin-left: 9%;margin-top: 8px;">
                                            <label for="range-2" style="transform: rotate(45deg); ">Financial <br> Value: {{ form.Financial }}</label>
                                            <b-form-input id="range-2" style="width:205px" v-model="form.Financial" type="range" min="0" max="10" step="1"></b-form-input>
                                            <div class="mt-2"></div>
                                        </div>
                                        <div class="rotate divs" style="line-height: 1.5 !important;width:180px;    margin-left: 7px;margin-top: -12px;">
                                            <label for="range-2" style="float: right;transform: rotate(-45deg);">Spiritual <br> Value: {{ form.Spiritual }}</label>
                                            <b-form-input id="range-2" style="transform:rotateY(180deg); width:205px" v-model="form.Spiritual" type="range" min="0" max="10" step="1"></b-form-input>
                                            <div class="mt-2"></div>
                                        </div>
                                    </b-row>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </b-list-group-item>

        </b-list-group>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save</button><br />
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div>
            <br />
        </div>
        <div class="text-center">
            <b-button to="/question/mental_transformation" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/six_steps" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>
</div>
</template>

<script>
import HeaderFile from "../containers/HeaderFile";
const {
    posts,
    getUserData,
    patchData
} = require("../assets/js/service");
// import LineChart from "../assets/js/LineChart.js";

export default {
    components: {
        // LineChart,
        HeaderFile,
    },
    data() {
        return {
            value: 0,
            form: {
                answerForq1: "",
                answerForq2: [""],
                answerForq3: "",
                answerForq4: "",
                answerForq5: "",
                answerForq6: "",
                answerForq7: "",
                Social: '',
                Health: '',
                Family: '',
                Spiritual: '',
                Financial: '',
                Mental: '',
                Vision: '',

                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
            datacollection: null,
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
            // datacollection: null
        };
    },
    mounted() {
        // this.renderChart(this.datacollection, this.options)
        let dataBase = "/positiveAffirmations";
        getUserData(dataBase, this.id, this.token)
            .then((resp) => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
                this.fillData();
            })
            .catch((err) => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem");
                } else {
                    this.makeToast("danger", "Some Error has Happened");
                }
            });
    },
    methods: {
        fillData() {
            console.log("hjgasdhghjasgd");
            this.datacollection = {
                labels: [
                    this.$i18n.t("Socal"),
                    this.$i18n.t("Health"),
                    this.$i18n.t("Family"),
                    this.$i18n.t("Spiritual"),
                    this.$i18n.t("Financial"),
                ],
                datasets: [{
                    label: "Life Balance",
                    backgroundColor: ["Brown", "Beige", "Gray", "Pink"],
                    data: [
                        this.form.Social,
                        this.form.Health,
                        this.form.Family,
                        this.form.Spiritual,
                        this.form.Financial,
                    ],
                }, ],
            };
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true,
            });
        },
        saveForm() {
            let dataBase = "/PositiveAffirmations";
            this.show = false;
            console.log(this.show);
            if (this.edit) {
                patchData(dataBase, this.token, this.form)
                    .then((resp) => {
                        console.log(resp);
                        this.makeToast("success", "success fully edited your form");
                        this.show = true;
                    })
                    .catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form");
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem");
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened");
                            this.show = true;
                        }
                    });
            } else {
                posts(dataBase, this.form)
                    .then((resp) => {
                        console.log(resp.data);
                        this.edit = true;
                        this.form.answerForq1 = "";
                        this.form.answerForq2 = [""];
                        this.form.answerForq3 = "";
                        this.form.answerForq4 = "";
                        this.form.answerForq5 = "";
                        this.form.answerForq6 = "";
                        this.form.answerForq7 = "";
                        this.form.Social = "";
                        this.form.Health = "";
                        this.form.Family = "";
                        this.form.Spiritual = "";
                        this.form.Financial = "";
                        this.submited = true;
                        this.$emit("changeTitle", "mindProgrammingPages");
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;
                    })
                    .catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form");
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem");
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened");
                            this.show = true;
                        }
                    });
            }
        },
    },
};
</script>

