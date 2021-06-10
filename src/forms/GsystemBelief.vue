<template>
<div>

    <HeaderFile :FirstHeader="$t('Gsystem_Belief.GsystemBelief')" />
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq1[index]" type="text" required :placeholder="$t('Gsystem_Belief.Placeholder')"></b-form-input>
                        <br />
                    </div>
                    <b-col style="text-align:right;padding:0 !important">
                        <b-button variant="danger" v-on:click="form.answerForq1.push('')">+</b-button>
                    </b-col>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.money" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.merrage") }}
                    </b-col>
                    <b-col md="11">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.merrage" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.happiness") }}
                    </b-col>
                    <b-col md="11">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.happiness" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.love") }}
                    </b-col>
                    <b-col md="11">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.love" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.life") }}
                    </b-col>
                    <b-col md="11">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.life" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row><br>

                <b-row>
                    <b-col md="1">
                        {{ $t("Gsystem_Belief.2ndQuestion.success") }}
                    </b-col>
                    <b-col md="11">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2.success" type="text" required placeholder=""></b-form-input>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.3rdQuestion") }}
            </b-list-group-item>

            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq3" :key="index">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3[index]" type="text" required placeholder=""></b-form-input>
                        <br />
                    </div>
                    <b-col style="text-align:right;padding:0 !important">
                        <b-button variant="danger" v-on:click="form.answerForq3.push('')">+</b-button>
                    </b-col>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Gsystem_Belief.4thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <div v-for="item in 5" :key="item.message">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4[item - 1]" type="text" required :placeholder="'Answer'+ item"></b-form-input>
                        <br />
                    </div>
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
        </div>
        <div class="text-center">
            <b-button to="/question/gratitude_journal" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/alpha_dream" variant="outline-success">
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
        let dataBase = '/gsystemBeliefs';
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
                title: "Error",
                variant: variant,
                solid: true
            })
        },
        saveForm() {
            let dataBase = "/GsystemBeliefs";
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
                        this.form.answerForq1 = [''];
                        this.form.answerForq2 = {
                            money: "",
                            merrage: "",
                            happiness: "",
                            love: "",
                            life: "",
                            success: ""
                        };
                        this.form.answerForq3 = [''];
                        this.form.answerForq4 = [];

                        this.submited = true;
                        this.$emit('changeTitle', 'habit');
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
