<template>
<div>
    <h1>{{$t('My_House.MyHouse')}}</h1>
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{ $t("My_House.Kind") }}
                    </b-col>
                    <b-col sm=9 style="background-color:white">
                        {{form.Kind}}

                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col sm=3>
                        {{ $t("My_House.CompoundSize") }}
                    </b-col>
                    <b-col sm=9 style="background-color:white">
                        {{form.CompoundSize}}
                        <br>
                        <br>
                    </b-col>
                </b-row>
                <b-col>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("My_House.SizeOfTheHouse") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.SizeOfTheHouse}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("My_House.NumberOfRooms") }}
                            </b-col>
                            <b-col sm=9 style="background-color:white">
                                {{form.NumberOfRooms}}

                            </b-col>
                        </b-row>
                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm="12">
                                {{ $t("My_House.KindsOfRooms") }}
                            </b-col>
                            <b-col sm="4" style="background-color:white" v-for="(item,index) in form.KindsOfRooms" :key="index">
                                {{form.KindsOfRooms[index]}}

                            </b-col>
                        </b-row>

                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm="12">
                                {{ $t("My_House.InTheCompound") }}
                            </b-col>
                            <b-col sm="4" style="background-color:white" v-for="(item,index) in form.InTheCompound" :key="index">
                                {{form.InTheCompound[index]}}

                            </b-col>
                        </b-row>

                    </b-list-group-item>
                    <b-list-group-item>
                        <b-row>
                            <b-col sm=3>
                                {{ $t("My_House.YearToAchieve") }}
                            </b-col>
                            <b-col sm=9>
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
                            <img :src="form.PictureOfTheHouse" width=100% class="tumbline" alt="">
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
    data() {
        return {
            form: {
                Kind: '',
                CompoundSize: '',
                SizeOfTheHouse: '',
                NumberOfRooms: '',
                KindsOfRooms: [''],
                InTheCompound: [''],
                YearToAchieve: '',
                EstimatedCost: '',
                PictureOfTheHouse: '',

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

        let dataBase = '/myHouses';
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
