<template>
<div>
    <h1>{{$t('Socal_Dream.SocalDream')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <strong>{{ $t("Socal_Dream.Header") }}</strong>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{ $t("Socal_Dream.People") }}
                    </b-col>
                    <b-col sm=9 style="background-color:white">
                        {{form.People}}

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{ $t("Socal_Dream.Place") }}
                    </b-col>
                    <b-col sm=9 style="background-color:white">
                        {{form.Place}}
                        <br>
                        <br>
                    </b-col>
                </b-row>
                <b-col>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("Socal_Dream.Country") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.Country}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("Socal_Dream.SocalLife") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.SocalLife}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("Socal_Dream.HowOften") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.HowOften}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>

                    <!--tabel-->
                    <b-list-group-item class="tabel-responsive">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th>{{ $t("Socal_Dream.Kinds") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.InEvent") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.HowOften") }}</th>
                                    <th scope="col">{{ $t("My_House.EstimatedCost") }}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in form.KindsOfSocal" :key="index">
                                    <th style="background-color:white">
                                        {{form.KindsOfSocal[index].Event}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.KindsOfSocal[index].InTheevent}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.KindsOfSocal[index].HowOften}}
                                    </th>
                                    <th style="background-color:white">
                                        {{form.KindsOfSocal[index].Cost}}
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                    </b-list-group-item>

                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("My_House.YearToAchieve") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.YearToAchieve}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("My_House.EstimatedCost") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.EstimatedCost}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <div class="col-sm-12">
                            <img :src="form.PictureOfSocal" width=100% class="tumbline" alt="">
                        </div>
                    </b-list-group-item>

                    <b-list-group-item><strong>{{ $t("My_House.Starting") }}</strong>
                        <b-list-group-item class="table-responsive">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th scope="col">{{ $t("My_House.Action") }}</th>
                                        <th scope="col">{{ $t("My_House.Cost") }}</th>
                                        <th scope="col">{{ $t("My_House.Time") }}</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.1staction") }}</th>

                                        <td style="background-color:white">
                                            {{form.Ans1.action}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans1.cost}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans1.time}}
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.2ndaction") }}</th>

                                        <td style="background-color:white">
                                            {{form.Ans2.action}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans2.cost}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans2.time}}
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.3rdaction") }}</th>

                                        <td style="background-color:white">
                                            {{form.Ans3.action}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans3.cost}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans3.time}}
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.4thaction") }}</th>

                                        <td style="background-color:white">
                                            {{form.Ans4.action}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans4.cost}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans4.time}}
                                        </td>

                                    </tr>
                                    <tr>
                                        <th scope="col">{{ $t("My_House.5thaction") }}</th>

                                        <td style="background-color:white">
                                            {{form.Ans5.action}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans5.cost}}
                                        </td>
                                        <td style="background-color:white">
                                            {{form.Ans5.time}}
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </b-list-group-item>
                    </b-list-group-item>
                </b-col>
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
    mounted() {
        console.log("test")
    },
    data() {
        return {
            form: {
                People: '',
                Place: '',
                Country: '',
                SocalLife: '',
                HowOften: '',
                KindsOfSocal: [{
                    Event: '',
                    InTheevent: '',
                    HowOften: '',
                    Cost: ''
                }],

                YearToAchieve: '',
                EstimatedCost: '',
                PictureOfSocal: '',

                Ans1: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans2: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans3: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans4: {
                    action: '',
                    cost: '',
                    time: ''
                },
                Ans5: {
                    action: '',
                    cost: '',
                    time: ''
                },
                userId: localStorage.getItem("userId")

            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            imageuploaded: true,

        }
    },
    mounted: function () {

        let dataBase = '/socalDreams';
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

    }
}
</script>

<style lang="stylus" scoped>

</style>
