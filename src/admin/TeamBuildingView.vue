<template>
<div>
     <b-row>
                <b-container>
                Selcet a chapter
                <b-form-select v-model="selectedChapter" id="select"  :options="chapter" size="sm" class="mt-3">

    </b-form-select>
            Messge for customer
              <b-form-textarea v-model="mentorMessage">
                  
              </b-form-textarea>
              <br>
              <b-button variant="success" @click="sendMessage()" :disabled="!selectedChapter || !mentorMessage" style="float:right">send 
                  <div v-if="messageSending" class="spinner-grow spinner-grow-sm" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>
                </b-button>
                </b-container>
        </b-row>
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
const {getChapters,posts} = require("../assets/js/service")
export default {
    data() {
        return {
            show: true,
            selected: '',
            chapter:[],
            selectedChapter:null,
            messageSending:false,
            mentorMessage:null,
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
        },
        makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
      });
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
