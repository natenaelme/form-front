<template>
<div>

    <HeaderFile :FirstHeader="$t('Mental_Transformation.MentalTransformation')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Mental_Transformation.Detail") }}</small>
            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.1stQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="6">
                        {{ $t("Mental_Transformation.1stQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq1.subAnswer1" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="6">
                        {{ $t("Mental_Transformation.1stQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq1.subAnswer2" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.2ndQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Mental_Transformation.2ndQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer1" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="4">
                        {{ $t("Mental_Transformation.2ndQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer2" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="4">
                        {{ $t("Mental_Transformation.2ndQuestion.subQuestion3") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer3" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.3rdQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq3" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.4thQuestion") }}</strong>
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq4" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.5thQuestion") }}</strong>
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq5" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.6thQuestion.main") }}</strong></div>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.6thQuestion.subQuestion1") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq6" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
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
            <b-button to="/question/alpha_belief" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/positive_affirmation" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
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
                answerForq1: {
                    subAnswer1: '',
                    subAnswer2: ''
                },
                answerForq2: {
                    subAnswer1: '',
                    subAnswer2: '',
                    subAnswer3: ''
                },
                answerForq3: '',
                answerForq4: '',
                answerForq5: '',
                answerForq6: '',
                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/mentalTransformations';
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
                title: "Error",
                variant: variant,
                solid: true
            })
        },
        saveForm() {
            let dataBase = "/MentalTransformations";
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
                        this.form.answerForq1 = {
                            subAnswer1: '',
                            subAnswer2: ''
                        };
                        this.form.answerForq2 = {
                            subAnswer1: '',
                            subAnswer2: '',
                            subAnswer3: ''
                        };
                        this.form.answerForq3 = '';
                        this.form.answerForq4 = '';
                        this.form.answerForq5 = '';
                        this.form.answerForq6 = '';
                        this.form.Daily_Rep = [];
                        this.submited = true;
                        this.$emit('changeTitle', 'mindProgrammingPages');
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
}
</script>

<style>

</style>
