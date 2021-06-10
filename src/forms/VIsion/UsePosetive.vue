<template>
<div>
    <HeaderFile :FirstHeader="$t('Use_Postive.UsePostive')" />
    <b-container cols="5">
        <b-list-group>

            <b-list-group-item>
                {{ $t("Use_Postive.DreamFamily") }}
                <b-form-textarea id="textarea1" v-model="form.DreamFamily" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamSpiritual") }}
                <b-form-textarea id="textarea1" v-model="form.DreamSpiritual" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamSocal") }}
                <b-form-textarea id="textarea1" v-model="form.DreamSocal" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamHealth") }}
                <b-form-textarea id="textarea1" v-model="form.DreamHealth" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamLife") }}
                <b-form-textarea id="textarea1" v-model="form.DreamLife" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamKnowledge") }}
                <b-form-textarea id="textarea1" v-model="form.DreamKnowledge" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Use_Postive.DreamFinancial") }}
                <b-form-textarea id="textarea1" v-model="form.DreamFinancial" placeholder="" rows="6" max-rows="6"></b-form-textarea>
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
                <b-button to="/question/car" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/financial_goal" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
import "vue2-dropzone/dist/vue2Dropzone.min.css";
const {
    posts,
    getUserData,
    patchData,
    getUrl
} = require("../../assets/js/service");
export default {
    components: {
        HeaderFile
    },
    mounted: function () {

        let dataBase = '/usePosetives';
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

    data() {
        return {
            form: {
                DreamFamily: '',
                DreamSpiritual: '',
                DreamSocal: '',
                DreamLife: '',
                DreamHealth: '',
                DreamKnowledge: '',
                DreamFinancial: '',
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
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
            this.show = false;
            let dataBase = "/usePosetives";
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
                        this.form.DreamFamily = '';
                        this.form.DreamSpiritual = '';
                        this.form.DreamSocal = '';
                        this.form.DreamLife = '';
                        this.form.DreamHealth = '';
                        this.form.DreamKnowledge = '';
                        this.form.DreamFinancial = '';
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

<style lang="stylus" scoped>

</style>
