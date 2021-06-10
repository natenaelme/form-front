<template>
<div>

    <HeaderFile :FirstHeader="$t('Silence_Time.SilenceTime')" />

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{ $t("Silence_Time.Detail") }}</small>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col md="2">
                        {{ $t("Silence_Time.1stQuestion") }}

                    </b-col>
                    <b-col md="10">
                        <div style="background-color:white">
                            {{form.answerForq1}}
                        </div>
                    </b-col>
                </b-row>

                <div>

                </div>
            </b-list-group-item>
            <b-list-group-item class="text-center">
                <strong>{{ $t("Silence_Time.2ndQuestion") }}</strong>

            </b-list-group-item>
            <b-list-group-item>
                <div style="background-color:white">
                    {{form.answerForq2}}
                </div>
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Silence_Time.3ndQuestion") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <img :src="form.goalImage" width=100% class="tumbline" alt="">
            </b-list-group-item>
            <b-list-group-item>
                <strong>{{ $t("Silence_Time.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ $t("Common.Date") }}</th>
                            <th scope="col">{{ $t("Common.Visual") }}</th>
                            <th scope="col">{{ $t("Common.Gratitude") }}</th>
                            <th scope="col">{{ $t("Common.MentalBank") }}</th>
                            <th scope="col">{{ $t("Common.Remarks") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(day,index) in form.answerForq3" :key="index">
                            <th>{{index+1}}</th>
                            <td style="background-color:white">
                                <div>
                                    {{day.date}}

                                </div>
                            </td>
                            <td style="background-color:white">
                                {{day.visual}}
                            </td>
                            <td style="background-color:white">
                                {{day.gratitude}}
                            </td>
                            <td style="background-color:white">
                                {{day.mentalBank}}
                            </td>
                            <td style="background-color:white">
                                {{day.remarks}}
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
    name: "SilenceTime",
    components: {

    },
    data() {
        return {
            form: {
                answerForq1: "",
                answerForq2: "",
                answerForq3: [{
                    date: "",
                    visual: "",
                    gratitude: "",
                    mentalBank: "",
                    remarks: ""
                }],
                goalImage: "",

            },

        }

    },
    mounted: function () {
        let dataBase = '/silenceTimes';
        getUserData(dataBase, localStorage.getItem("userToView"), localStorage.getItem("token")).then(resp => {
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
    }

}
</script>

<style lang="stylus">

</style>
