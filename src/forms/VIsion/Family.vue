<template>
<div>
    <HeaderFile :FirstHeader="$t('Family.Family')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <strong>{{ $t("Family.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md=3>
                        {{ $t("Spirtual.People") }}
                    </b-col>
                    <b-col md=9>
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.People" type="text" required placeholder=""></b-form-input>

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md=3>
                        {{ $t("Socal_Dream.Place") }}
                    </b-col>
                    <b-col md=9>
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.Place" type="text" required placeholder=""></b-form-input>
                        <br>
                        <br>
                    </b-col>
                </b-row>
                <b-col>
                    <b-list-group-item>
                        <b-row>
                            <b-col md=3>
                                {{ $t("Socal_Dream.Country") }}
                            </b-col>
                            <b-col md=9>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.Country" type="text" required placeholder=""></b-form-input>

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col md=3>
                                {{ $t("Family.Depth") }}
                            </b-col>
                            <b-col md=9>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.FamilyLife" type="text" required placeholder=""></b-form-input>

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col md=3>
                                {{ $t("Socal_Dream.HowOften") }}
                            </b-col>
                            <b-col md=9>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.HowOften" type="number" required placeholder=""></b-form-input>

                            </b-col>
                        </b-row>
                    </b-list-group-item>

                    <!--tabel-->
                    <b-list-group-item class="tabel-responsive">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>{{ $t("Family.FamilyEvent") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.InEvent") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.HowOften") }}</th>
                                    <th scope="col">{{ $t("My_House.EstimatedCost") }}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in form.KindOfFamily" :key="index">
                                    <th>
                                        <b-form-input id="input-1" style="font-size:12px" v-model="form.KindOfFamily[index].Event" type="text" required placeholder=""></b-form-input>
                                    </th>
                                    <th>
                                        <b-form-input id="input-1" style="font-size:12px" v-model="form.KindOfFamily[index].InTheevent" type="text" required placeholder=""></b-form-input>
                                    </th>
                                    <th>
                                        <b-form-input id="input-1" style="font-size:12px" v-model="form.KindOfFamily[index].HowOften" type="number" required placeholder=""></b-form-input>
                                    </th>
                                    <th>
                                        <b-form-input id="input-1" style="font-size:12px" v-model="form.KindOfFamily[index].Cost" type="number" required placeholder=""></b-form-input>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <b-col style="text-align:right;padding:0 !important">
                            <b-button variant="danger" v-on:click="form.KindOfFamily.push({                    Event: '',
                    InTheevent: '',
                    HowOften: '',
                    Cost: ''})">+</b-button>
                        </b-col>
                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                            <b-col md=3>
                                {{ $t("My_House.YearToAchieve") }}
                            </b-col>
                            <b-col md=9>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.YearToAchieve" type="number" required placeholder=""></b-form-input>

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col md=3>
                                {{ $t("My_House.EstimatedCost") }}
                            </b-col>
                            <b-col md=9>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.EstimatedCost" type="number" required placeholder=""></b-form-input>

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <div class="col-sm-12">
                            <label for="dropzone"><strong>{{ $t("Family.Picture") }}</strong></label>
                            <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="vsuccess" :options="vdropzoneOptions"></vue-dropzone>
                            <div v-if="!imageuploaded" style="color:red" class="text-center">
                                the image is not uploaded
                            </div>
                        </div>
                    </b-list-group-item>

                    <b-list-group-item><strong>{{ $t("My_House.Starting") }}</strong>
                        <b-list-group-item class="table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">{{ $t("My_House.Action") }}</th>
                                        <th scope="col">{{ $t("My_House.Cost") }}</th>
                                        <th scope="col">{{ $t("My_House.Time") }}</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.1staction") }}</th>

                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans1.action" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans1.cost" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans1.time" type="text" required></b-form-input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.2ndaction") }}</th>

                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans2.action" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans2.cost" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans2.time" type="text" required></b-form-input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.3rdaction") }}</th>

                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans3.action" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans3.cost" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans3.time" type="text" required></b-form-input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.4thaction") }}</th>

                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans4.action" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans4.cost" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans4.time" type="text" required></b-form-input>
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.5thaction") }}</th>

                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans5.action" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans5.cost" type="text" required></b-form-input>
                                        </td>
                                        <td>
                                            <b-form-input style="font-size:12px" v-model="form.Ans5.time" type="text" required></b-form-input>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </b-list-group-item>
                    </b-list-group-item>
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
                <b-button to="/question/my_dream" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/my_house" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
const {
    posts,
    getUserData,
    patchData,
    getUrl
} = require("../../assets/js/service");
export default {
    components: {
        HeaderFile,
        vueDropzone: vue2Dropzone
    },
    mounted: function () {

        let dataBase = '/families';
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
                People: '',
                Place: '',
                Country: '',
                FamilyLife: '',
                HowOften: '',
                KindOfFamily: [{
                    Event: '',
                    InTheevent: '',
                    HowOften: '',
                    Cost: ''
                }],

                YearToAchieve: '',
                EstimatedCost: '',
                PictureOfFamily: '',

                Ans1: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans2: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans3: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans4: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans5: {
                    action: '',
                    cost: '',
                    time: ''
                },
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            imageuploaded: true,
            vdropzoneOptions: {
                url: getUrl(),
                thumbnailWidth: 150,
                maxFilesize: 3.5,
                addRemoveLinks: true,
                maxFiles: 1,
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD PICTURE",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },
            },
        }
    },
    methods: {
        vsuccess(file, response) {

            this.form.PictureOfFamily = response.url
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },

        saveForm() {
            this.show = false;
            let dataBase = "/Families";
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
                if (this.form.PictureOfFamily) {
                    posts(dataBase, this.form).then((resp) => {
                            console.log(resp.data);
                            this.edit = true;
                            this.form.People = '';
                            this.form.Place = '';
                            this.form.Country = '';
                            this.form.FamilyLife = '';
                            this.form.HowOften = '';
                            this.form.KindOfFamily = [{
                                    Event: '',
                                    InTheevent: '',
                                    HowOften: '',
                                    Cost: ''
                                }],

                                this.form.YearToAchieve = '';
                            this.form.EstimatedCost = '';
                            this.form.PictureOfFamily = '';

                            this.form.Ans1 = {
                                action: '',
                                cost: '',
                                time: ''
                            };
                            this.form.Ans2 = {
                                action: '',
                                cost: '',
                                time: ''
                            };
                            this.form.Ans3 = {
                                action: '',
                                cost: '',
                                time: ''
                            };
                            this.form.Ans4 = {
                                action: '',
                                cost: '',
                                time: ''
                            };
                            this.form.Ans5 = {
                                action: '',
                                cost: '',
                                time: ''
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
                } else {
                    this.makeToast("danger", "Picture field is mandatory");
                    this.imageuploaded = false;
                    this.show = true;
                }
            }
        }

    }
}
</script>

<style lang="stylus" scoped>

</style>
