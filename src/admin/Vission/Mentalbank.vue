<template>
  <div>
    <h1>{{ $t("Mental_Bank_Ledger.MentalBankLedger") }}</h1>
    <b-container cols="5">
      <b-list-group-item v-for="(item, index) in form.Daily" :key="index">
        <b-row style="background-color:#3c4b64; color:white">
          <b-col>
            <b-col >{{ $t("Common.Date") }}:{{ item.Date }}</b-col>

            
          </b-col>

          <b-col>
            <b-col
              >{{ $t("Mental_Bank_Ledger.goal") }} :
              {{ item.MentalBanckGoal }}</b-col
            >
          </b-col>
        </b-row>
        
          <table class="table">
            <thead>
              <tr>
                <th class="col-4" style="width: 50%">
                  {{ $t("My_New_Mental.Value") }}
                </th>
                <th scope="col">{{ $t("My_New_Mental.Hourly") }}</th>
                <th scope="col">{{ $t("Mental_Bank_Ledger.Hours") }}</th>
                <th scope="col">{{ $t("My_New_Mental.Deposit") }}</th>
              </tr>
            </thead>

            <tbody>
                <tr v-for="(drive,index) in item.answer1" :key="index">
              <th>
                  {{drive.ValueEvents}}
              </th>
              <th>
                {{drive.HourlyRate}}
                  
              </th>
              <th>
                <!-- <b-form-input id="input-1" class="normalInput" @change="setDiposit(index)" style="font-size:12px" v-model="drive.Hours" type="number" required placeholder=""></b-form-input> -->
                
                  {{drive.Hours}}
                  
               
              </th>

              <th>
                {{drive.Deposit}}
              </th>
                </tr>
                            <tr>
              <th colspan="4" style="background-color:white">
                <b-col style="text-align: right; padding: 0 !important">
                 
                </b-col>
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
              <th colspan="3">
                {{item.TodaysDeposite}}
                 
                
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
              <th colspan="3">
                {{item.BalanceForward}}
                 
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
              <th colspan="3">
                {{item.NewMbBalance}}
              </th>
            </tr>
            </tbody>
          </table>
        
      </b-list-group-item>

      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.NewMental") }}</strong>
        <div style="background-color: white">{{ form.Newmental }}</div>
      </b-list-group-item>
      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.Happennings") }}</strong>
        <div style="background-color: white">{{ form.Happennings }}</div>
      </b-list-group-item>

      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.Affirmation") }}</strong>
        <div style="background-color: white">{{ form.Affirmation }}</div>
      </b-list-group-item>
    </b-container>
  </div>
</template>

<script>
const { getUserData } = require("../../assets/js/service");
export default {
  components: {},
  mounted: function () {
    let dataBase = "/mentalBanks";
    getUserData(dataBase, localStorage.getItem("userToView"), this.token)
      .then((resp) => {
        console.log(resp);
        this.form = resp.data;
        this.edit = true;
        this.submited = true;
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          // this.makeToast("", "Wellcome")
        } else if (err.request) {
          this.makeToast("danger", "Connection Problem");
        } else {
          this.makeToast("danger", "Some Error has Happened");
        }
      });
  },
  data() {
    return {
      form: {
        answer1: [
          {
            ValueEvents: "",
            HourlyRate: "",
            Rate: "",
            FlatRate: "",
          },
        ],
        TodaysDeposite: "",
        BalanceForward: "",
        NewMbBalance: "",
        Newmental: "",
        Affirmation: "",
        Happennings: "",
        date: "",
        perHoure: "",
        userId: localStorage.getItem("userId"),
      },
      show: true,
      submited: false,
      token: localStorage.getItem("token"),
      id: localStorage.getItem("userId"),
    };
  },
  methods: {
    makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
      });
    },
  },
};
</script>

<style>
.normalInput {
  width: 100% !important;
}
</style>
