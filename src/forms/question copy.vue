<template>
<div>
    <NavBar />
    <router-view style="margin-top:80px" v-on:changeTitle="tests($event)"></router-view>
    <br>
    <b-container>
        <b-progress :max="max" col='8'>
            <b-progress-bar :value="value" :label="`${((value / max) * 100).toFixed(2)}%`"></b-progress-bar>
        </b-progress>
    </b-container>
    <br>
</div>
</template>

<script>
import NavBar from '@/components/container/NavBar.vue'

const {

    patchDataId,
    getterId
} = require('../assets/js/service')
export default {
    components: {
        NavBar,

    },
    data() {
        return {
            test: "hi test",
            value: localStorage.getItem('progress'),
            max: 22
        }
    },
    mounted: function () {
        let token = localStorage.getItem('token');

        let id = localStorage.getItem('userId');
        console.log("ggggggggggggggggggggggggg");
        getterId('users/', id, token).then(resp => {
            console.log("testetsteetstesetsetes");
            this.value = resp.data.progress;
        }).catch((err) => {
            console.log("testetsteetstesetsetes");
            console.log(err);
            if (err.response) {
              // client received an error response (5xx, 4xx)

              this.makeToast(
                "danger",
                "the Information that you entered is not correct.or the email allrady existed"
              );
              console.log(err);
            } else if (err.request) {
              this.$toasted.show("Connection Problem");
            } else {
              this.$toasted.show("Some Error has Happened");
            }
          });
    },
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
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
