<template>
<div>
            <b-row>
                <b-container>
               
            
                </b-container>
        </b-row>
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
    <p style="text-align:center">
            <b-button variant="success" @click="routeToComponentNext" >next</b-button>

    </p>

</div>
</template>

<script>
const {getChapters,posts} = require("../assets/js/service")
export default {
    data() {
        return {
            show: true,
            selected: 'how_to_search',
            selectedChapter:null,
            messageSending:false,
            mentorMessage:null,
            chapter:[],
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
    mounted() {
        
        console.log(getChapters("1"))
        this.chapter = getChapters("1")
        
    },
    methods: {
         makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
        routeToComponent() {
            console.log(this.selected);

            this.Vission = this.Vission;
            this.$router.replace(this.selected)
        },
        routeToComponentNext() {
            let route = this.Vission.filter(vetion=>vetion.value == this.selected);
            
            if(this.Vission.indexOf(this.selected)<this.Vission.length){
                this.$router.replace(this.Vission[this.Vission.indexOf(route[0])+1].value);
                this.selected = this.Vission[this.Vission.indexOf(route[0])+1].value;
            }
        },
        sendMessage(){
            
            this.messageSending = true;
      console.log("ress");
      let newMessage = {
        message: this.mentorMessage,
        workbook_and_chapter: this.selectedChapter,
        from: "mentor",
        customerId: localStorage.getItem("userToView"),
        mentorId: localStorage.getItem("userId"),
      };
      console.log(newMessage);
      posts("messages",newMessage).then(resp=>{        
        this.messageSending = false;
        this.mentorMessage = null;
        this.selectedChapter = null;
        this.makeToast(
              "success",
                "you have success fully send your message"
            );
      }).catch((err) => {
            console.log(this.form);
            if (err.response) {
              // client received an error response (5xx, 4xx)

              this.makeToast(
                "danger",
                "the Information that you entered is not correct.or the email allrady existed"
              );
              console.log(err);
            } else if (err.request) {
              this.$toasted.show("Connection Problem");
            } else {
              this.$toasted.show("Some Error has Happened");
            }
          });
      
        }
         
    },
}
</script>

<style>

</style>
