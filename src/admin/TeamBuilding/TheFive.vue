<template>
<div>

    <h1>{{$t('The_Five.TheFive')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("The_Five.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("The_Five.1stQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="4">
                        {{ $t("The_Five.1stQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.skill1.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col sm="4">{{ $t("The_Five.1stQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.skill1.subAnswer2}}
                        </div>
                    </b-col>
                    <b-col sm="4">{{ $t("The_Five.1stQuestion.subQuestion3") }}
                        <div style="background-color:white">
                            {{form.skill1.subAnswer3}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("The_Five.2ndQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="12">
                        {{ $t("The_Five.2ndQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.skill2.subAnswer1}}
                        </div>
                    </b-col>

                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("The_Five.3rdQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table table-responsive">
                    <thead>
                        <tr>
                            <th scope="col">
                                <div class="text">{{ $t("The_Five.3rdQuestion.PracticeOn") }}</div>
                            </th>
                            <th scope="col">
                                <div class="text">{{ $t("The_Five.3rdQuestion.FocusOn") }}</div>
                            </th>
                            <th scope="col">
                                <div class="text">{{ $t("The_Five.3rdQuestion.PracticeEye") }}</div>
                            </th>
                            <th scope="col">
                                <div class="text">{{ $t("The_Five.3rdQuestion.WriteDown") }}</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{{ $t("The_Five.3rdQuestion.FamilyMember") }}</th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{form.skill3.familyMember.focusOn}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.familyMember.practiceEye}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.familyMember.writeDown}}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("The_Five.3rdQuestion.Friend") }}</th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{form.skill3.friend.focusOn}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.friend.practiceEye}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.friend.writeDown}}
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("The_Five.3rdQuestion.Workmate") }}</th>
                            <td>
                                <div>
                                    <div style="background-color:white">
                                        {{form.skill3.workmate.focusOn}}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.workmate.practiceEye}}
                                </div>
                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.skill3.workmate.writeDown}}
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("The_Five.4thQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="3">
                        {{ $t("The_Five.4thQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.skill4.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.skill4.subAnswer2}}
                        </div>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion3") }}
                        <div style="background-color:white">
                            {{form.skill4.subAnswer3}}
                        </div>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion4") }}
                        <div style="background-color:white">
                            {{form.skill4.subAnswer4}}
                        </div>
                    </b-col>
                </b-row>

            </b-list-group-item>

            <b-list-group-item class="text-center">
                <strong>{{ $t("The_Five.5thQuestion.main") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm="6">
                        {{ $t("The_Five.5thQuestion.subQuestion1") }}
                        <div style="background-color:white">
                            {{form.skill5.subAnswer1}}
                        </div>
                    </b-col>
                    <b-col sm="6">{{ $t("The_Five.5thQuestion.subQuestion2") }}
                        <div style="background-color:white">
                            {{form.skill5.subAnswer2}}
                        </div>
                    </b-col>

                </b-row>

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
                skill1: {
                    subAnswer1: '',
                    subAnswer2: '',
                    subAnswer3: '',

                },
                skill2: {
                    subAnswer1: '',

                },
                skill3: {
                    familyMember: {
                        focusOn: '',
                        practiceEye: '',
                        writeDown: ''
                    },
                    friend: {
                        focusOn: '',
                        practiceEye: '',
                        writeDown: ''
                    },
                    workmate: {
                        focusOn: '',
                        practiceEye: '',
                        writeDown: ''
                    },

                },
                skill4: {
                    subAnswer1: '',
                    subAnswer2: '',
                    subAnswer3: '',
                    subAnswer4: '',

                },
                skill5: {
                    subAnswer1: '',
                    subAnswer2: '',

                },

            },

        }
    },
    mounted: function () {
        let dataBase = '/theFives';
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
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: "Error",
                variant: variant,
                solid: true
            })
        },

    },
}
</script>

<style>
.module {
    overflow: hidden;
    white-space: normal;
    height: 1.2em;
    /* exactly 2 lines */
    text-overflow: -o-ellipsis-lastline;
}
</style>
