<template>
<div>

    <HeaderFile :FirstHeader="$t('Silence_Time.SilenceTime')" />

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Silence_Time.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="2">
                        {{ $t("Silence_Time.1stQuestion") }}

                    </b-col>
                    <b-col md="10">
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq1" type="text" required placeholder="answer"></b-form-input>
                    </b-col>
                </b-row>

                <div>

                </div>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Silence_Time.2ndQuestion") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea3" v-model="form.answerForq2" placeholder="Enter something..." rows="5" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Silence_Time.3ndQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="vsuccess" :options="vdropzoneOptions"></vue-dropzone>
                <div v-if="!imageuploaded" style="color:red" class="text-center">
                    the image is not uploaded
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Silence_Time.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Visual") }}</th>
                            <th scope="col">{{ $t("Common.Gratitude") }}</th>
                            <th scope="col">{{ $t("Common.MentalBank") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>
                                <div>

                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.answerForq3[0].date" type="date" required></b-form-input>

                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].visual" value="Completed" unchecked-value="not completed">
                                        {{$t("Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].visual }}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].gratitude" value="Completed" unchecked-value="not completed">
                                        {{$t("Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].gratitude }}</strong></div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <b-form-checkbox v-model="form.answerForq3[0].mentalBank" value="Completed" unchecked-value="not completed">
                                        {{$t("Completed")}}
                                    </b-form-checkbox>

                                    <div>State: <strong>{{ form.answerForq3[0].mentalBank }}</strong></div>
                                </div>
                            </td>
                            <td>
                                <b-form-input style="font-size:12px" v-model="form.answerForq3[0].remarks" type="text" required :placeholder="'Remarks'"></b-form-input>
                            </td>
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
            <b-button to="/question/process_of_change" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/alpha_displine" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>

    </b-container>

</div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import HeaderFile from '../containers/HeaderFile'

const {

    posts,
    getUserData,
    patchData,
    getUrl
} = require('../assets/js/service')
export default {
    name: "SilenceTime",
    components: {
        vueDropzone: vue2Dropzone,
        HeaderFile
    },
    data() {
        return {
            form: {
                answerForq1: "",
                answerForq2: "",
                answerForq3: [{
                    date: "",
                    visual: "",
                    gratitude: "",
                    mentalBank: "",
                    remarks: ""
                }],
                goalImage: "",
                userId: localStorage.getItem("userId"),

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
            imageuploaded: true,
            vdropzoneOptions: {
                url: getUrl() + "/containers/imags/upload",
                thumbnailWidth: 150,
                maxFilesize: 3.5,
                addRemoveLinks: true,
                maxFiles: 1,
                dictDefaultMessage: "<i class='fa fa-cloud-upload'></i> UPLOAD PICTURE",
                headers: {
                    "X-Requested-With": "XMLHttpRequest"
                }
            },
            items: 1,
        }

    },
    mounted: function () {
        let dataBase = '/silenceTimes';
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
        vsuccess(file, response) {
            console.log(response);
            console.log(response.result.files.file[0].name);
            this.form.goalImage = getUrl() + '/Containers/imags/download/' + response.result.files.file[0].name;
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        saveForm() {
            let dataBase = "/SilenceTimes";
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
                if (!this.form.goalImage) {
                    this.imageuploaded = false;
                    this.show = true;
                    this.makeToast("danger", "Image is Not Uploaded")
                } else {
                    posts(dataBase, this.form).then((resp) => {
                            console.log(resp.data);
                            this.edit = true;
                            this.form.answerForq1 = "";
                            this.form.answerForq2 = "";
                            this.form.answerForq3 = [{
                                    date: "",
                                    visual: "",
                                    gratitude: "",
                                    mentalBank: "",
                                    remarks: ""
                                }],
                                this.form.goalImage = "";
                            this.$emit('changeTitle', 'habit');
                            this.submited = true;
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
        }
    }

}
</script>

<style lang="stylus">

</style>
