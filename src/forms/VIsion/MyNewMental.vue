<template>
<div>
    <HeaderFile :FirstHeader="$t('My_New_Mental.MyNewMental')" />
    <b-container cols="5">
        <strong>{{ $t("My_New_Mental.Instructions") }}</strong>
        <p>
            {{ $t("My_New_Mental.PleaseRead") }}
        </p>
        <p style="line-height: 2.5;">
            {{
          $t("My_New_Mental.I") +
            " " +
            fullname +
            " " +
            $t("My_New_Mental.Agree") 
        }}
            <input type="date" v-model="form.Date" class="form p-input" style="width:150px" />
            {{ $t("My_New_Mental.ToRewrite") }}
            <input type="text" style="width:150px" v-model="form.PerHour" class="p-input" id="usr" />
            {{ $t("My_New_Mental.PerHour") }}
        </p>
        <b-list-group-item class="tabel-responsive">

            <table class="table">
                <thead>
                    <tr>
                        <th class="col-4" style="width: 50%;">{{ $t("My_New_Mental.Value") }}</th>
                        <th scope="col">{{ $t("My_New_Mental.Hourly") }}</th>
                        <th scope="col">{{ $t("My_New_Mental.Flat") }}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in form.answer1" :key="index">
                        <th>
                            <b-form-input id="input-1" class="normalInput" style="font-size:12px" v-model="form.answer1[index].ValueEvents" type="text" required placeholder=""></b-form-input>
                        </th>
                        
                        <th>
                            <b-form-input id="input-1" :disabled="form.answer1[index].FlatRate != ''" class="normalInput" style="font-size:12px" v-model="form.answer1[index].HourlyRate" type="number" required placeholder=""></b-form-input>
                        </th>
                        <th>
                            <b-form-input id="input-1" :disabled="form.answer1[index].HourlyRate != ''" class="normalInput" style="font-size:12px" v-model="form.answer1[index].FlatRate" type="number" required placeholder=""></b-form-input>
                        </th>

                    </tr>
                </tbody>
            </table>
            <b-col style="text-align:right;padding:0 !important">
                <b-button variant="danger" v-on:click="form.answer1.push({                                        
                    ValueEvents: '',
                    HourlyRate: '',
                    FlatRate: ''})">+</b-button>
            </b-col>
        </b-list-group-item>
        <br>

        <strong>{{ $t("My_New_Mental.Example") }}</strong>
        <p>{{$t("My_New_Mental.Present")}}</p>
       
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
                <b-button to="/question/action_plan" variant="outline-success">
                    <b-icon icon="arrow-left"></b-icon> back
                </b-button>
                <b-button :disabled="!submited" to="/question/mental_bank" variant="outline-success">
                    Next<b-icon icon="arrow-right"></b-icon>
                </b-button>

            </div>

        </div>

    </b-container>

</div>
</template>

<script>
import
HeaderFile
from "../../containers/HeaderFile";
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

        let dataBase = '/myNewMentals';
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
                PerHour: '',
                Date: '',
                answer1: [{
                    ValueEvents: '',
                    HourlyRate: '',
                    FlatRate: ''
                }],
                answer2: '',
                answer3: [{
                    ValueEvents: '',
                    HourlyRate: '',
                    FlatRate: ''
                }],
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            fullname: localStorage.getItem("fullName"),
        };
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
            let dataBase = "/myNewMentals";
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
                        this.form.PerHour = '';
                        this.form.Date = '';
                        this.form.answer1 = [{
                            ValueEvents: '',
                            HourlyRate: '',
                            FlatRate: ''
                        }];
                        this.form.answer2 = '';
                        this.form.answer3 = [{
                                ValueEvents: '',
                                HourlyRate: '',
                                FlatRate: ''
                            }],
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

};
</script>

<style>
.p-input {
    width: 150px;
    /* display: block; */
    /* width: 100%; */
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
}

.normalInput {
    width: 100% !important;
}
</style>
