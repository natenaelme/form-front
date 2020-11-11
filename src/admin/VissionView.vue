<template>
<div>
    <label for="select"><strong>Select Pages</strong> </label>
    <b-form-select v-model="selected" id="select" @change="routeToComponent()" :options="Vission" size="sm" class="mt-3">

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
            Vission: [

                {
                    value: "how_to_search",
                    text: this.$i18n.t("How_To_Search.HowToSearch"),

                },
                {
                    value: "personal_information",
                    text: this.$i18n.t("Personal_Information.PersonalInformation")
                },
                {
                    value: "my_life_purpose",
                    text: this.$i18n.t("My_Life_Purpose.MyLifePurpose")
                },

                {
                    value: "my_house",
                    text: this.$i18n.t("My_House.MyHouse")
                },
                {
                    value: "socal_dream",
                    text: this.$i18n.t("Socal_Dream.SocalDream")
                },
                {
                    value: "my_mental",
                    text: this.$i18n.t("My_Mental.MyMental")
                },
                {
                    value: "spirtual",
                    text: this.$i18n.t("Spirtual.Spirtual")
                },
                {
                    value: "service",
                    text: this.$i18n.t("Service.Service")
                },
                {
                    value: "physical",
                    text: this.$i18n.t("Physical.Physical")
                },
                {
                    value: "family",
                    text: this.$i18n.t("Family.Family")
                },
                {
                    value: "financial",
                    text: this.$i18n.t("Financial.Financial")
                },
                {
                    value: "car",
                    text: this.$i18n.t("MyCar.MyCar")
                },
                {
                    value: "use_posetive",
                    text: this.$i18n.t("Use_Postive.UsePostive")
                },
                {
                    value: "financial_goal",
                    text: this.$i18n.t("GoalCommon.FinancialGoal")
                },
                {
                    value: "family_goal",
                    text: this.$i18n.t("GoalCommon.FamilyGoal")
                },

                {
                    value: "socal_goal",
                    text: this.$i18n.t("GoalCommon.SocalGoal")
                },

                {
                    value: "physical_goal",
                    text: this.$i18n.t("GoalCommon.PhysicalGoal")
                },

                {
                    value: "spritual_goal",
                    text: this.$i18n.t("GoalCommon.SpritualGoal")
                },

                {
                    value: "vision_goal",
                    text: this.$i18n.t("GoalCommon.VitionGoal")
                },

                {
                    value: "mental_goal",
                    text: this.$i18n.t("GoalCommon.MentalGoal")
                },

                {
                    value: "action_plan",
                    text: this.$i18n.t("Action_Plan.ActionPlan")
                },
                {
                    value: "my_new_mental",
                    text: this.$i18n.t("Mental_Bank_Ledger.MentalBankLedger")
                },
                {
                    value: "mental_bank",
                    text: this.$i18n.t("My_New_Mental.MyNewMental")
                },

            ],
            rows: 100,
            perPage: 10,
            currentPage: 1
        }
    },
    methods: {
        routeToComponent() {
            console.log(this.selected);

            this.Vission = this.Vission;
            this.$router.replace(this.selected)
        }
    },
}
</script>

<style>

</style>
