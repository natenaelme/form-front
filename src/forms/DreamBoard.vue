<template>
<div>

    <HeaderFile :FirstHeader="$t('My_Dream.MyDream')" />
    <b-container cols="5">
        <b-list-group>
            <b-row>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.House" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamHouse')" rows="5" max-rows="6"></b-form-textarea>

                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.Cars" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamCars')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.Intertainment" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamIntertainment')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.Family" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamFamily')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.SpiritualLife" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamSpiritualLife')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.ServiceLifeStyle" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamServiceLifeStyle')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.PhysicalStructure" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamPhysicalStructure')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4" style="margin-bottom:20px">
                    <b-form-textarea id="textarea3" v-model="form.SocialLife" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.DreamSocialLife')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>
                <b-col md="4">
                    <b-form-textarea id="textarea3" v-model="form.DreamLifestyles" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.OtherDreamLifestyles')" rows="5" max-rows="6"></b-form-textarea>

                </b-col>
                <b-col md="4">
                    <b-form-textarea id="textarea3" v-model="form.Others" style="width:100%;height:300px; text-align:center" :placeholder="$t('My_Dream.Others')" rows="5" max-rows="6"></b-form-textarea>
                </b-col>

            </b-row>
            <b-list-group-item>
                <b-row>

                    <b-col md="3">
                        {{$t("Common.Date")}}
                    </b-col>
                    <b-col md="6">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.Date" placeholder="Date" type="date" required></b-form-input>
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
            <b-button to="/question//gratitude_journal" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/gsystem_belief" variant="outline-success">
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
                House: '',
                Cars: '',
                Intertainment: '',
                Family: '',
                SpiritualLife: '',
                ServiceLifeStyle: '',
                PhysicalStructure: '',
                SocialLife: '',
                DreamLifestyles: '',
                Others: '',
                Date: '',
                VerifiedByMentor: false,
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
        let dataBase = '/dreamBoards';
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
            let dataBase = "/DreamBoards";
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
                        this.form.House = '';
                        this.form.Cars = '';
                        this.form.Intertainment = '';
                        this.form.Family = '';
                        this.form.SpiritualLife = '';
                        this.form.ServiceLifeStyle = '';
                        this.form.PhysicalStructure = '';
                        this.form.SocialLife = '';
                        this.form.DreamLifestyles = '';
                        this.form.Others = '';
                        this.form.Date = '';
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
th {
    font-weight: normal !important
}
</style>
