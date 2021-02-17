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
        <b-row style="height:100%" class="Aligner">
            <b-col class="align-middle Aligner-item">
                <img class="border  img-profile" thumbnail fluid :src="profileImage" width=80em height=80em alt="">
                <label for="" style="padding-left:10px"> User Name : {{fullName}}</label><br>
                <b-button v-if="!Approved" @click="approveUser()" variant="primary">Approve Users Answer</b-button>
            </b-col>

            <b-col>
                <p v-if="mentorId">Mentor Name : {{mentorName}}</p>
                <p v-if="!mentorId">Assigne Mentor

                    <select v-model="selected" @click="sort(mentors)" class="browser-default custom-select">

                        <option v-for="(mentor,index) in mentors" :key="index" :value="mentor.id">{{mentor.firstName + ' ' +mentor.lastName}}</option>

                    </select>

                    <b-button class="float-right" :disabled="!selected" @click="assigneMentor('mentor')" variant="outline-primary" style="margin-top:10">
                        submit
                    </b-button>

                </p>

                <p md='12'>
                    <b-row>
                        <b-col> <span v-if="workBook == 1">Work Book <br> One</span>
                            <span v-if="workBook == 2">Work Book <br> One,Two</span>
                            <span v-if="workBook == 3">Work Book <br> One,Two,Three</span>
                            <span v-if="workBook == 4">All Work Books</span>
                        </b-col>
                        <b-col>
                            <b-button size="sm" variant="success" v-b-modal.modal-1>Change</b-button>
                        </b-col>
                    </b-row>

                </p>
                <b-modal id="modal-1" title="Assigne WorkBook" @ok="assigneMentor('workBook')">
                    <p class="my-4">Select WorkBook</p>

                    <b-form-select v-model="workBook" class="mb-3">
                        <b-form-select-option value="1">WorkBook 1 only</b-form-select-option>
                        <b-form-select-option value="2">WorkBook 1 and 2 only</b-form-select-option>
                        <b-form-select-option value="3">WorkBook 1,2 and 3 only </b-form-select-option>
                        <b-form-select-option value="4">All 4 WorkBook </b-form-select-option>

                    </b-form-select>

                </b-modal>
            </b-col>

        </b-row>
        <b-row>
            Messge for Applicant
              <b-form-textarea v-model="mentorMessage"></b-form-textarea>
              
              <b-button variant="success" @click="sendMessage()" style="float:right">send</b-button>
        </b-row>

    </b-list-group-item>
    <b-list-group-item class="table-responsive">
        <b-button-group class="tabel">
            <b-button :class="{ 'btn-success': title == $t('Common.Vision')}" @click="TitleChange($t('Common.Vision'))" to="/admin/main_view/vision">{{$t('Common.Vision')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.Habit')}" @click="TitleChange($t('Common.Habit'))" to="/admin/main_view/habit_view">{{$t('Common.Habit')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.MindProgramming')}" @click="TitleChange($t('Common.MindProgramming'))" to="/admin/main_view/mind_programming">{{$t('Common.MindProgramming')}}</b-button>
            <b-button :class="{ 'btn-success': title == $t('Common.TeamBuilding')}" @click="TitleChange($t('Common.TeamBuilding'))" to="/admin/main_view/teambuilding_view">{{$t('Common.TeamBuilding')}}</b-button>
        </b-button-group>
    </b-list-group-item>
    <b-list-group-item>
        <h3 class="text-center">{{title}}</h3>
        <b-list-group-item>
            <router-view></router-view>
        </b-list-group-item>

    </b-list-group-item>

</div>
</template>

<script>
import Habit from './HabitView'
import {
    getterToken,
    getDataOfUsers,
    patchDataId,
    getMentors,
    getterMentors
} from '../assets/js/service'
export default {
    components: {
        Habit,

    },
    data() {
        return {
            mentorMessage:null,
            value: 2,
            title: '',
            selected: '',
            mentors: {},
            mentorName: '',
            user: {},
            Approved: '',
            profileImage: '',
            fullName: '',
            mentorId: '',
            sortedMentors: '',
            workBook: ''
        }
    },
    mounted() {
        let token = localStorage.getItem('token');
        let id = localStorage.getItem('userToView');
        getterMentors(token, 'mentor').then(resp => {
            console.log('mentros');

            this.mentors = resp.data;
            console.log(this.mentors)

            getDataOfUsers('users/', id, token).then(
                resp => {
                    this.user = resp;
                    this.mentorMessage = resp.data.mentorMessage;
                    this.fullName = resp.data.firstName + ' ' + resp.data.lastName;

                    this.mentorId = resp.data.mentorId;

                    this.workBook = resp.data.workBook;
                    this.profileImage = resp.data.profileImage;

                    let mentor = this.mentors.filter(mentor => mentor.id == resp.data.mentorId);
                    console.log("test")
                    console.log(resp.data);
                    this.mentorName = mentor[0].firstName + ' ' + mentor[0].lastName;
                    if (resp.data.Approved) {
                        console.log('user approved')
                        console.log(resp.data.Approved)
                        this.Approved = resp.data.Approved;
                        console.log(this.Approved)

                    }

                });
        });

        this.title = this.$i18n.t("Common.Vision")
        this.$router.replace('/admin/main_view')
    },
    methods: {
        TitleChange(title) {
            this.title = title
        },
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        sendMessage(){
            let dataBase = "users/";
            let token = localStorage.getItem("token");
            this.user.data.mentorMessage = this.mentorMessage;
            console.log(this.mentorMessage);
            console.log(this.user.data);
                        patchDataId(this.user.data.id, dataBase, token, this.user.data).then((resp => {
                    this.user = resp;

                    console.log("message");
                    console.log(resp);
                    this.makeToast("success", "You have successfully send your comment");

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

        approveUser() {
            let dataBase = "users/";
            let token = localStorage.getItem("token");
            console.log(this.user.data)
            this.user.data.Approved = true;

            patchDataId(this.user.data.id, dataBase, token, this.user.data).then((resp => {
                    this.user = resp;
                    this.Approved = resp.data.Approved;
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
        assigneMentor(type) {
            console.log('heree')
            let dataBase = "users/";
            let token = localStorage.getItem("token");
            let data = {};
            console.log(this.user);
            if (type == 'mentor') {
                console.log('heree')
                data = {
                    'mentorId': this.selected
                };
            } else if (type == 'workBook') {
                data = {
                    'workBook': this.workBook
                };
            }

            patchDataId(this.user.data.id, dataBase, token, data).then((resp => {
                    console.log(resp);
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

.Aligner {
    display: flex;
    align-items: center;
    justify-content: center;
}

.Aligner-item {
    max-width: 50%;
}

@media only screen and (max-width: 600px) {
    width {
        background-color: pink !important;
    }
}
</style>
