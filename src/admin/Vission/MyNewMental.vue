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
            {{form.Date + " "}}
            {{ $t("My_New_Mental.ToRewrite") }}
            {{form.PerHour + " "}}
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
                        <th style="background-color:white">
                            {{form.answer1[index].ValueEvents}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer1[index].HourlyRate}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer1[index].FlatRate}}
                        </th>

                    </tr>
                </tbody>
            </table>

        </b-list-group-item>
        <br>

        <strong>{{ $t("My_New_Mental.Example") }}</strong>
        <p>{{$t("My_New_Mental.Present")}}</p>
        <div style="background-color:white"> {{form.answer2}} </div>
        <br>
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
                    <tr v-for="(item,index) in form.answer3" :key="index">
                        <th style="background-color:white">
                            {{form.answer3[index].ValueEvents}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer3[index].HourlyRate}}
                        </th>
                        <th style="background-color:white">
                            {{form.answer3[index].FlatRate}}
                        </th>

                    </tr>
                </tbody>
            </table>

        </b-list-group-item>

    </b-container>

</div>
</template>

<script>
const {

    getUserData,

} = require("../../assets/js/service");
export default {
    components: {

    },
    mounted: function () {

        let dataBase = '/myNewMentals';
        getUserData(dataBase, localStorage.getItem("userToView"), this.token).then(resp => {
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
            fullname: localStorage.getItem("userFullName"),
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
