<template>
<div>
    <h1>{{$t('Use_Postive.UsePostive')}}</h1>
    <b-container cols="5">
        <b-list-group>

            <b-list-group-item>
                {{ $t("Use_Postive.DreamFamily") }}
                <div style="background-color:white"> {{form.DreamFamily}}</div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamSpiritual") }}
                <div style="background-color:white">{{form.DreamSpiritual}}</div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamSocal") }}
                <div style="background-color:white"> {{form.DreamSocal}}</div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamHealth") }}
                <div style="background-color:white"> {{form.DreamHealth}}</div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamLife") }}
                <div style="background-color:white"> {{form.DreamLife}}</div>
            </b-list-group-item>
            <b-list-group-item>
                {{ $t("Use_Postive.DreamKnowledge") }}
                <div style="background-color:white">{{form.DreamKnowledge}}</div>
            </b-list-group-item>

            <b-list-group-item>
                {{ $t("Use_Postive.DreamFinancial") }}
                <div style="background-color:white">{{form.DreamFinancial}}</div>
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

        let dataBase = '/usePosetives';
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
                DreamFamily: '',
                DreamSpiritual: '',
                DreamSocal: '',
                DreamLife: '',
                DreamHealth: '',
                DreamKnowledge: '',
                DreamFinancial: '',
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

<style lang="stylus" scoped>

</style>
