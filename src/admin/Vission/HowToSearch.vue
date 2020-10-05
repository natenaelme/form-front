<template>
<div>
    <h1>{{$t('How_To_Search.HowToSearch')}}</h1>

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <strong>{{ $t("How_To_Search.1stQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>{{ $t("How_To_Search.1stQuestion.main") }}
                <div style="background-color:white">
                    {{form.answerForq1}}
                </div>

            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("How_To_Search.2ndQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.2ndQuestion.main") }}
                <div style="background-color:white">
                    {{form.answerForq2}}
                </div>

            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("How_To_Search.3rdQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.3rdQuestion.main") }}
                <div style="background-color:white">
                    {{form.answerForq3}}
                </div>

            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("How_To_Search.4thQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.4thQuestion.main") }}
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>

                            <th scope="col">{{ $t("How_To_Search.4thQuestion.Day") }}</th>
                            <th scope="col">{{ $t("How_To_Search.4thQuestion.Visual") }}</th>
                            <th scope="col">{{ $t("How_To_Search.4thQuestion.Reading") }}</th>
                            <th scope="col">{{ $t("How_To_Search.4thQuestion.Writing") }}</th>
                            <th scope="col">{{ $t("How_To_Search.4thQuestion.Manifestations") }}</th>
                            <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item,index) in form.answerForq4" :key="index">

                            <th>
                                <div style="background-color:white">
                                    {{item.day}}
                                </div>
                            </th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{item.visual}}
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{item.reading}}
                                    </div>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{item.writing}}
                                    </div>

                                </div>
                            </td>

                            <td>
                                <div style="background-color:white">
                                    {{item.manifestations}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{item.percent}}
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>

            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.4thQuestion.Achievements.Achievements") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion1") }}
                    </b-col>
                    <b-col>
                        <div style="background-color:white">
                            {{form.achievements.a}}
                        </div>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion2") }}
                    </b-col>
                    <b-col>
                        <div style="background-color:white">
                            {{form.achievements.b}}
                        </div>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>

                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion3") }}
                    </b-col>
                    <b-col>
                        <div style="background-color:white">
                            {{form.achievements.c}}
                        </div>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion4") }}
                    </b-col>
                    <b-col>
                        <div style="background-color:white">
                            {{form.achievements.d}}
                        </div>
                        <br>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("How_To_Search.5thQuestion.Header") }}</strong>
                <br>
                {{ $t("How_To_Search.5thQuestion.main") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.answerForq5.a}}
                        </div>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.answerForq5.b}}
                        </div>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion3.main") }}
                        <br>
                        <br>
                        <b-col>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.1") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans1}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.2") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans2}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.3") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans3}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.4") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans4}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.5") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans5}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.6") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans6}}
                            </div>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.7") }}
                            <div style="background-color:white">
                                {{form.answerForq5.c.ans7}}
                            </div>
                            <br>
                        </b-col>

                    </b-row>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion4") }}
                        <div style="background-color:white">
                            {{form.answerForq5.d}}
                        </div>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion5") }}
                        <div style="background-color:white">
                            {{form.answerForq5.e}}
                        </div>

                    </b-row>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>

                {{ $t("How_To_Search.Summarize.Summarize") }}

            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <b-row>

                        {{ $t("How_To_Search.Summarize.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.summarize.ans1}}
                        </div>
                    </b-row>
                    <br>
                    <b-row>

                        {{ $t("How_To_Search.Summarize.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.summarize.ans2}}
                        </div>
                    </b-row>
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
                answerForq1: '',
                answerForq2: '',
                answerForq3: '',
                answerForq4: [{
                    day: '',
                    visual: '',
                    reading: '',
                    writing: '',
                    manifestations: '',
                    percent: ''
                }],
                achievements: {
                    a: '',
                    b: '',
                    c: '',
                    d: ''
                },
                answerForq5: {
                    a: '',
                    b: '',
                    c: {
                        ans1: '',
                        ans2: '',
                        ans3: '',
                        ans4: '',
                        ans5: '',
                        ans6: '',
                        ans7: '',
                    },
                    d: '',
                    e: ''
                },
                summarize: {
                    ans1: '',
                    ans2: '',
                },
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
    },
    mounted: function () {

        let dataBase = '/howToSearches';
        getUserData(dataBase, localStorage.getItem("userToView"), this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    // this.makeToast("", "Wellcome")
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

    }
}
</script>

<style>
@media (max-width: 767px) {
    .hiddenView {
        display: block;
    }
}

@media (min-width: 767px) {
    .hiddenView {
        display: none;
    }

    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 20px;
        height: 20px;
    }

    .lds-ripple div {
        position: absolute;
        border: 4px solid rgb(92, 91, 91);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }

    @keyframes lds-ripple {
        0% {
            top: 36px;
            left: 36px;
            width: 0;
            height: 0;
            opacity: 1;
        }

        100% {
            top: 0px;
            left: 0px;
            width: 72px;
            height: 72px;
            opacity: 0;
        }
    }

}
</style>
