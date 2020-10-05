<template>
<div>
    <label for="select"><strong>Select Pages</strong> </label>
    <b-form-select v-model="selected" id="select" @change="routeToComponent()" :options="Habit" size="sm" class="mt-3">

    </b-form-select>
    <div class="position-relative row form-check">
        <div class="text-center">

            <div v-if="!show" class="lds-ripple">
                <div></div>
                <div></div>
                loading..
            </div>
        </div><br>
    </div>
    <router-view></router-view>

</div>
</template>

<script>
export default {
    data() {
        return {
            show: true,
            selected: '',
            Habit: [
                // {
                //     value: null,
                //     text: this.$i18n.t("Common.Selectpage"),
                // },
                {
                    value: "alpha_belief",
                    text: this.$i18n.t("Alpha_Belief.AlphaBelief"),

                },
                {
                    value: "mental_transformation",
                    text: this.$i18n.t("Mental_Transformation.MentalTransformation")
                },
                {
                    value: "positive_affirmation",
                    text: this.$i18n.t("Positive_Affirmation.PositiveAffirmation")
                },
                {
                    value: "six_steps",
                    text: this.$i18n.t("Six_Steps.SixSteps")
                }

            ],
            rows: 100,
            perPage: 10,
            currentPage: 1
        }
    },
    methods: {
        routeToComponent() {
            console.log(this.selected);
            this.$router.replace(this.selected)
        }
    },
}
</script>

<style>

</style>
