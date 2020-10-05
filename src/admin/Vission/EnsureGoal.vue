<template>
<div>
    <h1>{{$t('Ensure_The_Goal.EnsureTheGoal')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item class="table-responsive">

                <table class="table ">

                    <tbody>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorLong')}}
                            </th>
                            <th style="width:20%; background-color:white" class="align-middle">
                                <p v-if="form.MajorLong">{{form.MajorLong}}
                                </p>
                            </th>

                        </tr>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorMid')}}
                            </th>
                            <th style="width:20%;background-color:white" class="align-middle">
                                <p v-if="form.MajorMid">{{form.MajorMid}}
                                </p>
                            </th>

                        </tr>
                        <tr>
                            <th style="width:20%" class="align-middle">
                                {{$t('Ensure_The_Goal.MajorShort')}}
                            </th>
                            <th style="width:20%; background-color:white" class="align-middle">
                                <p v-if="form.MajorShort">{{form.MajorShort}}
                                </p>
                            </th>

                        </tr>

                    </tbody>
                </table>

            </b-list-group-item>
            <b-list-group-item v-for="index in 9" :key="index">
                {{$t('Ensure_The_Goal.'+index)}}
            </b-list-group-item>
        </b-list-group>

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

        let dataBase = '/ensureGoals';
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
                title: variant,
                variant: variant,
                solid: true
            })
        },

    }

}
</script>

<style>
.align-middle {
    font-weight: normal !important;
}
</style>
