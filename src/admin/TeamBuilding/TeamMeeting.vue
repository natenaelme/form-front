<template>
<div>

    <h1>{{$t('Team_Meeting.TeamMeeting')}}
    </h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Team_Meeting.Detail") }}</small>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col>
                        <span>
                            <b-form inline>
                                {{ $t("Common.Date") + " : " }}
                                <div style="background-color:white">
                                    {{form.date}}
                                </div>
                            </b-form>
                        </span>

                    </b-col>
                    <b-col>
                        <span>
                            <b-form inline>
                                {{ $t("Common.Time") + " : "}}
                                <div style="background-color:white">
                                    {{form.time}}
                                </div>
                            </b-form>
                        </span>

                    </b-col>
                    <b-col>

                        <b-form inline>
                            <span>
                                {{ $t("Common.Venue") + " :"}}
                                <div style="background-color:white">
                                    {{form.venue}}
                                </div>

                            </span>
                        </b-form>

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Common.Participants") }}
            </b-list-group-item>
            <b-list-group-item>
                <b-col>
                    <div v-for="(item,index) in form.answerForq1" :key="index">
                        <div style="background-color:white">
                            {{form.answerForq1[index]}}
                        </div>
                        <br />
                    </div>

                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Team_Meeting.Header") }}
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Team_Meeting.Point1") }} <br>
                {{ $t("Team_Meeting.Point2") }} <br>
                {{ $t("Team_Meeting.Point3") }}<br>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Common.Assignments") }}
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>

                            <th scope="col">{{ $t("Common.Name") }}</th>
                            <th scope="col">{{ $t("Common.Assignments") }}</th>
                            <th scope="col">{{ $t("Common.Deadline") }}</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in form.answerForq2" :key="index">
                            <th>{{index + 1}}</th>

                            <td>
                                <div style="background-color:white">
                                    {{item.name}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{item.assignment}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{item.deadline}}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </b-list-group-item>
        </b-list-group>

    </b-container>

</div>
</template>

<script>
const {

    getUserData,

} = require('../../assets/js/service')

export default {
    components: {

    },
    data() {
        return {
            form: {
                answerForq1: [''],
                answerForq2: [{
                    name: '',
                    assignment: '',
                    deadline: '',
                }],
                venue: '',
                date: Date,
                time: '',

            },

        }
    },
    mounted: function () {
        let dataBase = '/teamMeetings';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
                console.log(resp);
                this.form = resp.data;

            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)

                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem")
                } else {
                    this.makeToast("danger", "Some Error has Happened")
                }
            })
    },
}
</script>

<style>

</style>
