<template>
<div>
    <HeaderFile :FirstHeader="$t('How_To_Search.HowToSearch')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <strong>{{ $t("How_To_Search.1stQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.1stQuestion.main") }}
                <b-form-textarea id="textarea1" v-model="form.answerForq1" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("How_To_Search.2ndQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.2ndQuestion.main") }}
                <b-form-textarea id="textarea1" v-model="form.answerForq2" placeholder="" rows="6" max-rows="6"></b-form-textarea>

            </b-list-group-item>

            <b-list-group-item>
                <strong>{{ $t("How_To_Search.3rdQuestion.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("How_To_Search.3rdQuestion.main") }}
                <b-form-textarea id="textarea1" v-model="form.answerForq3" placeholder="" rows="6" max-rows="6"></b-form-textarea>
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
                        <tr>
                            <th>1</th>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].visual" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].visual}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].reading" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].reading}}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq4[0].writing" value="Completed" unchecked-value="not completed">
                                        {{$t("Common.Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq4[0].writing}}</strong></div>
                                </div>
                            </td>

                            <td>
                                <b-form-input style="font-size:12px" v-model="form.answerForq4[0].manifestations" type="text" required></b-form-input>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.answerForq4[0].percent" type="number" required></b-form-input>
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
                        <b-form-input style="font-size:12px" v-model="form.achievements.a" type="text" required placeholder=""></b-form-input>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion2") }}
                    </b-col>
                    <b-col>
                        <b-form-input style="font-size:12px" v-model="form.achievements.b" type="text" required placeholder=""></b-form-input>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion3") }}
                    </b-col>
                    <b-col>
                        <b-form-input style="font-size:12px" v-model="form.achievements.c" type="text" required placeholder=""></b-form-input>
                        <br>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        {{ $t("How_To_Search.4thQuestion.Achievements.subQuestion4") }}
                    </b-col>
                    <b-col>
                        <b-form-input style="font-size:12px" v-model="form.achievements.d" type="text" required placeholder=""></b-form-input>
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
                        <b-form-textarea id="textarea1" v-model="form.answerForq5.a" placeholder="" rows="2" max-rows="6"></b-form-textarea>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea1" v-model="form.answerForq5.b" placeholder="" rows="2" max-rows="6"></b-form-textarea>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion3.main") }}
                        <br>
                        <br>
                        <b-col>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.1") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans1" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.2") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans2" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.3") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans3" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.4") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans4" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.5") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans5" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.6") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans6" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                            {{ $t("How_To_Search.5thQuestion.subQuestion3.7") }}
                            <b-form-textarea id="textarea1" v-model="form.answerForq5.c.ans7" placeholder="" cols="2" max-rows="6"></b-form-textarea>
                            <br>
                        </b-col>

                    </b-row>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion4") }}
                        <b-form-textarea id="textarea1" v-model="form.answerForq5.d" placeholder="" rows="2" max-rows="6"></b-form-textarea>

                    </b-row>
                    <br>
                    <b-row>
                        {{ $t("How_To_Search.5thQuestion.subQuestion5") }}
                        <b-form-textarea id="textarea1" v-model="form.answerForq5.e" placeholder="" rows="2" max-rows="6"></b-form-textarea>

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
                        <b-form-textarea id="textarea1" v-model="form.summarize.ans1" placeholder="" rows="6" max-rows="6"></b-form-textarea>
                    </b-row>
                    <br>
                    <b-row>

                        {{ $t("How_To_Search.Summarize.subQuestion2") }}
                        <b-form-textarea id="textarea1" v-model="form.summarize.ans2" placeholder="" rows="6" max-rows="6"></b-form-textarea>
                    </b-row>
                </b-col>

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
            <div class="text-center">
                <b-button disabled to="/question/how_to_build" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/personal_information" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
const {

    posts,
    getUserData,
    patchData
} = require('../../assets/js/service')
export default {
    components: {
        HeaderFile
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
        getUserData(dataBase, this.id, this.token).then(resp => {
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
        saveForm() {
            this.show = false;
            let dataBase = "/howToSearches";
            console.log(this.show);
            this.form.answerForq4[0].day = 1;
            if (this.edit) {
                console.log(this.form)
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
                        this.form.erForq1 = '';
                        this.form.answerForq2 = '';
                        this.form.answerForq3 = '';
                        this.form.answerForq4 = [{
                            visual: '',
                            reading: '',
                            writing: '',
                            manifestations: '',
                            percent: ''
                        }];
                        this.form.achievements = {
                            a: '',
                            b: '',
                            c: '',
                            d: ''
                        };
                        this.form.answerForq5 = {
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
                        };
                        this.form.summarize = {
                            ans1: '',
                            ans2: '',
                        };

                        this.submited = true;
                        this.$emit('changeTitle', 'vision');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    }, )
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
