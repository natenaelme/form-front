<template>
<div>

    <h1>{{$t('Gsystem_Belief.GsystemBelief')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Gsystem_Belief.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.1stQuestion") }}
            </b-list-group-item>

            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq1" :key="index">
                        <div style="background-color:white">
                            {{form.answerForq1[index]}}
                        </div>

                    </div>

                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.2ndQuestion.main") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.money") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.money}}
                        </div>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.merrage") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.merrage}}
                        </div>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.happiness") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.happiness}}
                        </div>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.love") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.love}}
                        </div>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.life") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.life}}
                        </div>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.success") }}
                    </b-col>
                    <b-col md="11">
                        <div style="background-color:white">
                            {{form.answerForq2.success}}
                        </div>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.3rdQuestion") }}
            </b-list-group-item>

            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq3" :key="index">
                        <div style="background-color:white">
                            {{form.answerForq3[index]}}
                        </div>
                        <br />
                    </div>

                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.4thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <div v-for="item in 5" :key="item.message">
                        <div style="background-color:white">
                            {{form.answerForq4[item - 1]}}
                        </div>
                        <br />
                    </div>
                </b-col>
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
                answerForq1: [''],
                answerForq2: {
                    money: "",
                    merrage: "",
                    happiness: "",
                    love: "",
                    life: "",
                    success: ""
                },
                answerForq3: [''],
                answerForq4: [],

            },

        }
    },
    mounted: function () {
        let dataBase = '/gsystemBeliefs';
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

<style>

</style>
