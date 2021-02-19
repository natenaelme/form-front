<template>
<div>
    <h1>{{$t('Alpha_Belief.AlphaBelief')}}</h1>

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
                    <b-col md="6" style="background-color:white">
                        {{ $t("Alpha_Belief.1stQuestion.subQuestion1") }}
                        <label>
                            {{form.answerForq1.subAnswer1}}
                        </label>
                    </b-col>
                    <b-col md="6">
                        {{ $t("Alpha_Belief.1stQuestion.subQuestion2") }}
                        
                        <div class="col-sm-12">
                            <img :src="form.answerForq1.subAnswer2" width=100% class="tumbline" alt="">
                        </div>
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
                        <b-row v-for="(date,index) in form.Daily_Rep" :key="index">
                            <b-col md="3">
                                {{ $t("Common.Day") + (index+1)}}
                            </b-col>
                            <b-col md="9">
                                <div style="background-color:white">
                                    <label>{{date}}</label>
                                </div>
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
                        <div style="background-color:white">
                            <label>{{form.answerForq2.subAnswer1}}</label>
                        </div>

                    </b-col>
                    <b-col md="12">
                        {{ $t("Alpha_Belief.3rdQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            <label>{{form.answerForq2.subAnswer2}}</label>
                        </div>
                    </b-col>
                    <b-col md="12">
                        {{ $t("Alpha_Belief.3rdQuestion.subQuestion3") }}
                        <div style="background-color:white">
                            <label>{{form.answerForq2.subAnswer3}}</label>
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

            },

            show: true,

        }
    },
    mounted: function () {
        let dataBase = '/alphaBeliefs';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
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

    },
}
</script>
