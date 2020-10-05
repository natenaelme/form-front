<template>
<div>
    <HeaderFile :FirstHeader="$t('My_Life_Purpose.MyLifePurpose')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col md=3>
                        {{$t('My_Life_Purpose.Year')}}
                    </b-col>
                    <b-col md=9>
                        {{$t('My_Life_Purpose.MajorEvent')}}
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row v-for="(item,index) in form.history" :key="index">
                    <b-col md='3'>
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.history[index].year" type="number" required placeholder=""></b-form-input>

                    </b-col>
                    <b-col md='9'>
                        <b-form-input id="input-1" style="font-size:12px" v-model="form.history[index].majorEvent" type="text" required placeholder=""></b-form-input>
                        <br>
                    </b-col>
                </b-row>
                <b-col style="text-align:right;padding:0 !important">
                    <b-button variant="danger" v-on:click="form.history.push(
                        {year: null,
                    majorEvent: ''})">+</b-button>
                </b-col>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyPurpose')}}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea1" v-model="form.myPurpose" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyMission')}}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea1" v-model="form.myMission" placeholder="" rows="6" max-rows="6"></b-form-textarea>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{$t('My_Life_Purpose.MyLifePrinciple')}}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-form-textarea id="textarea1" v-model="form.myLifePrinciple" placeholder="" rows="6" max-rows="6"></b-form-textarea>
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
                <b-button to="/question/personal_information" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/my_dream" variant="outline-success">
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
    patchData
} = require('../../assets/js/service')
export default {
    components: {
        HeaderFile
    },
    data() {
        return {
            form: {
                history: [{
                    year: Number,
                    majorEvent: ''
                }],
                myPurpose: '',
                myMission: '',
                myLifePrinciple: '',
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
        }
    },
    mounted: function () {

        let dataBase = '/myLives';
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
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        saveForm() {
            this.show = false;
            let dataBase = "/myLives";
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
                        this.form.history = [{
                            year: Number,
                            majorEvent: ''
                        }];
                        this.form.myPurpose = '';
                        this.form.myMission = '';
                        this.form.myLifePrinciple = '';
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

<style lang="stylus" scoped>

</style>
