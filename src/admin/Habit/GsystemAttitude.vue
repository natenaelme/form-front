<template>
<div>

    <h1>{{$t('Gsystem_Attitude.GsystemAttitude')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Gsystem_Attitude.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Gsystem_Attitude.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.1stQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq1}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.2ndQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq2}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.3rdQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq3}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.4thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq4}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Gsystem_Attitude.Header2") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.5thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq5}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.6thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq6}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.7thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq7}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.8thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq8}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Gsystem_Attitude.Header3") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.9thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq9}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.10thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq10}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.11thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq11}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.12thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq12}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Gsystem_Attitude.Header3") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.13thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq13}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.14thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq14}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.15thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq15}}
                        </div>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.16thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <div style="background-color:white">
                            {{form.answerForq16}}
                        </div>
                    </b-col>

                </b-row>
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
                answerForq1: "",
                answerForq2: "",
                answerForq3: "",
                answerForq4: "",
                answerForq5: "",
                answerForq6: "",
                answerForq7: "",
                answerForq8: "",
                answerForq9: "",
                answerForq10: "",
                answerForq11: "",
                answerForq12: "",
                answerForq13: "",
                answerForq14: "",
                answerForq15: "",
                answerForq16: "",

            },

        }
    },
    mounted: function () {
        let dataBase = '/gsystemAttitudes';
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
