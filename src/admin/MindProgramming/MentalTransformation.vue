<template>
<div>

    <h1>{{$t('Mental_Transformation.MentalTransformation')}}</h1>
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
                        <div style="background-color:white">
                            {{form.answerForq1.subAnswer1}}
                        </div>
                        <label>

                        </label>
                    </b-col>
                    <b-col md="6">
                        {{ $t("Mental_Transformation.1stQuestion.subQuestion2") }}

                        <div style="background-color:white">
                            {{form.answerForq1.subAnswer2}}
                        </div>
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

                        <div style="background-color:white">
                            {{form.answerForq2.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col md="4">
                        {{ $t("Mental_Transformation.2ndQuestion.subQuestion2") }}

                        <div style="background-color:white">
                            {{form.answerForq2.subAnswer2}}
                        </div>
                    </b-col>
                    <b-col md="4">
                        {{ $t("Mental_Transformation.2ndQuestion.subQuestion3") }}

                        <div style="background-color:white">
                            {{form.answerForq2.subAnswer3}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.3rdQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>

                <div style="background-color:white">
                    {{form.answerForq3}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.4thQuestion") }}</strong>
                </div>
            </b-list-group-item>
            <b-list-group-item>

                <div style="background-color:white">
                    {{form.answerForq4}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.5thQuestion") }}</strong>
                </div>
            </b-list-group-item>
            <b-list-group-item>

                <div style="background-color:white">
                    {{form.answerForq5}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <div class="text-center"><strong>{{ $t("Mental_Transformation.6thQuestion.main") }}</strong></div>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Mental_Transformation.6thQuestion.subQuestion1") }}</strong>
            </b-list-group-item>
            <b-list-group-item>

                <div style="background-color:white">
                    {{form.answerForq6}}
                </div>
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

        }
    },
    mounted: function () {
        let dataBase = '/mentalTransformations';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp)
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
    },
}
</script>

<style>

</style>
