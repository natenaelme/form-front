<template>
<div>
    <b-row>
                <b-container>
               
           
                </b-container>
        </b-row>
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
            selected: 'habit',
            chapter:[],
            selectedChapter:null,
            messageSending:false,
            mentorMessage:null,
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
    mounted() {
                console.log(getChapters("1"))
        this.chapter = getChapters("2")
    },
    methods: {
        routeToComponentNext() {
            let route = this.Habit.filter(vetion=>vetion.value == this.selected);
            
            if(this.Habit.indexOf(this.selected)<this.Habit.length){
                this.$router.replace(this.Habit[this.Habit.indexOf(route[0])+1].value);
                this.selected = this.Habit[this.Habit.indexOf(route[0])+1].value;
            }
        },
         makeToast(variant, message) {
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
        routeToComponent() {
            console.log(this.selected);
            this.$router.replace(this.selected)
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
