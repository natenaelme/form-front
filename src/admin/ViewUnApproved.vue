<template>
<div>
    <h3 class="text-center">List of users</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">WorkBook</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody v-if="usersData">
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="user.profileImage" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>

                    </th>
                    <th>
                        <div class="mb-2">

                            <b-button @click="$bvModal.show('modal-'+(index))">Approve</b-button>
                            <b-modal :id="'modal-'+index" title="Assigne WorkBook" @ok="approveUser(user)">
                                <p>{{user.firstName + " " + user.lastName}}</p>

                                <p class="my-4">Select WorkBook</p>

                                <b-form-select v-model="selected" class="mb-3">
                                    <b-form-select-option value="1">WorkBook 1 only</b-form-select-option>
                                    <b-form-select-option value="2">WorkBook 1 and 2 only</b-form-select-option>
                                    <b-form-select-option value="3">WorkBook 1,2 and 3 only </b-form-select-option>
                                    <b-form-select-option value="4">All 4 WorkBook </b-form-select-option>

                                </b-form-select>

                            </b-modal>
                        </div>
                    </th>
                </tr>

            </tbody>

            <tbody class="text-center" v-if="usersData.length == 0">
                <th colspan="6"> <strong>There Is no AnApproved User</strong></th>

            </tbody>
        </table>

        <div v-if="loading" class="text-center">

            <div class="lds-ripple">
                <div></div>
                <div></div>

            </div>loading..
        </div><br>

    </div>
    <div>
        <div>

        </div>
    </div>

</div>
</template>

<script>
const {
    getterUnApproUsers,
    patchDataId
} = require('../assets/js/service')

export default {
    data() {
        return {
            usersData: {},
            selectedUser: '',
            modalShow: false,
            selected: '',
            loading: false
        }
    },
    mounted() {
        this.loading = true;
        let token = localStorage.getItem('token')
        getterUnApproUsers(token, 'user').then(resp => {
            this.usersData = resp.data
            this.loading = false;
        })

    },
    methods: {
        test(user) {
            localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/admin/main_view')
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        approveUser(user) {

            console.log(user);
            let dataBase = "users/";
            let token = localStorage.getItem("token");

            user.canAccess = true;
            user.workBook = this.selected;
            patchDataId(user.id, dataBase, token, user).then((resp => {
                getterUnApproUsers(token, 'user').then(resp => {
                    this.usersData = resp.data
                })
            }))
        },
        showMsgBoxOne(user) {
            this.boxOne = '',

                this.$bvModal.msgBoxConfirm(
                    'Are you sure you want to Approve ' + user.firstName + " " + user.lastName

                )
                .then(value => {
                    if (value == true) {

                    }
                })
                .catch(err => {
                    // An error occurred
                })
        },
    },
}
</script>

<style >

</style>
