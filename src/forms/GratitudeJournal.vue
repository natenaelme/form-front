<template>
<div>

    <HeaderFile :FirstHeader="$t('Gratitude_Journal.GratitudeJournal')" />
    <b-container cols="5">
        <b-list-group>
            <b-list-group-item>
                <small>{{$t('Gratitude_Journal.Detail')}}</small>
            </b-list-group-item>
            <b-list-group-item>

                <b-row>
                    <b-col md="6" v-for="item in 50" :key="item.message">
                        <b-row>

                            <b-col md="12">
                                <b-form-input id="input-2" style="font-size:12px" v-model="form.Daily_Rep[0][item - 1]" type="text" required :placeholder="`point `+item"></b-form-input>
                                <br>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-list-group-item>
        </b-list-group>
        <div class="position-relative row form-check">
            <div class="text-center">
                <button class="btn btn-primary" @click="saveForm()">Save </button><br>
                <div v-if="!show" class="lds-ripple">
                    <div></div>
                    <div></div>
                    loading..
                </div>
            </div><br>
        </div>
        <div class="text-center">
            <b-button to="/question/alpha_responsibility" variant="outline-success">
                <b-icon icon="arrow-left"></b-icon> back
            </b-button>
            <b-button :disabled="!submited" to="/question/gsystem_belief" variant="outline-success">
                <b-icon icon="arrow-right"></b-icon> Next
            </b-button>
        </div>
    </b-container>

</div>
</template>

<script>
import HeaderFile from '../containers/HeaderFile'

const {

    posts,
    getUserData,
    patchData
} = require('../assets/js/service')

export default {
    components: {
        HeaderFile
    },
    data() {
        return {
            form: {
                Daily_Rep: [{}],
                userId: localStorage.getItem("userId"),
            },
            show: true,
            submited: false,
            token: localStorage.getItem("token"),
            id: localStorage.getItem("userId"),
            edit: false,
        }
    },
    mounted: function () {
        let dataBase = '/gratitudeJournals';
        getUserData(dataBase, this.id, this.token).then(resp => {
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
        saveForm() {
            let dataBase = "/GratitudeJournals";
            this.show = false;
            console.log(this.show);
            if (this.edit) {
                patchData(dataBase, this.token, this.form).then(resp => {
                        console.log(resp);
                        this.makeToast("success", "success fully edited your form");
                        this.show = true;
                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            } else {
                posts(dataBase, this.form).then((resp) => {
                        console.log(resp.data);
                        this.edit = true;
                        this.form.Daily_Rep = [''];
                        this.submited = true;
                        this.$emit('changeTitle', 'habit');
                        this.makeToast("success", "success fully submited your form");
                        this.show = true;

                    })
                    .catch(err => {
                        if (err.response) {
                            // client received an error response (5xx, 4xx)
                            this.makeToast("danger", "There is a problem with your form")
                            this.show = true;
                        } else if (err.request) {
                            this.makeToast("danger", "Connection Problem")
                            this.show = true;
                        } else {
                            this.makeToast("danger", "Some Error has Happened")
                            this.show = true;
                        }
                    })
            }
        }

    },
}
</script>

<style lang="stylus" scoped>

</style>
