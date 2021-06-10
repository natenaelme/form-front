<template>
<div>

    <HeaderFile :FirstHeader="$t('Qualities.Qualities')" />

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Positional") }}</th>
                        </tr>
                        <td :rowspan="form.positionalLeader.length + 1">
                            <b-form-input id="ex-disabled-readonly" v-model="form.positionalLeader[form.positionalLeader.length -1].name">
                            </b-form-input>
                        </td>

                        <tr v-for="(item, index) in form.positionalLeader" :key="index">
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.positionalLeader[index].quality">
                                </b-form-input>
                            </td>
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.positionalLeader[index].activity">
                                </b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <b-col style="float:left;padding:0 !important">
                                <b-button :disabled='form.positionalLeader[0].name == ""' variant="danger" v-on:click="
                      form.positionalLeader.push({
                          name:form.positionalLeader[form.positionalLeader.length -1].name,
                        quality: '',
                        activity: '',
                      })
                    ">+</b-button>
                            </b-col>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Permision") }}</th>
                        </tr>
                        <td :rowspan="form.permisionLeader.length + 1">
                            <b-form-input id="ex-disabled-readonly" v-model="form.permisionLeader[form.permisionLeader.length -1].name">
                            </b-form-input>
                        </td>

                        <tr v-for="(item, index) in form.permisionLeader" :key="index">
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.permisionLeader[index].quality">
                                </b-form-input>
                            </td>
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.permisionLeader[index].activity">
                                </b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <b-col style="float:left;padding:0 !important">
                                <b-button :disabled='form.permisionLeader[0].name == ""' variant="danger" v-on:click="
                      form.permisionLeader.push({
                          name:form.permisionLeader[form.permisionLeader.length -1].name,
                        quality: '',
                        activity: '',
                      })
                    ">+</b-button>
                            </b-col>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Production") }}</th>
                        </tr>
                        <td :rowspan="form.productionLeader.length + 1">
                            <b-form-input id="ex-disabled-readonly" v-model="form.productionLeader[form.productionLeader.length -1].name">
                            </b-form-input>
                        </td>

                        <tr v-for="(item, index) in form.productionLeader" :key="index">
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.productionLeader[index].quality">
                                </b-form-input>
                            </td>
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.productionLeader[index].activity">
                                </b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <b-col style="float:left;padding:0 !important">
                                <b-button :disabled='form.productionLeader[0].name == ""' variant="danger" v-on:click="
                      form.productionLeader.push({
                          name:form.productionLeader[form.productionLeader.length -1].name,
                        quality: '',
                        activity: '',
                      })
                    ">+</b-button>
                            </b-col>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.People") }}</th>
                        </tr>
                        <td :rowspan="form.peopleDevelopment.length + 1">
                            <b-form-input id="ex-disabled-readonly" v-model="form.peopleDevelopment[form.peopleDevelopment.length -1].name">
                            </b-form-input>
                        </td>

                        <tr v-for="(item, index) in form.peopleDevelopment" :key="index">
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.peopleDevelopment[index].quality">
                                </b-form-input>
                            </td>
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.peopleDevelopment[index].activity">
                                </b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <b-col style="float:left;padding:0 !important">
                                <b-button :disabled='form.peopleDevelopment[0].name == ""' variant="danger" v-on:click="
                      form.peopleDevelopment.push({
                          name:form.peopleDevelopment[form.peopleDevelopment.length -1].name,
                        quality: '',
                        activity: '',
                      })
                    ">+</b-button>
                            </b-col>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Personhood") }}</th>
                        </tr>
                        <td :rowspan="form.personhood.length + 1">
                            <b-form-input id="ex-disabled-readonly" v-model="form.personhood[form.personhood.length -1].name">
                            </b-form-input>
                        </td>

                        <tr v-for="(item, index) in form.personhood" :key="index">
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.personhood[index].quality">
                                </b-form-input>
                            </td>
                            <td>
                                <b-form-input id="ex-disabled-readonly" v-model="form.personhood[index].activity">
                                </b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <b-col style="float:left;padding:0 !important">
                                <b-button :disabled='form.personhood[0].name == ""' variant="danger" v-on:click="
                      form.personhood.push({
                          name:form.personhood[form.personhood.length -1].name,
                        quality: '',
                        activity: '',
                      })
                    ">+</b-button>
                            </b-col>
                        </tr>

                    </tbody>
                </table>
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
            <b-button to="/question/alpha" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/levels_of_leadership" variant="outline-success">
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
                positionalLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                permisionLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                productionLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                peopleDevelopment: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                personhood: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        };
    },
    mounted: function () {
        let dataBase = '/qualities';
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
            let dataBase = "/Qualities";
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
                        this.form.positionalLeader = [{
                            name: "",
                            quality: "",
                            activity: "",
                        }, ];
                        this.form.permisionLeader = [{
                            name: "",
                            quality: "",
                            activity: "",
                        }, ];
                        this.form.productionLeader = [{
                            name: "",
                            quality: "",
                            activity: "",
                        }, ];
                        this.form.peopleDevelopment = [{
                            name: "",
                            quality: "",
                            activity: "",
                        }, ];
                        this.form.personhood = [{
                            name: "",
                            quality: "",
                            activity: "",
                        }, ];
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
};
</script>
