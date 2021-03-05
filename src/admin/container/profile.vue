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
            <div v-if=" userType == 'user'" class="card shadow mb-4">
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
                            <div class="position-relative row form-check">
                                <div v-if="loading1" class="text-center">

                                    <div class="lds-ripple">
                                        <div></div>
                                        <div></div>

                                    </div>loading..
                                </div><br>

                            </div>

                        </div>
                    </div>
                    <div class="card shadow" v-if="userType == 'user'">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Mentor Information</p>
                        </div>
                        <div class="card-body py-3" v-if="user.mentors">
                            <div class="card-body text-center shadow"><img class="rounded-circle mb-3 mt-4" :src="user.mentors.profileImage" width="160" height="160">
                                <div class="mb-3">{{user.mentors.firstName + " " + user.mentors.lastName}}</div>
                                <p style="color:red" v-if="!user.Approved">Your Answers Has not been Approved By Your Mentor</p>
                                <p style="color:green" v-if="user.Approved">Your Answers Has been Approved By Your Mentor</p>
                            </div>
                            <div class="card-body py-3" v-if="user.mentorMessage">
                                <div class="card-body text-center shadow">
Your Mentor Message : {{user.mentorMessage}}
                                </div>
                                
                            </div>
                        </div>
                        <div class="card-body py-3" v-if="!user.mentors">

                            <p style="color:red">Mentor Has Not Been Assigned For You Please Contact Your Adminstrator</p>

                        </div>
                    </div>
                    <div class="card shadow">
                        <div class="card-header py-3">
                            <p class="text-primary m-0 font-weight-bold">Change Password</p>
                        </div>
                        <div class="card-body py-3">
                            <b-col>
                                <div class="form-row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="first_name">
                                                <strong>Current Password</strong>
                                            </label>
                                            <input v-model="password.oldPassword" class="form-control" type="password" name="first_name">
                                            <p v-if="currentReq" style="color:red">Current Password is requiered</p>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group">
                                            <label for="last_name">
                                                <strong>New Password</strong>
                                            </label>
                                            <input v-model="password.newPassword" class="form-control" type="password" name="last_name">
                                            <p v-if="newReq" style="color:red">New Password is requiered</p>
                                            <p v-if="minpass" style="color:red">The minimum Length Of the password has to be more than 8 characters</p>
                                            <label for="last_name">
                                                <strong>Confirm Password</strong>
                                            </label>
                                            <input v-model="confirmPassword" class="form-control" type="password" name="last_name">
                                            <p v-if="notSame" style="color:red">Passwords are not the same</p>
                                        </div>

                                        <div class="text-center">
                                            <b-button variant="primary" @click="changePassword()">
                                                Change Password
                                            </b-button>
                                        </div>
                                        <div class="position-relative row form-check">
                                            <div v-if="loading" class="text-center">

                                                <div class="lds-ripple">
                                                    <div></div>
                                                    <div></div>

                                                </div>loading..
                                            </div><br>

                                        </div>

                                    </div>
                                    
                                </div>
                            </b-col>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import Vue from "vue"
import {
    BootstrapVue,

} from "bootstrap-vue"
Vue.use(BootstrapVue);
import {
    getUserDataMentor,
    getVisionPages,
    getHabitPages,
    MindProgrammingPages,
    TeamBuildingPages,
    getUrl,
    patchData,
    patchDataId,
    postsToken
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
            password: {
                oldPassword: '',
                newPassword: ''
            },
            confirmPassword: '',
            loading1: false,
            loading: false,
            currentReq: false,
            newReq: false,
            notSame: false,
            minpass: false,
            id: localStorage.getItem('userId'),
            token: localStorage.getItem('token'),
            userType: localStorage.getItem('userType'),
            forImageButton: false,
            VisionMax: '',
            VisionValue: '',
            Vision: '',
            HabitMax: '',
            HabitValue: '',
            Habit: '',
            MindProgrammingMax: '',
            MindProgrammingValue: '',
            MindProgramming: '',
            TeamBuildingMax: '',
            TeamBuildingValue: '',
            TeamBuilding: '',
            workBook: localStorage.getItem('workBook'),
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
    mounted() {

        let token = localStorage.getItem('token');
        console.log(this.id)
        getUserDataMentor('users/', this.id, token).then(
            resps => {
                this.user = resps.data;

                console.log(this.user)
                this.VisionMax = getVisionPages().length;
                this.VisionValue = resps.data.pages[0];
                this.Vision = getVisionPages()[resps.data.pages[0]];

                this.HabitMax = getHabitPages().length;
                this.HabitValue = resps.data.pages[1];
                this.Habit = getHabitPages()[resps.data.pages[1]];

                this.MindProgrammingMax = MindProgrammingPages().length;
                this.MindProgrammingValue = resps.data.pages[2];
                console.log(MindProgrammingPages().length);
                console.log(resps.data.pages[2]);
                this.MindProgramming = MindProgrammingPages()[resps.data.pages[2]];
                this.TeamBuildingMax = TeamBuildingPages().length - 1;
                this.TeamBuildingValue = resps.data.pages[3];
                this.TeamBuilding = TeamBuildingPages()[resps.data.pages[3]];

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
        changePassword() {
            this.currentReq = false;

            this.newReq = false;
            this.notSame = false;
            this.minpass = false;
            let pass = true;
            if (!this.password.oldPassword) {
                this.currentReq = true;
                pass = false;
            }
            if (!this.password.newPassword) {
                this.newReq = true;
                pass = false;
            }
            if (this.password.newPassword != this.confirmPassword) {
                this.notSame = true;
                pass = false;
            }
            if (this.password.newPassword.length < 8 && this.password.newPassword) {
                this.minpass = true;
                pass = false;
            }
            if (pass) {
                this.loading = true;
                let dataBase = '/users/change-password';
                let token = localStorage.getItem('token');
                postsToken(dataBase, this.password, token).then(resp => {
                    this.loading = false;
                    this.password = {
                        oldPassword: '',
                        newPassword: ''
                    };
                    this.changePassword = '';
                    this.makeToast("success", "Dear " + this.user.firstName + " You Have Success Fully Changed Your Password");
                }).catch(err => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "There is Some Error.Please Check If your Current Password is Right")
                        this.loading = false;

                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem")
                        this.loading = false;
                    } else {
                        this.makeToast("danger", "Some Error has Happened")
                        this.loading = false;
                    }
                })
            }
        },
        saveProfile() {
            this.loading1 = true;
            patchDataId(this.id, 'users/', this.token, this.user).then(resp => {

                    console.log("before tost");
                    this.makeToast("success", "Dear " + resp.data.firstName + " you have success fully Changed Your Profile");
                    this.loading1 = false;
                    localStorage.setItem('fullName', resp.data.firstName + ' ' + resp.data.lastName)
                })
                .catch(err => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "There is Some Error.Please Check your Form")
                        this.loading1 = false;

                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem")
                        this.loading1 = false;
                    } else {
                        this.makeToast("danger", "Some Error has Happened")
                        this.loading1 = false;
                    }
                })
        },
        vsuccess(file, response) {
            console.log(response)
            this.user.profileImage = response.secure_url;
            patchDataId(this.id, 'users/', this.token, this.user).then(resp => {

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
