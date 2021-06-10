<template>
<div>
    <b-list-group-item>
        <b-row><span>

                <div class="float-right">

                </div>
            </span>
        </b-row>
        <b-row>

        </b-row>
        <div class="float-left">
            <img class="border rounded-circle img-profile" thumbnail fluid :src="profileImage" width=60em height=60em alt="">
            <label for="" style="padding-left:10px"> User Name : {{fullName}}</label>
        </div>
        <div class="float-right">
            <p v-if="mentorId" style="float:left">Mentor Name : {{mentorName}}</p>
            <p v-if="!mentorId">Assigne Mentor

                <select v-model="selected" @click="sort(mentors)" class="browser-default custom-select">

                    <option v-for="(mentor,index) in mentors" :key="index" :value="mentor.id">{{mentor.firstName + ' ' +mentor.lastName}}</option>

                </select>

                <br>
                <b-button class="float-right" :disabled="!selected" @click="assigneMentor()" variant="outline-primary" style="margin-top:10">
                    submit
                </b-button>

            </p>

        </div><br><br><br><br><br>
        <b-button v-if="!user.data.Approved" @click="approveUser()" variant="primary">Approve Users Answer</b-button>
    </b-list-group-item>
    <b-list-group-item class="table-responsive">
        <b-button-group class="tabel">
            <b-button :class="{ 'btn-success': title == $t('Common.Vision')}" @click="TitleChange($t('Common.Vision'))" to="/mentor/main_view/vision">{{$t('Common.Vision')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.Habit')}" @click="TitleChange($t('Common.Habit'))" to="/mentor/main_view/habit_view">{{$t('Common.Habit')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.MindProgramming')}" @click="TitleChange($t('Common.MindProgramming'))" to="/mentor/main_view/mind_programming">{{$t('Common.MindProgramming')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.TeamBuilding')}" @click="TitleChange($t('Common.TeamBuilding'))" to="/mentor/main_view/teambuilding_view">{{$t('Common.TeamBuilding')}}</b-button>
        </b-button-group>
    </b-list-group-item>
    <b-list-group-item>
        <h3 class="text-center">{{title}}</h3>
        <b-list-group-item>
            <router-view></router-view>
        </b-list-group-item>

    </b-list-group-item>

    <!-- for the page  -->
    <!--    
    <div class="table-responsive" style="margin:0 !important; padding:0Important">
        <div class="width" style="width:450px;height:450px;  background-color: #bbb;
  border-radius: 50%;
  display: inline-block; margin">
            <div style="width:100%">
                <div class="rotate90 divs" style="        width: 270px;
    margin-left: 23%;
    padding-left: 80px;  line-height: 1.5 !important;padding-right: 0px !important;margin-bottom: -15px;">

                    <b-col>
                        <label for="range-2" style="transform: rotate(-90deg);">Socal
                            <br>
                            Value: {{ value }}</label>
                        <b-form-input id="range-2" style="hight:200px" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
                        <div class="mt-2"></div>
                    </b-col>
                </div>

                <div style="">
                    <b-row style="margin-bottom:10px">
                        <div class="rotate divs" style=" line-height: 1.5 !important;width:170px;margin-left: 14%;">
                            <label for="range-2" style="transform: rotate(-45deg);">Vision <br>
                                Value: {{ value }}</label>
                            <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>

                        </div>
                        <div class="rotate-135 divs" style=" line-height: 1.5 !important;width:170px; ">

                            <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
                            <label for="range-2" style="transform: rotate(-130deg);margin-bottom: 10px;">Helth
                                <br>Value: {{ value }}
                            </label>
                        </div>
                    </b-row>

                </div>

                <div style="margin-right:30%">
                    <b-row>
                        <b-col style=" line-height: 1.5 !important;">
                            <label for="range-2" style="width:200px">Mental <br> Value: {{ value }}</label>
                            <b-form-input style="width:170px" id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>

                        </b-col>
                        <b-col style=" line-height: 1.5 !important; margin-left:55%">
                            <label for="range-2" style="float: left;width:200px">Family <br>Value: {{ value }}</label>
                            <b-form-input style="transform:rotateY(180deg);width:180px" id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
                            <div class="mt-2"></div>

                        </b-col>

                    </b-row>
                </div>
                <div>
                    <div style="">
                        <b-row style="margin-to:10px">
                            <div class="rotate45 divs" style=" line-height: 1.5 !important;width:180px;margin-left: 8%; margin-top: 15px;
   ">
                                <label for="range-2" style="transform: rotate(45deg); ">Financial <br> Value: {{ value }}</label>
                                <b-form-input id="range-2" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
                                <div class="mt-2"></div>
                            </div>
                            <div class="rotate divs" style="line-height: 1.5 !important;width:180px;margin-left: 35px;
    margin-top: 15px;">
                                <label for="range-2" style="float: right;transform: rotate(-45deg);">Spiritual <br> Value: {{ value }}</label>
                                <b-form-input id="range-2" style="transform:rotateY(180deg);" v-model="value" type="range" min="0" max="5" step="0.5"></b-form-input>
                                <div class="mt-2"></div>
                            </div>
                        </b-row>

                    </div>
                </div>
            </div>

        </div>
    </div>
 -->

