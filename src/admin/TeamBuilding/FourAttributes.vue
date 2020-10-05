<template>
<div>

    <h1>{{$t('Four_Attributes.FourAttributes')}}</h1>
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
                        <div style="background-color:white">
                            {{form.selfAwairness.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.1stQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.selfAwairness.subAnswer2}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.2ndQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">{{ $t("Four_Attributes.2ndQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.selfManagement.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.2ndQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.selfManagement.subAnswer2}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.3rdQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">{{ $t("Four_Attributes.3rdQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.socialAwareness.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col sm="6">{{ $t("Four_Attributes.3rdQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.socialAwareness.subAnswer2}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("Four_Attributes.4thQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="3">{{ $t("Four_Attributes.4thQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.relationshipManagement.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col md="3">
                        <div>{{ $t("Four_Attributes.4thQuestion.subQuestion2") }}<br><br></div>
                        <div style="background-color:white">
                            {{form.relationshipManagement.subAnswer2}}
                        </div>
                    </b-col>
                    <b-col md="3">{{ $t("Four_Attributes.4thQuestion.subQuestion3") }}
                        <div style="background-color:white">
                            {{form.relationshipManagement.subAnswer3}}
                        </div>
                    </b-col>
                    <b-col md="3">
                        <div>{{ $t("Four_Attributes.4thQuestion.subQuestion4") }}</div><br>
                        <div style="background-color:white">
                            {{form.relationshipManagement.subAnswer4}}
                        </div>
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
                                <div style="background-color:white">
                                    {{form.Daily_Rep[0]}}
                                </div>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-container>
            </b-list-group-item>
        </b-list-group>

    </b-container>

</div>
</template>

<script>
const {

    getUserData,

} = require('../../assets/js/service')
export default {
    components: {

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

            },

        }
    },
    mounted: function () {
        let dataBase = '/fourattributes';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp);
                this.form = resp.data;

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

    },
}
</script>

<style>

</style>
