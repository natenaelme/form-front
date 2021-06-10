<template>
<div>
    <HeaderFile :FirstHeader="$t('Alpha.Alpha')" />
    <b-container cols="5">

        <div v-for="(item, index) in form.answerForq1" :key="index">
            <b-list-group>
                <b-list-group-item>
                    <b-form inline>
                        <span>
                            {{ $t("Alpha.Dear") + " :"}}
                            <b-form-input id="ex-disabled-readonly" v-model="form.answerForq1[index].name">
                            </b-form-input>
                        </span>

                    </b-form>
                </b-list-group-item>
                <b-list-group-item>
                    <strong>{{$t('Alpha.Like')}}</strong>

                </b-list-group-item>
                <b-list-group-item>
                    <b-form-textarea id="textarea3" v-model="form.answerForq1[index].whyLike" placeholder="Enter something..." rows="8" max-rows="10"></b-form-textarea>
                </b-list-group-item>
            </b-list-group><br>
        </div>
        <b-col style="text-align:right;padding:0 !important">
            <b-button variant="danger" v-on:click="form.answerForq1.push({
                    name: '',
                    whyLike: ''

                })">+</b-button>
        </b-col>
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
            <b-button to="/question/alpha_team" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/qualities" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>

</div>
</template>

<script>
const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')
import HeaderFile from '../containers/HeaderFile'
export default {
    components: {
        HeaderFile
    },
    data() {

        return {
            form: {
                answerForq1: [{
                    name: '',
                    whyLike: ''
                }],

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
        let dataBase = '/alphas';
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
            let dataBase = "/Alphas";
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
                        this.form.answerForq1 = [{
                            name: '',
                            whyLike: ''
                        }];

                        this.submited = true;
                        this.$emit('changeTitle', 'teamBuilding');
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
