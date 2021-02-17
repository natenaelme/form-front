<template>
<div id="printMe">
    <h3 class="text-center">List of {{mentorName}} users</h3>
    <div class="table-responsive-lg">
        <table class="table">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Full Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Profile</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Approval</th>
                    <th scope="col">Progress</th>

                </tr>
            </thead>
            <tbody>
                <tr v-for=" (user,index) in users" :key="index">
                    <th>{{index+1}}</th>
                    <th>{{user.firstName + " " + user.lastName}}</th>
                    <th>{{user.email}}</th>
                    <th><img :src="user.profileImage" class="rounded-circle" width="50em" height="50em" alt=""></th>
                    <th>{{user.username}}</th>
                    <th>
                        <p v-if="user.Approved" style="color:green">Approved</p>
                        <p v-if="!user.Approved" style="color:red">Not Approved</p>
                    </th>
                    <th>
                        <b-container>
                            <b-progress style="background-color:lightgray" :max="maxValue(user.workBook)" col='8'>
                                <b-progress-bar :value="user.progress" :label="`${((user.progress / maxValue(user.workBook)) * 100).toFixed(2)}%`"></b-progress-bar>
                            </b-progress>

                            <p v-if="user.progress==0" style="color:red">0%</p>
                        </b-container>
                    </th>

                </tr>

            </tbody>
        </table>
        <p style="text-align: center;">
            <b-button @click="print()" variant="success">print</b-button>
        </p>
    </div>
</div>
</template>

<script>
import Vue from "vue";
import VueHtmlToPaper from "vue-html-to-paper";
const options = {
  name: "_blank",
  specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],

  styles: [
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  ],
};
Vue.use(VueHtmlToPaper, options);
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
    getMentorsData,
    getVisionPages,
    MindProgrammingPages,
    getHabitPages,
    TeamBuildingPages,
    getUserData
} from '../assets/js/service'
export default {
    data() {
        return {
            id: '',
            users: '',
            mentorName: localStorage.getItem('mentorName')
        }
    },
    mounted() {

        this.id = this.$route.params.id;
        let dataBase = '/users';
        let token = localStorage.getItem('token');
        getUserData(dataBase, this.id, token).then(resp => {
            this.users = resp.data;
            console.log(this.users)
        })
    },
    methods: {
            print() {
      // Pass the element id here
      this.$htmlToPaper("printMe");
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

<style lang="stylus" scoped>

</style>
