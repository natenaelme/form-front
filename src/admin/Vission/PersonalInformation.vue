<template>
<div>
    <h1>{{$t('Personal_Information.PersonalInformation')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col>
                        {{ $t("Personal_Information.FullName") }}
                    </b-col>
                    <b-col>
                        {{fullName}}
                    </b-col>
                </b-row>
            </b-list-group-item>

            <div v-for="item in inputToLoop" :key="item">
                <b-list-group-item>
                    <b-row>
                        <b-col>
                            {{ $t("Personal_Information."+item) }}
                        </b-col>
                        <b-col style="background-color:white">
                            {{form[item]}}

                        </b-col>
                    </b-row>
                </b-list-group-item>
            </div>

            <b-list-group-item>
                <b-row>
                    <b-col md="12">
                        {{ $t("Personal_Information.Countries") }}
                    </b-col>
                    <b-col md="4" style="background-color:white" v-for="(item,index) in form.Countries" :key="index">
                        {{form.Countries[index]}}

                    </b-col>
                </b-row>

            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm='2' v-for="item in buttonsToLoop" :key="item">
                        <b-button style="margin-bottom:10px" :class="{ 'btn-success': form[item]}">{{ $t("Personal_Information."+item) }}</b-button>

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
            fullName: localStorage.getItem('userFullName'),
            form: {

                Age: "",
                Height: "",
                Address: "",
                POBox: "",
                Fax: "",
                PassportNo: "",
                BloodType: "",
                Hobby: "",
                Gender: "",
                Education: "",
                Weight: "",
                Tel: "",
                Web: "",
                DriverLNo: "",
                InsuranceNo: "",
                BankBookNo: "",
                Talent: "",
                Countries: [""],
                blessed: false,
                great: false,
                amazing: false,
                love: false,
                peace: false,
                powerful: false,
                joy: false,
                focused: false,
                believer: false,
                persistent: false,
                consisten: false,
                positive: false,
                healthy: false,
                wealth: false,
                genuine: false,
                visionary: false,
                organized: false,
                strong: false,
                couragious: false,
                attractive: false,
                giver: false,
                active: false,
                forgiving: false,
                userId: localStorage.getItem("userId")
            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            inputToLoop: [
                'Age',
                'Height',
                'Address',
                'POBox',
                'Fax',
                'PassportNo',
                'BloodType',
                'Hobby',
                'Gender',
                'Education',
                'Weight',
                'Tel',
                'Web',
                'DriverLNo',
                'InsuranceNo',
                'BankBookNo',
                'Talent',
            ],
            buttonsToLoop: [
                'blessed',
                'great',
                'amazing',
                'love',
                'peace',
                'powerful',
                'joy',
                'focused',
                'believer',
                'persistent',
                'consisten',
                'positive',
                'healthy',
                'wealth',
                'genuine',
                'visionary',
                'organized',
                'strong',
                'couragious',
                'attractive',
                'giver',
                'active',
                'forgiving'
            ]
        }

    },
    mounted: function () {

        let dataBase = '/personalInformations';
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
    methods: {
        makeToast(variant, message) {
            this.$bvToast.toast(message, {
                title: variant,
                variant: variant,
                solid: true
            })
        },
        changeValue(value) {
            console.log(value);
            let form = this.form;
            console.log(form[value])
        }

    }

}
</script>

<style lang="stylus" scoped>

</style>
