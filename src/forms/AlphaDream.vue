<template>
<div>

    <HeaderFile :FirstHeader="$t('Alpha_Dream.AlphaDream')" />
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
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq1" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.2ndQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq2" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.3rdQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.4thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq4" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.5thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq5" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.6thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq6" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.7thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq7" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.8thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq8" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.9thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq9" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.10thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq10" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.11thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq11" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.12thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq12" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.13thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq13" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.14thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq14" type="text" required placeholder=""></b-form-input>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Alpha_Dream.15thQuestion") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq15" type="text" required placeholder=""></b-form-input>
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
            <b-button to="/question/gsystem_belief" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/gsystem_attitude" variant="outline-success">
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
                userId: localStorage.getItem("userId"),
            },
            fullName: localStorage.getItem("fullName"),
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/alphaDreams';
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
            let dataBase = "/AlphaDreams";
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

<style lang="stylus">

</style>
