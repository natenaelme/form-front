<template>
<div>
    <b-button variant="primary" to='add_mentor'>

        <CIcon name="cil-plus" />
        Add Mentor

    </b-button>

    <h3 class="text-center">List of Mentor</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">View List Of Users</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="user.profileImage" class="rounded-circle" width="50em" height="50em" alt=""></th>

                    <th><button class="btn btn-outline-dark" @click="test(user)">View</button></th>
                </tr>

            </tbody>
            <tbody class="text-center" v-if="usersData.length == 0">
                <th colspan="6"> <strong>There Is no Mentor User</strong></th>

            </tbody>
        </table>
        <div v-if="loading" class="text-center">

            <div class="lds-ripple">
                <div></div>
                <div></div>

            </div>loading..
        </div><br>

    </div>

</div>
</template>

<script>
const {
    getterMentors
} = require('../assets/js/service')

export default {
    data() {
        return {
            usersData: {},
            loading: ''
        }
    },
    mounted() {
        this.loading = true;
        let token = localStorage.getItem('token')
        getterMentors(token, 'mentor').then(resp => {
            this.usersData = resp.data;
            console.log(this.usersData)
            this.loading = false;
        })
    },
    methods: {
        test(user) {

            this.$router.replace('mentor_user/' + user.id);
            localStorage.setItem('mentorName', user.firstName + ' ' + user.lastName)
        }
    },
}
</script>

<style>

</style>
