<template>
<div>
    <h1>{{$t('Physical.Physical')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <strong>{{ $t("Physical.Header") }}</strong>
                <b-col md=9 style="background-color:white">
                        {{form.Title}}

                    </b-col>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{ $t("Spirtual.People") }}
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
                                {{ $t("Physical.Depth") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.PhysicalLife}}

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
                                    <th>{{ $t("Physical.PhysicalEvent") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.InEvent") }}</th>
                                    <th scope="col">{{ $t("Socal_Dream.HowOften") }}</th>
                                    <th scope="col">{{ $t("My_House.EstimatedCost") }}</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in form.KindOfPhysical" :key="index">
                                    <th>
                                        {{form.KindOfPhysical[index].Event}}
                                    </th>
                                    <th>
                                        {{form.KindOfPhysical[index].InTheevent}}
                                    </th>
                                    <th>
                                        {{form.KindOfPhysical[index].HowOften}}
                                    </th>
                                    <th>
                                        {{form.KindOfPhysical[index].Cost}}
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
                            <img :src="form.PictureOfPhysical" width=100% class="tumbline" alt="">
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
    mounted: function () {

        let dataBase = '/physicals';
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
                People: '',
                Place: '',
                Country: '',
                PhysicalLife: '',
                HowOften: '',
                KindOfPhysical: [{
                    Event: '',
                    InTheevent: '',
                    HowOften: '',
                    Cost: ''
                }],

                YearToAchieve: '',
                EstimatedCost: '',
                PictureOfPhysical: '',

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

<style lang="stylus" scoped>

</style>
