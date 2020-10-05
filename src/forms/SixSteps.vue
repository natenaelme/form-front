<template>
<div>

    <HeaderFile :FirstHeader="$t('Six_Steps.SixSteps')" />

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Six_Steps.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.1stQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq1" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.2ndQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq2" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.3rdQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq3" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.4thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq4" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.5thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq5" placeholder="Enter something..." rows="8" max-rows="10">
                </b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Six_Steps.6thQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") }}
                            </b-col>
                            <b-col md="9">
                                {{ $t("Four_Attributes.ReadingMorining")+" , "+$t("Four_Attributes.ReadingEvening")}}
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
            <b-button to="/question/positive_affirmation" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/main" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>
</div>
</template>

<script>
const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')
import HeaderFile from '../containers/HeaderFile'
export default {
    components: {
        HeaderFile
    },
    data() {
        return {
            form: {
                Daily_Rep: [],
                answerForq1: "",
                answerForq2: "",
                answerForq3: "",
                answerForq4: "",
                answerForq5: "",
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
        let dataBase = '/sixSteps';
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
            let dataBase = "/SixSteps";
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
                        this.form.Daily_Rep = [];
                        this.form.answerForq1 = "";
                        this.form.answerForq2 = "";
                        this.form.answerForq3 = "";
                        this.form.answerForq4 = "";
                        this.form.answerForq5 = "";

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
