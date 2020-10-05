<template>
<div>

    <HeaderFile :FirstHeader="$t('Habit.HabitControl')" />
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
                                <div v-for="(item,index) in form.answerForq1" :key="index">
                                    <b-form-input style="width:100% !important" id="input-1" v-model="form.answerForq1[index]" type="text" required :placeholder="'answer ' + (index+1)"></b-form-input>
                                    <br />
                                </div>
                            </b-col>

                            <b-col md="1" style="text-align:right">
                                <b-button variant="danger" v-on:click="form.answerForq1.push('')">+</b-button>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.main')" label-for="textarea1">
                        <b-row rows="3">
                            <b-col md="5">
                                <b-form-textarea id="textarea1" v-model="form.answerForq2.main" placeholder="Enter something..." rows="6" max-rows="6"></b-form-textarea>
                            </b-col>
                            <b-col md="3">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion1')" label-for="textarea2">
                                    <b-form-textarea id="textarea2" v-model="form.answerForq2.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6">
                                    </b-form-textarea>
                                </b-form-group>
                            </b-col>
                            <b-col md="2">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion2')" label-for="textarea3">
                                    <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                                </b-form-group>
                            </b-col>
                            <b-col md="2">
                                <b-form-group id="input-group-1" :label="$t('Habit.2ndQuestion.subQuestion3')" label-for="textarea4">
                                    <b-form-textarea id="textarea4" v-model="form.answerForq2.subAnswer3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-list-group-item>
                <b-list-group-item>
                    <b-form-group id="input-group-1" :label="$t('Habit.3rdQuestion')" label-for="input-2">
                        <b-form-input id="input-2" v-model="form.answerForq3" type="text" required placeholder="answer"></b-form-input>
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
            </b-form>
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
            <div class="text-center">
                <b-button disabled to="/question/how_to_build" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/how_to_build" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>

        <!--form data to template-->
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

    name: "Habit",
    components: {
        HeaderFile
    },
    data() {
        return {
            edit: false,
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
                userId: localStorage.getItem("userId")
            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),

        };
    },
    mounted: function () {
        this.$emit('header', this.$i18n.t("Habit.HabitControl"), );
        let dataBase = '/habitSelfImages';
        getUserData(dataBase, this.id, this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    this.makeToast("", "Wellcome")
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
            this.show = false;
            let dataBase = "/Habit_Self_images";
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
                        this.form.answerForq1 = [],
                            this.form.answerForq2 = {
                                main: null,
                                subAnswer1: null,
                                subAnswer2: null,
                                subAnswer3: null,

                            };

                        this.form.answerForq3 = null, this.form.Daily_Rep = [];
                        this.submited = true;
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.vl {
    border-right: 2px solid gray;
    border-bottom: 3px solid gray;
    height: 100%;
}

.vl2 {
    border-left: 1px solid gray;
    height: 100%;
}

@media (max-width: 767px) {
    .hiddenView {
        display: block;
    }
}

@media (min-width: 767px) {
    .hiddenView {
        display: none;
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

}
</style>
