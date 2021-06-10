<template>
<div>
    <HeaderFile :FirstHeader="$t('Ensure_The_Goal.EnsureTheGoal')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item class="table-responsive">

                <table class="table ">

                    <tbody>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorLong')}}
                            </th>
                            <th style="width:20%" class="align-middle">
                                <p v-if="form.MajorLong">{{form.MajorLong}}
                                </p>
                            </th>

                            <th class="align-middle" v-for="index in 9" :key="index">

                                <b-form-checkbox v-model="form.MajorLong" :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>

                            </th>

                        </tr>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorMid')}}
                            </th>
                            <th style="width:20%" class="align-middle">
                                <p v-if="form.MajorMid">{{form.MajorMid}}
                                </p>
                            </th>

                            <th class="align-middle" v-for="index in 9" :key="index">

                                <b-form-checkbox v-model="form.MajorMid" :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>

                            </th>

                        </tr>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorShort')}}
                            </th>
                            <th style="width:20%" class="align-middle">
                                <p v-if="form.MajorShort">{{form.MajorShort}}
                                </p>
                            </th>

                            <th class="align-middle" v-for="index in 9" :key="index">

                                <b-form-checkbox v-model="form.MajorShort" :value="$t('Ensure_The_Goal.'+index)">{{index}}</b-form-checkbox>

                            </th>

                        </tr>

                    </tbody>
                </table>

            </b-list-group-item>
            <b-list-group-item v-for="index in 9" :key="index">
                {{$t('Ensure_The_Goal.'+index)}}
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
            <div class="text-center">
                <b-button to="/question/mental_goal" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/action_plan" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../../containers/HeaderFile';
const {
    posts,
    getUserData,
    patchData,
    getUrl
} = require("../../assets/js/service");
export default {
    components: {
        HeaderFile
    },
    mounted: function () {

        let dataBase = '/ensureGoals';
        getUserData(dataBase, this.id, this.token).then(resp => {
                console.log(resp);
                this.form = resp.data;
                this.edit = true;
                this.submited = true;
            })
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    // this.makeToast("", "Wellcome")
                } else if (err.request) {
                    this.makeToast("danger", "Connection Problem")
                } else {
                    this.makeToast("danger", "Some Error has Happened")
                }
            })
    },
    data() {
        return {
            form: {
                MajorLong: '',
                MajorMid: '',
                MajorShort: '',
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
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
            this.show = false;
            let dataBase = "/ensureGoals";
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
                        this.form.MajorLong = '';
                        this.form.MajorMid = '';
                        this.form.MajorShort = '';
                        this.submited = true;
                        this.$emit('changeTitle', 'vision');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    }, )
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

    }

}
</script>

<style>
.align-middle {
    font-weight: normal !important;
}
</style>
