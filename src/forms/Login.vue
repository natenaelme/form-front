<template>
<div class="main" style="padding-top:5%">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-9 col-lg-12 col-xl-10">
                <div class="card shadow-lg o-hidden border-0 my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-5 d-none d-lg-flex">
                                <div class="flex-grow-1 bg-register-image" style="background-color:black">

                                    <h3 class="text-center d-xl-flex justify-content-xl-center align-items-xl-center" style="color:white;height: 100%;">
                                        <img src="@/assets/img/alpha_icon.png" alt="" width="10%">
                                        {{$t('Login.Login')}}

                                    </h3>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h4 class="text-dark mb-4">{{$t('Common.Welcome')}}</h4>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input class="form-control form-control-user" v-model="form.email" type="email" id="exampleInputEmail" aria-describedby="emailHelp" :placeholder="$t('Login.Email')" name="email">
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control form-control-user" v-model="form.password" type="password" id="exampleInputPassword" :placeholder="$t('Login.Password')" name="password">
                                        </div>

                                        <hr>
                                    </form>

                                    <button class="btn btn-primary btn-block text-white btn-user" @click="login()" type="submit">{{$t('Login.Login')}}</button>
                                    <div class="text-center"><a class="small" @click="login()" to="/signup">{{$t('Common.CreateAccount')}}</a></div>
                                </div>
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
const {

    posts,
    getterId,
    setUserInfo,
    getUserInfo
} = require('../assets/js/service')
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            },

        }

    },

    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        login() {

            posts('/users/login', this.form).then(resp => {
                        console.log(resp);

                        localStorage.setItem("token", resp.data.id);
                        localStorage.setItem("userId", resp.data.userId);

                        getterId('users/', resp.data.userId, resp.data.id).then(resps => {
                            console.log(resps);
                            localStorage.setItem("profileImage", resps.data.profileImage)
                            localStorage.setItem("userType", resps.data.userType);

                            setUserInfo(resp.data.id, resps.data.userType, resps.data.firstName, resps.data.lastName);
                            console.log(getUserInfo());
                            localStorage.setItem("fullName", resps.data.firstName + " " + resps.data.lastName);
                            localStorage.setItem("progress", resps.data.progress);
                            localStorage.setItem("pages", resps.data.pages);
                            this.makeToast("success", "Sucessfull login");
                            if (resps.data.userType == "user") {
                                console.log("user");
                                this.$router.replace('/question/main')

                            }

                        })
                    },

                )
                .catch(err => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "Username Or Password Dosn't Match");

                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem");
                    } else {
                        this.makeToast("danger", "Some Error has Happened");
                    }
                })
        }
    },
}
</script>

<style>
.box.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
}
</style>