</div>
</template>

<script>
import Habit from '../admin/HabitView'
import {
    getterToken,
    getDataOfUsers,
    patchDataId,
    getMentors
} from '../assets/js/service'
export default {
    components: {
        Habit,

    },
    data() {
        return {
            value: 2,
            title: '',
            selected: '',
            mentors: {},
            mentorName: '',
            user: {},
            profileImage: '',
            fullName: '',
            mentorId: '',
            sortedMentors: ''
        }
    },
    mounted() {
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('userToView');
        getMentors(token).then(resp => {
            console.log(resp.data)

            // console.log(resp)

            this.mentors = resp.data;

            getDataOfUsers('users/', id, token).then(
                resp => {
                    this.user = resp;
                    console.log(resp.data)
                    this.profileImage = resp.data.profileImage;
                    this.fullName = resp.data.firstName + ' ' + resp.data.lastName;
                    this.mentorId = resp.data.mentorId;
                    let mentor = this.mentors.filter(mentor => mentor.id == resp.data.mentorId);

                    this.mentorName = mentor[0].firstName + ' ' + mentor[0].lastName;
                    // console.log(mentor);
                });
        });

        this.title = this.$i18n.t("Common.Vision")
        this.$router.replace('/maintor/main_view')
    },
    methods: {
        TitleChange(title) {
            this.title = title
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },
        approveUser() {
            let dataBase = "users/";
            let token = localStorage.getItem("token");
            console.log(this.user.data)
            this.user.data.Approved = true;

            patchDataId(this.user.data.id, dataBase, token, this.user.data).then((resp => {
                    this.user = resp;
                    this.makeToast("success", "You have successfully Approved the user");

                }))
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
        assigneMentor() {
            let dataBase = "users/";
            let token = localStorage.getItem("token");
            console.log(this.user.data)
            this.user.data.mentorId = this.selected;

            patchDataId(this.user.data.id, dataBase, token, this.user.data).then((resp => {

                    this.makeToast("success", "You have successfully assigned a mentor for the user");
                    this.mentorId = resp.data.mentorId;
                    let mentor = this.mentors.filter(mentor => mentor.id == resp.data.mentorId);

                    this.mentorName = mentor[0].firstName + ' ' + mentor[0].lastName;

                }))
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

        sort(data) {

            this.sortedMentors = data.sort(function (a, b) {
                var aFirstChar = a.firstName.charAt(0);
                var bFirstChar = b.firstName.charAt(0);
                if (aFirstChar > bFirstChar) {
                    return 1;
                } else if (aFirstChar < bFirstChar) {
                    return -1;
                } else {
                    var aLastChar = a.lastName.charAt(0);
                    var bLastChar = b.lastName.charAt(0);
                    if (aLastChar > bLastChar) {
                        return 1;
                    } else if (aLastChar < bLastChar) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
            });
        }
    },
}
</script>

<style>
.circle {
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

divs {
    position: absolute;
    left: 40px;
    top: 40px;
    width: 100px;
    height: 100px;
    background-color: lightgray;

}

.rotate {
    background-color: transparent;

    transform: rotate(45deg);
}

.rotates {
    background-color: transparent;

}

.rotate45 {
    background-color: transparent;

    transform: rotate(-45deg);
}

.rotate90 {
    background-color: transparent;

    transform: rotate(90deg);
}

.rotate-90 {
    background-color: transparent;

    transform: rotate(-90deg);
}

.rotate-135 {
    background-color: transparent;

    transform: rotate(135deg);
}

.rotate-translate {
    background-color: pink;
    transform: rotate(45deg) translateX(180px);
}

.translate-rotate {
    background-color: gold;
    transform: translateX(180px) rotate(45deg);
}

#topDiv {
    background-color: lightblue;
    max-height: 50%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

#insideDiv {
    background-color: pink;
    overflow-y: auto;
}

@media only screen and (max-width: 600px) {
    width {
        background-color: pink !important;
    }
}
</style>
