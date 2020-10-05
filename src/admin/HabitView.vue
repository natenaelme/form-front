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
                    value: "habit",
                    text: this.$i18n.t("Habit.HabitControl"),

                },
                {
                    value: "how_to_build",
                    text: this.$i18n.t("How_To_Build.HowToBuild")
                },
                {
                    value: "process_of_change",
                    text: this.$i18n.t("Process_Of_Change.ProcessOfChange")
                },
                {
                    value: "silence_time",
                    text: this.$i18n.t("Silence_Time.SilenceTime")
                },
                {
                    value: "alpha_displine",
                    text: this.$i18n.t("Alpha_Discipline.AlphaDiscipline")
                },
                {
                    value: "alpha_responsibility",
                    text: this.$i18n.t("Alpha_Responsibility.AlphaResponsibility")
                },
                {
                    value: "gratitude_journal",
                    text: this.$i18n.t("Gratitude_Journal.GratitudeJournal")
                },
                {
                    value: "dream_board",
                    text: this.$i18n.t("My_Dream.MyDream")
                },
                {
                    value: "gsystem_belief",
                    text: this.$i18n.t("Gsystem_Belief.GsystemBelief")
                },
                {
                    value: "alpha_dream",
                    text: this.$i18n.t("Alpha_Dream.AlphaDream")
                },
                {
                    value: "gsystem_attitude",
                    text: this.$i18n.t("Gsystem_Attitude.GsystemAttitude")
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
