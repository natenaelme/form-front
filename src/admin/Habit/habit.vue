<template>
<div>
    <h1>{{$t('Habit.HabitControl')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Habit.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Habit.Header") }}
            </b-list-group-item>
            <b-form>
                <b-list-group-item>
                    <b-form-group id="input-group-1" :label="$t('Habit.1stQuestion')" label-for="input-1">
                        <b-row>
                            <b-col md="11">
                                <div style="background-color:white" v-for="(item,index) in form.answerForq1" :key="index">
                                    <label id="input-1" type="text" required>{{form.answerForq1[index]}}</label>
                                    <br />
                                </div>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.main')" label-for="textarea1">
                        <b-row rows="3">
                            <b-col md="5" style="background-color:white">
                                <label id="textarea1" rows="6" max-rows="6">{{form.answerForq2.main}}</label>
                            </b-col>
                            <b-col md="3">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion1')" label-for="textarea2">
                                    <div style="background-color:white"><label id="textarea2" rows="4" max-rows="6">{{form.answerForq2.subAnswer1}}
                                        </label>
                                    </div>

                                </b-form-group>
                            </b-col>
                            <b-col md="2">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion2')" label-for="textarea3">

                                    <div style="background-color:white"><label id="textarea2" rows="4" max-rows="6">{{form.answerForq2.subAnswer2}}
                                        </label>
                                    </div>
                                </b-form-group>
                            </b-col>
                            <b-col md="2">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion3')" label-for="textarea4">
                                    <div style="background-color:white"><label id="textarea2" rows="4" max-rows="6">{{form.answerForq2.subAnswer3}}
                                        </label>
                                    </div>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="input-group-1" :label="$t('Habit.3rdQuestion')" label-for="input-2">
                        <div style="background-color:white"><label id="textarea2" rows="4" max-rows="6">{{form.answerForq3}}
                            </label>
                        </div>
                    </b-form-group>
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
                                <b-col md="9">
                                    <div style="background-color:white"><label id="textarea2" rows="4" max-rows="6">{{day}}
                                        </label>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-container>
                </b-list-group-item>
            </b-form>
        </b-list-group>

        <!--form data to template-->
    </b-container>
</div>
</template>

<script>
const {

    getUserData,

} = require('../../assets/js/service')
export default {
    data() {
        return {
            form: {
                answerForq1: [''],
                answerForq2: {
                    main: "",
                    subAnswer1: "",
                    subAnswer2: "",
                    subAnswer3: "",
                },
                Daily_Rep: [],
                answerForq3: "",
                userId: localStorage.getItem("userToView"),
                token: localStorage.getItem("token")
            },
        }
    },
    mounted: function () {

        console.log(this.$route.params.name);
        let dataBase = '/habitSelfImages';
        console.log(localStorage.getItem("userToView"));
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log('test')
                console.log(resp);
                this.form = resp.data;

            })
            .catch(err => {
                console.log('error ')
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    this.makeToast("", "Wellcome")
                    console.log('errors')
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

<style>

</style>
