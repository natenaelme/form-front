<template>
<div>
    <h3 class="text-center">List of userssssss</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">Progress</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for=" (user,index) in usersData" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="user.profileImage" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>
                        <b-container>
                            <b-progress style="background-color:lightgray" :max="maxValue(user.workBook)" col='8'>
                                <b-progress-bar :value="user.progress" :label="`${((user.progress / maxValue(user.workBook)) * 100).toFixed(2)}%`"></b-progress-bar>
                            </b-progress>

                            <p v-if="user.progress==0" style="color:red">0%</p>
                        </b-container>
                    </th>
                    <th><button class="btn btn-outline-dark" @click="test(user)">View</button></th>
                </tr>

            </tbody>
        </table>
    </div>

</div>
</template>

<script>
const {
    getMentorsData,
    getVisionPages,
    MindProgrammingPages,
    getHabitPages,
    TeamBuildingPages
} = require('../assets/js/service')

export default {
    data() {
        return {
            usersData: {}
        }
    },
    mounted() {
        console.log("mentor page")
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('userId');
        let dataBase = '/users';

        getMentorsData(dataBase, id, token).then(resp => {
            this.usersData = resp.data;
            console.log(this.users)
        })
    },
    methods: {
        test(user) {
            localStorage.setItem('userToView', user.id),
                localStorage.setItem('userFullName', user.firstName + " " + user.lastName),
                localStorage.setItem('userProfilePic', user.profileImage),
                this.$router.replace('/mentor/main_view')
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

                    max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length + TeamBuildingPages().length)
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
