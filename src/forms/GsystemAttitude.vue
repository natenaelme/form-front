<template>
<div>

    <HeaderFile :FirstHeader="$t('Gsystem_Attitude.GsystemAttitude')" />
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq1" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.2ndQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.3rdQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.4thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4" type="text" required placeholder=""></b-form-input>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq5" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.6thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq6" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.7thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq7" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.8thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq8" type="text" required placeholder=""></b-form-input>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq9" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.10thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq10" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.11thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq11" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.12thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq12" type="text" required placeholder=""></b-form-input>
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
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq13" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.14thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq14" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.15thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq15" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="4">
                        {{ $t("Gsystem_Attitude.16thQuestion") }}
                    </b-col>
                    <b-col md="8">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq16" type="text" required placeholder=""></b-form-input>
                    </b-col>

                </b-row>
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
            <b-button to="/question/alpha_dream" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/main" variant="outline-success">
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
        let dataBase = '/gsystemAttitudes';
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
            let dataBase = "/GsystemAttitudes";
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
                        this.form.answerForq1 = '';
                        this.form.answerForq2 = '';
                        this.form.answerForq3 = '';
                        this.form.answerForq4 = '';
                        this.form.answerForq5 = '';
                        this.form.answerForq6 = '';
                        this.form.answerForq7 = '';
                        this.form.answerForq8 = '';
                        this.form.answerForq9 = '';
                        this.form.answerForq10 = '';
                        this.form.answerForq11 = '';
                        this.form.answerForq12 = '';
                        this.form.answerForq13 = '';
                        this.form.answerForq14 = '';
                        this.form.answerForq15 = '';
                        this.form.answerForq16 = '';
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
