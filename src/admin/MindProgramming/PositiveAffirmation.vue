<template>
<div>

    <h1>{{$t('Positive_Affirmation.PositiveAffirmation')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Positive_Affirmation.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Positive_Affirmation.1stQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq1}}
                </div>

            </b-list-group-item>
            <b-list-group-item>
                <b-form-group id="input-group-1" :label="$t('Positive_Affirmation.2ndQuestion')" label-for="input-1">
                    <b-row>
                        <b-col md="11">
                            <div v-for="(item,index) in form.answerForq2" :key="index">

                                <div style="background-color:white">
                                    {{form.answerForq2[index]}}
                                </div>
                            </div><br />
                        </b-col>

                    </b-row>
                </b-form-group>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t("Positive_Affirmation.3rdQuestion.main")}}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion1") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq3}}
                        </div>
                    </b-col>

                </b-row>
                <br>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion2") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq4}}
                        </div>
                    </b-col>

                </b-row>
                <br>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion3") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq5}}
                        </div>
                    </b-col>

                </b-row>
                <br>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion4") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq6}}
                        </div>
                    </b-col>

                </b-row>
                <br>
                <b-row>
                    <b-col md="4">
                        {{ $t("Positive_Affirmation.3rdQuestion.subQuestion5") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq7}}
                        </div>
                    </b-col>

                </b-row>
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

    </b-container>
</div>
</template>

<script>
const {

    getUserData,

} = require('../../assets/js/service');
import LineChart from '../../assets/js/LineChart.js'

export default {
    components: {
        LineChart,

    },
    data() {
        return {
            form: {
                answerForq1: '',
                answerForq2: [''],
                answerForq3: '',
                answerForq4: '',
                answerForq5: '',
                answerForq6: '',
                answerForq7: '',
                Social: '',
                Health: '',
                Family: '',
                Spiritual: '',
                Financial: '',

                userId: localStorage.getItem("userId"),
            },

            datacollection: null,
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
            // datacollection: null
        }
    },
    mounted() {

        // this.renderChart(this.datacollection, this.options)
        let dataBase = '/positiveAffirmations';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
                this.fillData();
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
        fillData() {
            console.log("hjgasdhghjasgd");
            this.datacollection = {
                labels: [
                    this.$i18n.t("Socal"),
                    this.$i18n.t("Health"),
                    this.$i18n.t("Family"),
                    this.$i18n.t("Spiritual"),
                    this.$i18n.t("Financial")
                ],
                datasets: [{
                    label: 'Life Balance',
                    backgroundColor: ['Brown', 'Beige', 'Gray', 'Pink'],
                    data: [this.form.Social, this.form.Health, this.form.Family, this.form.Spiritual, this.form.Financial]
                }, ]
            }
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },
    },

}
</script>

<style>
.small {
    max-width: 600px;
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
