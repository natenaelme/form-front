<template>
<div>
    <NavBar />
    <router-view style="margin-top:80px" v-on:changeTitle="tests($event)"></router-view>
    <br>
    <h1>{{value}}</h1>
    <b-container>
        <b-progress :max="max" col='8'>
            <b-progress-bar :value="value" style="color:black" v-if="value != 0" :label="'Congratulation You Have Finshed'+`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
            <b-progress-bar :value="value" style="color:black" v-if="value == 0" :label="'Start'+`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
        </b-progress>

    </b-container>
    <br>
</div>
</template>

<script>
import NavBar from '../containers/NavBar'
import Vue from "vue"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
    BootstrapVue,
    IconsPlugin
} from "bootstrap-vue"
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
const {

    patchDataId,
    getterId,
    getVisionPages,
    MindProgrammingPages,
    getHabitPages,
    TeamBuildingPages
} = require('../assets/js/service')
export default {
    components: {
        NavBar,

    },
    data() {
        return {
            test: "hi test",
            value: localStorage.getItem('progress'),
            max: 0
        }
    },
    mounted: function () {
        let token = localStorage.getItem('token');
        let WorkBook = localStorage.getItem('workBook');
        console.log('question workbook' + WorkBook);
        if (WorkBook == 1) {
            console.log("pages : " + getVisionPages().length)
            this.max = getVisionPages().length;
        } else if (WorkBook == 2) {
            console.log("pages : " + (getVisionPages().length + getHabitPages().length))
            this.max = (getVisionPages().length + getHabitPages().length)
        } else if (WorkBook == 3) {
            console.log("pages : " + (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length))
            this.max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length)
        } else if (WorkBook == 4) {
            console.log("pages : " + (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length + TeamBuildingPages().length))
            this.max = (getVisionPages().length + getHabitPages().length + MindProgrammingPages().length + TeamBuildingPages().length - 1);
            console.log("pages : " + (getVisionPages().length) + ',' + (getHabitPages().length) + ',' + (MindProgrammingPages().length) + ',' + (TeamBuildingPages().length - 1));
            console.log(this.max)
        }

        let id = localStorage.getItem('userId');
        getterId('users/', id, token).then(resp => {
            this.value = resp.data.progress,

                localStorage.setItem('workBook', resp.data.workBook),
                localStorage.setItem('userType', resp.data.userType),
                console.log('work' + resp.data.workBook)
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

        tests(value) {
            let token = localStorage.getItem('token');
            let dataBase = '/users/';
            let id = localStorage.getItem('userId');
            console.log(value);
            if (value == 'habit') {
                let id = localStorage.getItem('userId');
                let token = localStorage.getItem('token');
                getterId('users/', id, token).then(resps => {
                    let pages = resps.data.pages;
                    let habit = pages[1];

                    patchDataId(id, dataBase, token, {
                        pages: [pages[0], (parseInt(habit) + 1), pages[2], pages[3]]
                    }).then((result) => {
                        console.log(result);
                        localStorage.setItem("pages", result.data.pages);
                    }).catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "progressbar is not updated")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    });
                })
            } else if (value == 'mindProgrammingPages') {
                let id = localStorage.getItem('userId');
                let token = localStorage.getItem('token');
                getterId('users/', id, token).then(resps => {
                    let pages = resps.data.pages;
                    let mindProgramming = pages[2];
                    patchDataId(id, dataBase, token, {
                        pages: [pages[0], pages[1], (parseInt(mindProgramming) + 1), pages[3]]
                    }).then((result) => {
                        console.log(result);
                        localStorage.setItem("pages", result.data.pages);
                    }).catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "progressbar is not updated")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    });
                })
            } else if (value == 'teamBuilding') {
                let id = localStorage.getItem('userId');
                let token = localStorage.getItem('token');
                getterId('users/', id, token).then(resps => {
                    let pages = resps.data.pages;

                    let teamBuilding = pages[3];
                    patchDataId(id, dataBase, token, {
                        pages: [pages[0], pages[1], pages[2], (parseInt(teamBuilding) + 1)]
                    }).then((result) => {
                        console.log(result);
                        localStorage.setItem("pages", result.data.pages);
                    }).catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "progressbar is not updated")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    });
                })
            } else if (value == 'vision') {
                let id = localStorage.getItem('userId');
                let token = localStorage.getItem('token');
                getterId('users/', id, token).then(resps => {
                    let pages = resps.data.pages;
                    let habit = pages[0];

                    patchDataId(id, dataBase, token, {
                        pages: [(parseInt(habit) + 1), pages[1], pages[2], pages[3]]
                    }).then((result) => {
                        console.log(result);
                        localStorage.setItem("pages", result.data.pages);
                    }).catch((err) => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "progressbar is not updated")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    });
                })
            }
            getterId('users/', id, token).then(resp => {
                patchDataId(id, dataBase, token, {

                    progress: resp.data.progress + 1
                }).then((result) => {
                    console.log(result);
                    localStorage.setItem("progress", result.data.progress);
                    this.value = result.data.progress
                }).catch((err) => {
                    if (err.response) {
                        // client received an error response (5xx, 4xx)
                        this.makeToast("danger", "progressbar is not updated")
                        this.show = true;
                    } else if (err.request) {
                        this.makeToast("danger", "Connection Problem")
                        this.show = true;
                    } else {
                        this.makeToast("danger", "Some Error has Happened")
                        this.show = true;
                    }
                });
            })
            // this.value = data;
        }

    },
}
</script>
