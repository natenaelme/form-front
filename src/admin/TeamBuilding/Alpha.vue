<template>
<div>
    <h1>{{$t('Alpha.Alpha')}}</h1>
    <b-container cols="5">

        <div v-for="(item, index) in form.answerForq1" :key="index">
            <b-list-group>
                <b-list-group-item>
                    <b-form inline>
                        <span>
                            {{ $t("Alpha.Dear") + " :"}}
                            <div style="background-color:white">
                                {{form.answerForq1[index].name}}
                            </div>

                        </span>

                    </b-form>
                </b-list-group-item>
                <b-list-group-item>
                    <strong>{{$t('Alpha.Like')}}</strong>

                </b-list-group-item>
                <b-list-group-item>
                    <div style="background-color:white">
                        {{form.answerForq1[index].whyLike}}
                    </div>
                </b-list-group-item>
            </b-list-group><br>
        </div>

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
                answerForq1: [{
                    name: '',
                    whyLike: ''
                }],

            },

        }
    },
    mounted: function () {
        let dataBase = '/alphas';
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
