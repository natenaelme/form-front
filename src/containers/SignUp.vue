<template>
<div>
    <div class="container">
        <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-flex">
                        <div class="flex-grow-1 bg-register-image" style="background-color:black">

                            <h3 class="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style="color:white;height: 100%;">
                                <img src="@/assets/img/alpha_icon.png" alt="" width="10%">
                                POWERFUL PROCESS

                            </h3>
                        </div>
                    </div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h4 class="text-dark mb-4">
                                    {{ $t("Common.CreateAccount") }}
                                </h4>
                            </div>
                            <form>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="form-group">
                                            <label for="firstName">First Name</label>
                                            <input type="text" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                                            <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="lastName">Last Name</label>
                                            <input type="text" v-model="user.lastName" id="lastName" name="lastName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                                            <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Last Name is required</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group">
                      <label for="gender">Gender</label>
                      <b-form-select
                        v-model="user.gender"
                        :options="gender"
                        size="sm"
                        class="form-control"
                        :class="{
                          'is-invalid': submitted && $v.user.gender.$error,
                        }"
                      >
                      </b-form-select>
                      <div
                        v-if="submitted && !$v.user.gender.required"
                        class="invalid-feedback"
                      >
                        Gender Is Required
                      </div>
                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                                        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                                            <span v-if="!$v.user.email.required">Email is required</span>
                                            <span v-if="!$v.user.email.email">Email is invalid</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="userName">User Name</label>
                                    <input type="text" v-model="user.username" id="userName" name="userName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.username.$error }" />
                                    <div v-if="submitted && !$v.user.username.required" class="invalid-feedback">User Name is required</div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                            <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                                <span v-if="!$v.user.password.required">Password is required</span>
                                                <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label for="confirmPassword">Confirm Password</label>
                                            <input type="password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                                            <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                                                <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                                                <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12">
                                        <label for="dropzone">Profile Picther</label>
                                        <vue-dropzone ref="myVueDropzone" id="dropzone" @vdropzone-success="vsuccess" :options="vdropzoneOptions"></vue-dropzone>
                                        <div v-if="!imageuploaded" style="color:red" class="text-center">
                                            the image is not uploaded
                                        </div>
                                    </div>
                                </div>

                            </form>
                                       
                            <div class="text-center">
                                <button class="btn btn-primary btn-block text-white btn-user" @click="handleSubmit()">
                                    {{$t('Login.Register')}}
                                </button>
                                <hr />
                            </div>

                            <div class="text-center">
                                <router-link to="/signin">Already have an account? Login</router-link>
                            </div>
                            <div v-if="!show" class="text-center">
                                <div class="lds-ripple">
                                    <div></div>
                                    <div></div>

                                </div>loading..
                            </div>
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
    required,
    email,
    minLength,
    sameAs
} from "vuelidate/lib/validators";
const {
    posts,
    getUrl
} = require("../assets/js/service");
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";

import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


Vue.use(BootstrapVue);

Vue.use(IconsPlugin);;

export default {
    mounted() {
        this.makeToast("Some Error has Happened");
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    data() {
        return {
      gender: [
        { value: "M", text: "Male" },
        { value: "F", text: "female" },

      ],
            user: {
                firstName: "",
                lastName: "",
                gender:"",
                email: "",
                password: "",
                username: "",
                confirmPassword: "",
                progress: 0,
                profileImage: "",
                userType: "user",
                pages: [0, 0, 0, 0],
                canAccess: false
            },
            submitted: false,
            show: true,
            password: "",
            firstName: '',
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
            show: true,
            imageuploaded: true,
        };

    },
    validations: {
        user: {
            firstName: {
                required
            },
            lastName: {
                required
            },
            gender:{
                required
            },
            username: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required,
                sameAsPassword: sameAs('password')
            }

        }
    },

    methods: {
    makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
        handleSubmit() {
            this.submitted = true;

            // stop here if form is invalid
            this.$v.$touch();
            if (this.$v.$invalid) {
                return;
            }
            if (this.user.profileImage) {
                this.show = false;
                delete this.user.confirmPassword;
                posts("users", this.user)
                    .then((resp) => {
                        console.log(resp);
                        this.makeToast("success", "Dear " + this.user.firstName + " you have success fully registered");

                        (this.user.email = ""),
                        (this.user.password = ""),
                        (this.user.firstName = ""),
                        (this.user.lastName = "");
                        this.show = true;
                        this.$router.replace('/login')
                    })
                    .catch((err) => {
                        console.log(this.form);
                        if (err.response) {
                            // client received an error response (5xx, 4xx)

                            this.makeToast("danger", "the Information that you entered is not correct.or the email or user name allrady existed");
                            this.show = true;
                            console.log(err);
                        } else if (err.request) {
                            console.log("dfghjkjhgfdfghjjhgfddfghjhgfdfg");
                            this.makeToast("Connection Problem");
                            this.show = true;
                        } else {
                            this.makeToast("Some Error has Happened");
                            this.show = true;
                        }
                    });
            } else {
                this.imageuploaded = false;
            }
        },
        vsuccess(file, response) {
            console.log(response);
            console.log(response.secure_url);
            this.user.profileImage = response.secure_url

        },

    },
};
</script>

<style>
.box.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.imgs {
    height: 100%;
}

.Aligner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Aligner-item {
    max-width: 50%;
}

.Aligner-item--top {
    align-self: flex-start;
}

.Aligner-item--bottom {
    align-self: flex-end;
}
</style>
