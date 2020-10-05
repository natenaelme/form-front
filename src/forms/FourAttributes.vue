<template>
<div>

    <HeaderFile :FirstHeader="$t('Four_Attributes.FourAttributes')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Four_Attributes.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.1stQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">
                        {{ $t("Four_Attributes.1stQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea4" v-model="form.selfAwairness.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.1stQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.selfAwairness.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.2ndQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">{{ $t("Four_Attributes.2ndQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea4" v-model="form.selfManagement.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.2ndQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.selfManagement.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.3rdQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">{{ $t("Four_Attributes.3rdQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea4" v-model="form.socialAwareness.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.3rdQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.socialAwareness.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.4thQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="3">{{ $t("Four_Attributes.4thQuestion.subQuestion1") }}
                        <b-form-textarea id="textarea4" v-model="form.relationshipManagement.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">
                        <div>{{ $t("Four_Attributes.4thQuestion.subQuestion2") }}<br><br></div>
                        <b-form-textarea id="textarea4" v-model="form.relationshipManagement.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">{{ $t("Four_Attributes.4thQuestion.subQuestion3") }}
                        <b-form-textarea id="textarea4" v-model="form.relationshipManagement.subAnswer3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">
                        <div>{{ $t("Four_Attributes.4thQuestion.subQuestion4") }}</div><br>
                        <b-form-textarea id="textarea4" v-model="form.relationshipManagement.subAnswer4" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <b-container>
                    <b-col>
                        <b-row>
                            <b-col md="3">
                                {{ $t("Common.Day") }}
                            </b-col>
                            <b-col md="9">
                                {{ $t("Four_Attributes.ReadingMorining") }}{{" ,  " + $t("Four_Attributes.ReadingEvening") }}
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
            <b-button to="/question/levels_of_leadership" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/the_five" variant="outline-success">
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
                selfAwairness: {
                    subAnswer1: '',
                    subAnswer2: ''
                },
                selfManagement: {
                    subAnswer1: '',
                    subAnswer2: ''
                },
                socialAwareness: {
                    subAnswer1: '',
                    subAnswer2: ''
                },
                relationshipManagement: {
                    subAnswer1: '',
                    subAnswer2: '',
                    subAnswer3: '',
                    subAnswer4: ''
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
        let dataBase = '/fourattributes';
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
            let dataBase = "/Fourattributes";
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
                        this.form.selfAwairness = {
                            subAnswer1: '',
                            subAnswer2: ''
                        };
                        this.form.selfManagement = {
                            subAnswer1: '',
                            subAnswer2: ''
                        };
                        this.form.socialAwareness = {
                            subAnswer1: '',
                            subAnswer2: ''
                        };
                        this.form.relationshipManagement = {
                            subAnswer1: '',
                            subAnswer2: '',
                            subAnswer3: '',
                            subAnswer4: ''
                        };
                        this.form.Daily_Rep = [];
                        this.form.monthly = '';
                        this.form.weekly = '';
                        this.form.daily = '';
                        this.$emit('changeTitle', 'teamBuilding');
                        this.submited = true;
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
