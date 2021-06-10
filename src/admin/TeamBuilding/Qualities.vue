<template>
<div>

    <h1>{{$t('Qualities.Qualities')}}</h1>

    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Positional") }}</th>
                        </tr>
                        <td :rowspan="form.positionalLeader.length + 1">
                            <div style="background-color:white">
                                {{form.positionalLeader[form.positionalLeader.length -1].name}}
                            </div>

                        </td>

                        <tr v-for="(item, index) in form.positionalLeader" :key="index">
                            <td>
                                <div style="background-color:white">
                                    {{form.positionalLeader[index].quality}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.positionalLeader[index].activity}}
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Permision") }}</th>
                        </tr>
                        <td :rowspan="form.permisionLeader.length + 1">
                            <div style="background-color:white">
                                {{form.permisionLeader[form.permisionLeader.length -1].name}}
                            </div>

                        </td>

                        <tr v-for="(item, index) in form.permisionLeader" :key="index">
                            <td>
                                <div style="background-color:white">
                                    {{form.permisionLeader[index].quality}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.permisionLeader[index].activity}}
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Production") }}</th>
                        </tr>
                        <td :rowspan="form.productionLeader.length + 1">
                            <div style="background-color:white">
                                {{form.productionLeader[form.productionLeader.length -1].name}}
                            </div>

                        </td>

                        <tr v-for="(item, index) in form.productionLeader" :key="index">
                            <td>
                                <div style="background-color:white">
                                    {{form.productionLeader[index].quality}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.productionLeader[index].activity}}
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.People") }}</th>
                        </tr>
                        <td :rowspan="form.peopleDevelopment.length + 1">
                            <div style="background-color:white">
                                {{form.peopleDevelopment[form.peopleDevelopment.length -1].name}}
                            </div>

                        </td>

                        <tr v-for="(item, index) in form.peopleDevelopment" :key="index">
                            <td>
                                <div style="background-color:white">
                                    {{form.peopleDevelopment[index].quality}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.peopleDevelopment[index].activity}}
                                </div>

                            </td>
                        </tr>

                    </tbody>
                </table>
            </b-list-group-item>
            <b-list-group-item>
                <table class="table">

                    <thead>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Leadership") }}</th>
                            <th scope="col">{{ $t("Common.Quality") }}</th>
                            <th scope="col">{{ $t("Common.Activity") }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="col">{{ $t("Qualities.Personhood") }}</th>
                        </tr>
                        <td :rowspan="form.personhood.length + 1">
                            <div style="background-color:white">
                                {{form.personhood[form.personhood.length -1].name}}
                            </div>

                        </td>

                        <tr v-for="(item, index) in form.personhood" :key="index">
                            <td>
                                <div style="background-color:white">
                                    {{form.personhood[index].quality}}
                                </div>

                            </td>
                            <td>
                                <div style="background-color:white">
                                    {{form.personhood[index].activity}}
                                </div>

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
    components: {

    },
    data() {
        return {
            form: {
                positionalLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                permisionLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                productionLeader: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                peopleDevelopment: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],
                personhood: [{
                    name: "",
                    quality: "",
                    activity: "",
                }, ],

            },

        };
    },
    mounted: function () {
        let dataBase = '/qualities';
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
};
</script>
