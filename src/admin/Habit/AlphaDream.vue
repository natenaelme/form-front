<template>
<div>

    <h1> {{$t('Alpha_Dream.AlphaDream')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Alpha_Dream.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>

                <b-form inline>
                    <span>
                        {{ $t("Alpha_Dream.Hi")}}

                        {{fullName}} {{ $t("Alpha_Dream.FromAlpha") }}
                    </span>
                </b-form>

            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Alpha_Dream.1stQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq1}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.2ndQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq2}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.3rdQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq3}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.4thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq4}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.5thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq5}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.6thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq6}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.7thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq7}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.8thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq8}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.9thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq9}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.10thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq10}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.11thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq11}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.12thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq12}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.13thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq13}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.14thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq14}}
                </div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.15thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq15}}
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

                answerForq1: '',
                answerForq2: '',
                answerForq3: '',
                answerForq4: '',
                answerForq5: '',
                answerForq6: '',
                answerForq7: '',
                answerForq8: '',
                answerForq9: '',
                answerForq10: '',
                answerForq11: '',
                answerForq12: '',
                answerForq13: '',
                answerForq14: '',
                answerForq15: '',

            },
            fullName: localStorage.getItem("fullName"),

        }
    },
    mounted: function () {
        let dataBase = '/alphaDreams';
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
                title: "Error",
                variant: variant,
                solid: true
            })
        },

    },
}
</script>

<style lang="stylus">

</style>
