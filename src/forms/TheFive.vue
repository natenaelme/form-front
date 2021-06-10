<template>
<div>

    <HeaderFile :FirstHeader="$t('The_Five.TheFive')" />
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
                        <b-form-textarea id="textarea4" v-model="form.skill1.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="4">{{ $t("The_Five.1stQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.skill1.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="4">{{ $t("The_Five.1stQuestion.subQuestion3") }}
                        <b-form-textarea id="textarea4" v-model="form.skill1.subAnswer3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
                        <b-form-textarea id="textarea4" v-model="form.skill2.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.familyMember.focusOn" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.familyMember.practiceEye" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.familyMember.writeDown" type="text" required placeholder=""></b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("The_Five.3rdQuestion.Friend") }}</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.friend.focusOn" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.friend.practiceEye" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.friend.writeDown" type="text" required placeholder=""></b-form-input>
                            </td>
                        </tr>
                        <tr>
                            <th>{{ $t("The_Five.3rdQuestion.Workmate") }}</th>
                            <td>
                                <div>
                                    <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.workmate.focusOn" type="text" required placeholder=""></b-form-input>
                                </div>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.workmate.practiceEye" type="text" required placeholder=""></b-form-input>
                            </td>
                            <td>
                                <b-form-input id="input-1" style="font-size:12px" v-model="form.skill3.workmate.writeDown" type="text" required placeholder=""></b-form-input>
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
                        <b-form-textarea id="textarea4" v-model="form.skill4.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.skill4.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion3") }}
                        <b-form-textarea id="textarea4" v-model="form.skill4.subAnswer3" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col md="3">{{ $t("The_Five.4thQuestion.subQuestion4") }}
                        <b-form-textarea id="textarea4" v-model="form.skill4.subAnswer4" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
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
                        <b-form-textarea id="textarea4" v-model="form.skill5.subAnswer1" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>
                    <b-col sm="6">{{ $t("The_Five.5thQuestion.subQuestion2") }}
                        <b-form-textarea id="textarea4" v-model="form.skill5.subAnswer2" placeholder="Enter something..." rows="4" max-rows="6"></b-form-textarea>
                    </b-col>

                </b-row>

            </b-list-group-item>
        </b-list-group>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save </button><br>
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div><br>
        </div>
        <div class="text-center">
            <b-button to="/question/four_attributes" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/main" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../containers/HeaderFile'
const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')
export default {
    components: {
        HeaderFile
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
                userId: localStorage.getItem("userId"),
            },

            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/theFives';
        getUserData(dataBase, this.id, this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
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
        saveForm() {
            let dataBase = "/TheFives";
            this.show = false;
            console.log(this.show);
            if (this.edit) {
                patchData(dataBase, this.token, this.form).then(resp => {
                        console.log(resp);
                        this.makeToast("success", "success fully edited your form");
                        this.show = true;
                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            } else {
                posts(dataBase, this.form).then((resp) => {
                        console.log(resp.data);
                        this.edit = true;
                        this.form.skill1 = {
                            subAnswer1: '',
                            subAnswer2: '',
                            subAnswer3: '',

                        };
                        this.form.skill2 = {
                            subAnswer1: '',

                        };
                        this.form.skill3 = {
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

                        };
                        this.form.skill4 = {
                            subAnswer1: '',
                            subAnswer2: '',
                            subAnswer3: '',
                            subAnswer4: '',

                        };
                        this.form.skill5 = {
                            subAnswer1: '',
                            subAnswer2: '',

                        };
                        this.submited = true;
                        this.$emit('changeTitle', 'teamBuilding');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            }
        }

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
