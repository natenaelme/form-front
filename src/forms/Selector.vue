<template>
  <div>
    <h3 class="text-center">{{ $t("Common.WorkBooks") }}</h3>
    <b-container style="padding-top: 0%">
      <b-row>
        <a class="col-md-6 col-xl-3 mb-4" @click="routTo('Vision')">
          <div class="card">
            <img src="@/assets/img/Vision.png" height="150em" />
            <div class="shadow border-left-primary py-2">
              <div class="card-header" style="padding: 3px">
                <h1
                  class="text-center"
                  style="
                    font-size: 15px;
                    margin: 0px;
                    color: rgb(197, 159, 52);
                    width: 100%;
                  "
                >
                  <br />{{ $t("Common.Vision") }}<br /><br />
                </h1>
              </div>
              <div class="card-body">
                <b-progress :max="VisionMax">
                  <b-progress-bar
                    :value="VisionValue"
                    :label="`${((VisionValue / VisionMax) * 100).toFixed(2)}%`"
                  ></b-progress-bar>
                </b-progress>
                <p v-if="VisionValue / VisionMax == 1" class="sueccess text-center">
                  Finshed
                </p>
              </div>
            </div>
          </div>
        </a>
        <a v-if="workBook > 1" class="col-md-6 col-xl-3 mb-4" @click="routTo('Habit')">
          <div class="card">
            <img src="@/assets/img/habit.jpg" style="width: 100%" height="150em" />
            <div class="shadow border-left-primary py-2">
              <div class="card-header" style="padding: 3px">
                <h1
                  class="text-center"
                  style="
                    font-size: 15px;
                    margin: 0px;
                    color: rgb(197, 159, 52);
                    width: 100%;
                  "
                >
                  <br />{{ $t("Common.Habit") }}<br /><br />
                </h1>
              </div>
              <div class="card-body">
                <b-progress :max="HabitMax">
                  <b-progress-bar
                    :value="HabitValue"
                    :label="`${((HabitValue / HabitMax) * 100).toFixed(2)}%`"
                  ></b-progress-bar>
                </b-progress>
                <p v-if="HabitValue / HabitMax == 1" class="sueccess text-center">
                  Finshed
                </p>
              </div>
              <div v-if="!finshedView">
                <b-container>
                  <p style="color: red">{{ $t("Common.1") }}</p>
                </b-container>
              </div>
            </div>
          </div>
        </a>

        <a
          v-if="workBook > 2"
          class="col-md-6 col-xl-3 mb-4"
          @click="routTo('MindProgramming')"
        >
          <div class="card">
            <img
              src="@/assets/img/reprogram-subconscious-mind.jpg"
              style="width: 100%"
              height="150em"
            />
            <div class="shadow border-left-primary py-2">
              <div class="card-header" style="padding: 3px">
                <h1
                  class="text-center"
                  style="
                    font-size: 15px;
                    margin: 0px;
                    color: rgb(197, 159, 52);
                    width: 100%;
                  "
                >
                  <br />{{ $t("Common.MindProgramming") }}<br />
                </h1>
              </div>
              <div class="card-body">
                <b-progress :max="MindProgrammingMax">
                  <b-progress-bar
                    :value="MindProgrammingValue"
                    :label="`${(
                      (MindProgrammingValue / MindProgrammingMax) *
                      100
                    ).toFixed(2)}%`"
                  ></b-progress-bar>
                </b-progress>
                <p
                  v-if="MindProgrammingValue / MindProgrammingMax == 1"
                  class="sueccess text-center"
                >
                  Finshed
                </p>
              </div>
              <div v-if="!finshedHabit">
                <b-container>
                  <p style="color: red">{{ $t("Common.12") }}</p>
                </b-container>
              </div>
            </div>
          </div>
        </a>
        <a
          v-if="workBook > 3"
          class="col-md-6 col-xl-3 mb-4"
          @click="routTo('TeamBuilding')"
        >
          <div class="card">
            <img
              src="@/assets/img/Team-building-image-1280x640.jpeg"
              style="width: 100%"
              height="150em"
            />
            <div class="shadow border-left-primary py-2">
              <div class="card-header" style="padding: 3px">
                <h1
                  class="text-center"
                  style="
                    font-size: 15px;
                    margin: 0px;
                    color: rgb(197, 159, 52);
                    width: 100%;
                  "
                >
                  <br />{{ $t("Common.TeamBuilding") }}<br />
                </h1>
              </div>
              <div class="card-body">
                <b-progress :max="TeamBuildingMax">
                  <b-progress-bar
                    :value="TeamBuildingValue"
                    :label="`${((TeamBuildingValue / TeamBuildingMax) * 100).toFixed(
                      2
                    )}%`"
                  ></b-progress-bar>
                </b-progress>
                <p
                  v-if="TeamBuildingValue / TeamBuildingMax == 1"
                  class="sueccess text-center"
                >
                  Finshed
                </p>
              </div>
              <div v-if="!finshedTeam">
                <b-container>
                  <p style="color: red">{{ $t("Common.123") }}</p>
                </b-container>
              </div>
            </div>
          </div>
        </a>
      </b-row>

      <h6>{{ $t("Common.OverAll") }}</h6>
    </b-container>
  </div>
</template>

<script>
const {
  getHabitPages,
  MindProgrammingPages,
  TeamBuildingPages,
  getterId,
  getVisionPages,
} = require("../assets/js/service");
export default {
  data() {
    return {
      admin: "/admin",
      value: 12,
      max: 50,
      habit: localStorage.getItem("pages"),
      HabitValue: 0,
      HabitMax: 0,
      MindProgrammingMax: 0,
      MindProgrammingValue: 0,
      finshedView: true,
      finshedHabit: true,
      finshedTeam: true,
      TeamBuildingMax: 0,
      TeamBuildingValue: 0,
      Vision: "",
      VisionMax: "",
      VisionValue: "",
      Habit: "",
      MindProgramming: "",
      TeamBuilding: "",
      workBook: localStorage.getItem("workBook"),
    };
  },
  mounted() {
    let id = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    getterId("users/", id, token).then((resps) => {
      this.VisionMax = getVisionPages().length;
      this.VisionValue = resps.data.pages[0];
      this.Vision = getVisionPages()[resps.data.pages[0]];
      console.log(getVisionPages()[resps.data.pages[0]]);

      this.HabitMax = getHabitPages().length;
      this.HabitValue = resps.data.pages[1];
      this.Habit = getHabitPages()[resps.data.pages[1]];

      this.MindProgrammingMax = MindProgrammingPages().length;
      this.MindProgrammingValue = resps.data.pages[2];
      console.log(MindProgrammingPages().length);
      console.log("mind Progr" + resps.data.pages);
      this.MindProgramming = MindProgrammingPages()[resps.data.pages[2]];
      this.TeamBuildingMax = TeamBuildingPages().length - 1;
      this.TeamBuildingValue = resps.data.pages[3];
      this.TeamBuilding = TeamBuildingPages()[resps.data.pages[3]];
    });
  },
  methods: {
    routTo(rout) {
      this.finshedView = true;
      this.finshedHabit = true;
      this.finshedTeam = true;
      if (rout == "TeamBuilding") {
        if (this.MindProgrammingValue / this.MindProgrammingMax >= 1) {
          this.$router.replace(this.TeamBuilding);
        } else {
          this.finshedTeam = false;
        }
        if (this.TeamBuildingValue / this.TeamBuildingMax >= 1) {
          this.$router.replace(TeamBuildingPages()[0]);
        }
      } else if (rout == "MindProgramming") {
        if (this.HabitValue / this.HabitMax >= 1) {
          this.$router.replace(this.MindProgramming);
        } else {
          this.finshedHabit = false;
        }
        if (this.MindProgrammingValue / this.MindProgrammingMax >= 1) {
          this.$router.replace(MindProgrammingPages()[0]);
        }
      } else if (rout == "Habit") {
        console.log(this.HabitValue / this.HabitMax);
        if (this.VisionValue / this.VisionMax >= 1) {
          this.$router.replace(this.Habit);
        } else {
          console.log("test hhh");
          this.finshedView = false;
        }
        if (this.HabitValue / this.HabitMax >= 1) {
          console.log("test");
          this.$router.replace(getHabitPages()[0]);
        }
      } else if (rout == "Vision") {
        console.log("test");
        this.$router.replace(this.Vision);
        if (this.VisionValue / this.VisionMax >= 1) {
          this.$router.replace(getVisionPages()[0]);
        }
      }
    },
  },
};
</script>

<style>
.card:hover {
  color: gray;

  border: 1px solid #bfbfbf;
  background-color: white;
  box-shadow: 10px 10px 5px #aaaaaa;
}

a:hover {
  text-decoration: none;
}

div.b {
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
}
</style>
