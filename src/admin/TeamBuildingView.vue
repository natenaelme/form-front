<template>
<div>
    <label for="select"><strong>Select Pages</strong> </label>
    <b-form-select v-model="selected" id="select" @change="routeToComponent()" :options="TeamBuilding" size="sm" class="mt-3">

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
            TeamBuilding: [
                // {
                //     value: null,
                //     text: this.$i18n.t("Common.Selectpage"),
                // },
                {
                    value: "team_meeting",
                    text: this.$i18n.t("Team_Meeting.TeamMeeting"),

                },
                {
                    value: "team_tasks",
                    text: this.$i18n.t("Team_Task.TeamTask")
                },
                {
                    value: "alpha_team",
                    text: this.$i18n.t("Alpha_Team.AlphaTeam")
                },
                {
                    value: "alpha",
                    text: this.$i18n.t("Alpha.Alpha")
                },
                {
                    value: "qualities",
                    text: this.$i18n.t("Qualities.Qualities")
                },
                {
                    value: "levels_of_leadership",
                    text: this.$i18n.t("Levels_of_Leadership.LevelsOfLeadership")
                },
                {
                    value: "four_attributes",
                    text: this.$i18n.t("Four_Attributes.FourAttributes")
                },
                {
                    value: "the_five",
                    text: this.$i18n.t("The_Five.TheFive")
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
