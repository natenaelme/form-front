<template>
<div class="container-fluid">
    <h3 class="text-dark mb-4 text-center">Profile</h3>
    <div class="row mb-3">
        <div class="col-lg-4">
            <div class="card mb-3">
                <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" :src="user.profileImage" width="160" height="160">

                    <div class="col-sm-12">
                        <label for="dropzone">Change Profile image</label>
                        <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="vsuccess" :options="vdropzoneOptions"></vue-dropzone>
                    </div>
                </div>
            </div>
            <div v-if="workBook" class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="text-primary font-weight-bold m-0">Projects</h6>
                </div>
                <div class="card-body">
                    <h4 class="small font-weight-bold">{{$t('Common.Vision')}}<span class="float-right"></span></h4>

                    <b-progress :max="VisionMax">
                        <b-progress-bar :value="VisionValue" :label="`${((VisionValue / VisionMax) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>
                    <h4 v-if="workBook>1" class="small font-weight-bold">{{$t('Common.Habit')}}<span class="float-right"></span></h4>

                    <b-progress v-if="workBook>1" :max="HabitMax">
                        <b-progress-bar :value="HabitValue" :label="`${((HabitValue / HabitMax) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>
                    <h4 v-if="workBook>2" class="small font-weight-bold">{{$t('Common.MindProgramming')}}<span class="float-right"></span></h4>

                    <b-progress v-if="workBook>2" :max="MindProgrammingMax">
                        <b-progress-bar :value="MindProgrammingValue" :label="`${((MindProgrammingValue / MindProgrammingMax) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>

                    <h4 v-if="workBook>3" class="small font-weight-bold">{{$t('Common.TeamBuilding')}}</h4>
                    <b-progress v-if="workBook>3" :max="TeamBuildingMax">
                        <b-progress-bar :value="TeamBuildingValue" :label="`${((TeamBuildingValue / TeamBuildingMax) * 100).toFixed(2)}%`"></b-progress-bar>
                    </b-progress>

                </div>
            </div>
        </div>
        <div class="col-lg-8">

            <div class="row">
                <div class="col">
                    <div class="card shadow mb-3">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">User Settings</p>
                        </div>
                        <div class="card-body">

                            <div class="form-row">

                                <div class="col">
                                    <div class="form-group"><label for="email"><strong>Email Address</strong></label><input v-model="user.email" class="form-control" type="email" placeholder="user@example.com" name="email"></div>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col">
                                    <div class="form-group"><label for="first_name"><strong>First Name</strong></label><input v-model="user.firstName" class="form-control" type="text" placeholder="John" name="first_name"></div>
                                </div>
                                <div class="col">
                                    <div class="form-group"><label for="last_name"><strong>Last Name</strong></label><input v-model="user.lastName" class="form-control" type="text" placeholder="Doe" name="last_name"></div>
                                </div>
                            </div>
                            <div class="form-group"><button class="btn btn-primary btn-sm" @click="saveProfile()">Save Profile</button></div>

                        </div>
                    </div>
                    <div class="card shadow" v-if="userType == 'user'">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Mentor Information</p>
                        </div>
                        <div class="card-body py-3" v-if="user.mentor">
                            <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" :src="user.mentor.profileImage" width="160" height="160">
                                <div class="mb-3">{{user.mentor.firstName + " " + user.mentor.lastName}}</div>
                                <p style="color:red" v-if="!user.Approved">Your Answers Has not been Approved By Your Mentor</p>
                                <p style="color:green" v-if="user.Approved">Your Answers Has been Approved By Your Mentor</p>
                            </div>
                        </div>
                        <div class="card-body py-3" v-if="!user.mentor">

                            <p style="color:red">Mentor Has Not Been Assigned For You Please Contact Your Adminstrator</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import {
    getUserDataSingleMentor,

    getVisionPages,
    getHabitPages,
    MindProgrammingPages,
    TeamBuildingPages,
    getUrl,
    patchData
} from '../../assets/js/service'
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
    components: {
        vueDropzone: vue2Dropzone,
    },
    data() {
        return {
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",

                profileImage: "",
                userType: "",

            },
            id: localStorage.getItem('userId'),
            token: localStorage.getItem('token'),
            userType: localStorage.getItem('userType'),
            forImageButton: false,

            vdropzoneOptions: {
                url: getUrl() + "/containers/imags/upload",
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
    mounted() {
        console.log("mentor test")
        let token = localStorage.getItem('token')
        getUserDataSingleMentor(this.id, token).then(
            resps => {
                this.user = resps.data;
                console.log(this.user)

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
        saveProfile() {
            patchData('mentors', this.token, this.user).then(resp => {

                    console.log("before tost");
                    this.makeToast("success", "Dear " + resp.data.firstName + " you have success fully Changed Your Profile");
                    localStorage.setItem('fullName', resp.data.firstName + ' ' + resp.data.lastName)
                })
                .catch(err => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "There is Some Error.Please Check your Form")

                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem")
                    } else {
                        this.makeToast("danger", "Some Error has Happened")
                    }
                })
        },
        vsuccess(file, response) {
            console.log(response);
            console.log(response.result.files.file[0].name);
            this.user.profileImage =
                getUrl() + "/Containers/imags/download/" +
                response.result.files.file[0].name;
            patchData('mentors', this.token, this.user).then(resp => {

                    localStorage.setItem('profileImage', resp.data.profileImage);

                    console.log("before tost");
                    this.makeToast("success", "Dear " + resp.data.firstName + " you have success fully Changed Your Profile Image");
                })
                .catch(err => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "There is Some Error.Please Check your Form")

                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem")
                    } else {
                        this.makeToast("danger", "Some Error has Happened")
                    }
                })

        },
    }

}
</script>

<style lang="stylus" scoped>

</style>
