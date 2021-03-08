<template>
<div>
    <h3 class="text-center">List of Customers</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Progress</th>
                    <th scope="col">Approval</th>
                    <th scope="col" v-if="userType != 'accountant'">View</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="user.profileImage" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>{{user.username}}</th>
                    <th>
                        <b-container>
                            <b-progress style="background-color:lightgray" :max="maxValue(user.workBook)" col='8'>
                                <b-progress-bar :value="user.progress" :label="`${((user.progress / maxValue(user.workBook)) * 100).toFixed(2)}%`"></b-progress-bar>
                            </b-progress>

                            <p v-if="user.progress==0" style="color:red">0%</p>
                        </b-container>
                    </th>
                    <th>
                        <p v-if="user.Approved" style="color:green">Approved</p>
                        <p v-if="!user.Approved" style="color:red">Not Approved</p>
                    </th>
                    <th v-if="userType != 'accountant'"><button class="btn btn-outline-dark" @click="test(user)">View</button></th>
                </tr>

            </tbody>
            <tbody class="text-center" v-if="usersData.length == 0">
                <th colspan="12"> <strong>There Is no Approved User</strong></th>

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
    getterUsers,
    getVisionPages,
    MindProgrammingPages,
    getHabitPages,
    TeamBuildingPages,
    getterId,
    getMentorsData,
    getUserData
} = require('../assets/js/service')

export default {
    data() {
        return {
            usersData: {},
            loading: false,
            userType : null,
        }
    },
    mounted() {
        this.loading = true;
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('userId');
        
        let dataBase = '/users';
        getterId(dataBase+'/',id,token).then(resp=>{
            console.log("useruseruseruser");
            console.log(resp.data);
            this.userType =resp.data.userType;
            if (this.userType == 'admin') {
            getterUsers(token, 'user').then(resp => {
                this.usersData = resp.data;
                this.loading = false;
            })
        } else if (this.userType == 'mentor') {
            getUserData(dataBase, id, token).then(resp => {
                this.usersData = resp.data;
                this.loading = false;
                console.log(this.users)
            })
        }
        else if (this.userType == 'accountant') {
            getterUsers(token, 'user').then(resp => {
                this.usersData = resp.data;
                this.loading = false;
            })
        }
        })
        

    },
    methods: {
        test(user) {
            localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/admin/main_view')
        },
        maxValue(WorkBook) {
            let max;
            if (WorkBook) {
                console.log(WorkBook);

                if (WorkBook == 1) {
                    console.log("workbook :" + WorkBook)
                    max = getVisionPages().length
                } else if (WorkBook == 2) {

                    max = (getVisionPages().length + getHabitPages().length)
                } else if (WorkBook == 3) {

                    max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length)
                } else if (WorkBook == 4) {

                    max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length + TeamBuildingPages().length - 1)
                } else {
                    max = 0
                }
            }

            return (max);

        }
    },
}
</script>

<style >

</style>
