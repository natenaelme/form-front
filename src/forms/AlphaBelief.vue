<template>
<div>

    <HeaderFile :FirstHeader="$t('Alpha_Belief.AlphaBelief')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Alpha_Belief.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Belief.Header") }}
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Alpha_Belief.1stQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="6">
                        {{ $t("Alpha_Belief.1stQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq1.subAnswer1" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="6">
                        {{ $t("Alpha_Belief.1stQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq1.subAnswer2" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Alpha_Belief.2ndQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") }}
                            </b-col>
                            <b-col md="9">
                                {{ $t("Alpha_Belief.Visualization") +","+ $t("Alpha_Belief.Rewrite")+","+$t("Alpha_Belief.Read")+","+$t("Alpha_Belief.Gratitude")+","+$t("Alpha_Belief.Listen") }}
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
                                <b-form-checkbox id="checkbox-1" v-model="form.Daily_Rep[0]" name="checkbox-1" value="Completed" unchecked-value="not completed">
                                    {{$t("Common.Completed")}}
                                </b-form-checkbox>

                                <div>State: <strong>{{ form.Daily_Rep[0] }}</strong></div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Alpha_Belief.3rdQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="12">
                        {{ $t("Alpha_Belief.3rdQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer1" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="12">
                        {{ $t("Alpha_Belief.3rdQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer2" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                    <b-col md="12">
                        {{ $t("Alpha_Belief.3rdQuestion.subQuestion3") }}
                        <b-form-textarea id="textarea3" v-model="form.answerForq2.subAnswer3" placeholder="Enter something..." rows="8" max-rows="10">
                        </b-form-textarea>
                    </b-col>
                </b-row>
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
            <b-button to="/question/main" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/mental_transformation" variant="outline-success">
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
                Daily_Rep: [],
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
        let dataBase = '/alphaBeliefs';
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
            let dataBase = "/AlphaBeliefs";
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
