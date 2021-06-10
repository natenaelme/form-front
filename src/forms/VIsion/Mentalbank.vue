<template>
  <div>
    <HeaderFile :FirstHeader="$t('Mental_Bank_Ledger.MentalBankLedger')" />
    <b-container cols="5">
      <b-list-group-item>
        <b-row>
          <b-col>
            <b-col>{{ $t("Common.Date") }}:{{ form.Daily[len].Date }}</b-col>
          </b-col>
          <b-col>
            <b-col>{{ $t("Mental_Bank_Ledger.goal") }} :</b-col>
            <b-col>
              <b-input
                type="text"
                v-model="form.Daily[len].MentalBanckGoal"
                class="normalInput"
              />
            </b-col>
          </b-col>
        </b-row>
      </b-list-group-item>
      <b-list-group-item class="tabel-responsive">
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
            <tr v-for="(item, index) in selected" :key="index">
              <th v-show="!selected[index].ValueEvents">
                <b-form-select
                  style="margin: 0 !important"
                  v-model="selected[index]"
                  @change="ChangeValue(index)"
                  :options="events"
                  size="sm"
                  class="mt-3"
                ></b-form-select>
                
              </th>
              <th v-show="selected[index].ValueEvents">
                  {{selected[index].ValueEvents}}
              </th>
              <th>
                <b-form-input
                  id="input-1"
                  class="normalInput"
                  disabled
                  style="font-size: 12px"
                  v-model="selected[index].HourlyRate"
                  type="number"
                  required
                  placeholder=""
                ></b-form-input>
              </th>
              <th>
                <!-- <b-form-input id="input-1" class="normalInput" @change="setDiposit(index)" style="font-size:12px" v-model="selected[index].Hours" type="number" required placeholder=""></b-form-input> -->
                <input
                  type="number"
                  v-model="selected[index].Hours"
                  @change="test(index)"
                />
              </th>

              <th>
                <b-form-input
                  id="input-1"
                  disabled
                  class="normalInput"
                  style="font-size: 12px"
                  v-model="Diposit[index]"
                  type="number"
                  required
                  placeholder=""
                ></b-form-input>
              </th>
            </tr>
            <tr>
              <th colspan="4">
                <b-col style="text-align: right; padding: 0 !important">
                  <b-button
                    variant="danger"
                    v-on:click="
                      selected.push({
                        FlatRate: null,
                        HourlyRate: null,
                        ValueEvents: null,
                        Diposit: null,
                        Hours: null,
                      })
                    "
                    >+</b-button
                  >
                </b-col>
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Deposite") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[len].TodaysDeposite"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.Balance") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[len].BalanceForward"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
            <tr>
              <th>{{ $t("Mental_Bank_Ledger.NewBalance") }}</th>
              <th colspan="3">
                <b-input
                  disabled
                  v-model="form.Daily[len].NewMbBalance"
                  class="normalInput"
                  type="text"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </b-list-group-item>
      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.NewMental") }}</strong>
        <b-form-textarea
          class="normalInput"
          v-model="form.Newmental"
          rows="6"
          max-rows="6"
        />
      </b-list-group-item>
      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.Happennings") }}</strong>
        <b-form-textarea
          class="normalInput"
          v-model="form.Happennings"
          rows="6"
          max-rows="6"
        />
      </b-list-group-item>

      <b-list-group-item>
        <strong>{{ $t("Mental_Bank_Ledger.Affirmation") }}</strong>
        <b-form-textarea
          class="normalInput"
          v-model="form.Affirmation"
          rows="6"
          max-rows="6"
        />
      </b-list-group-item>
      <div class="position-relative row form-check">
        <div class="text-center">
          <button class="btn btn-primary" @click="saveForm()">Save</button
          ><br />
          <div v-if="!show" class="lds-ripple">
            <div></div>
            <div></div>
            loading..
          </div>
        </div>
        <br />
        <div class="text-center">
          <b-button to="/question/my_new_mental" variant="outline-success">
            <b-icon icon="arrow-left"></b-icon> back
          </b-button>
          <b-button
            :disabled="!submited"
            to="/question/main"
            variant="outline-success"
          >
            Next<b-icon icon="arrow-right"></b-icon>
          </b-button>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import HeaderFile from "../../containers/HeaderFile";
import Vue from "vue";
import { BootstrapVue, BVToastPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
const {
  posts,
  getUserData,
  patchData,
  getUrl,
} = require("../../assets/js/service");
export default {
  components: {
    HeaderFile,
  },
  mounted: function () {
    var formatted_date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
    this.form.Daily[this.len].Date = formatted_date;
    let data = "/myNewMentals";
    getUserData(data, this.id, this.token)
      .then((resp) => {
        console.log("evnetes evntes");
        console.log(resp.data);
        this.events = resp.data.answer1.map((evn) => {
          return { value: evn, text: evn.ValueEvents };
        });
  console.log("dfghj");
        console.log(this.events);
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

    let dataBase = "/mentalBanks";
    getUserData(dataBase, this.id, this.token)
      .then((resp) => {
          console.log("len len len")
        this.form = resp.data;
        console.log(this.selected);
        this.len = resp.data.Daily.length -1;
        if(resp.data.Daily[this.len].answer1){
        this.selected = resp.data.Daily[this.len].answer1;

        }
        this.Diposit = this.selected.map(evn => evn.Deposit);

        this.lastDepo = resp.data.Daily[this.len].NewMbBalance;
        this.edit = true;
        this.submited = true;
      })
      .catch((err) => {
        if (err.response) {
          // client received an error response (5xx, 4xx)
        //   this.makeToast("", "Wellcome")
        } else if (err.request) {
          this.makeToast("danger", "Connection Problem");
        } else {
          this.makeToast("danger", "Some Error has Happened");
        }
      });
  },
  data() {
    return {
      events: [],
      Diposit: [],
      lastDepo: 0,
      len:0,
      TodaysDeposite: null,
      selected: [
        {
          FlatRate: null,
          HourlyRate: null,
          ValueEvents: null,
          Diposit: null,
          Hours: null,
        },
      ],
      form: {
        
        Daily: [
          {
            Date: null,
            MentalBanckGoal: null,
            MentalBank: null,
            TodaysDeposite:null,
            answer1: [
              {
                ValueEvents: "",
                HourlyRate: "",
                Hours: "",
                Deposit: "",
              },
            ],
          },
        ],
        
        BalanceForward:0,
        NewMbBalance: null,
        Newmental: null,
        Affirmation: null,
        Happennings: null,
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
      let messagehead;if(variant=="success"){messagehead="success"}else{messagehead="error"}this.$bvToast.toast(message, {
        title: messagehead,
        variant: variant,
        solid: true,
      });
    },
    ChangeValue(ind){
        var event = [];

        this.events.forEach((value,index)=>{
            console.log(this.selected[ind] == value.value);
            if(value.value == this.selected[ind]){
                let sel =value;
                sel.disabled= true;
                event.push(sel)

            }else{
                event.push(value);
            }
        })
        this.events = event;
        console.log(this.selected[ind].FlatRate);
        this.form.Daily[this.len].answer1[ind] = {
          ValueEvents: this.selected[ind].ValueEvents,
          HourlyRate: this.selected[ind].HourlyRate,
          Hours: 0,
          Deposit:this.selected[ind].FlatRate,
        };
      if (this.selected[ind].FlatRate) {
                Vue.set(
          this.Diposit,
          ind,
          this.selected[ind].FlatRate
        );
              let sum = 0;
      this.Diposit.forEach((value, index) => {
        sum = parseInt(sum) + parseInt(value);
        console.log("sum of today + " + sum);
      });
      this.form.Daily[this.len].TodaysDeposite = sum;
      this.form.Daily[this.len].NewMbBalance = sum + this.lastDepo;
      this.form.Daily[this.len].BalanceForward = this.form.Daily[this.len-1].NewMbBalance;
      this.form.Daily[this.len].NewMbBalance = sum + this.form.Daily[this.len].BalanceForward;

      }
    },
    test(index) {
      if (this.selected[index].HourlyRate) {
        this.form.Daily[this.len].answer1[index] = {
          ValueEvents: this.selected[index].ValueEvents,
          HourlyRate: this.selected[index].HourlyRate,
          Hours: this.selected[index].Hours,
          Deposit:
            parseInt(this.selected[index].HourlyRate) *
            parseInt(this.selected[index].Hours),
        };

        Vue.set(
          this.Diposit,
          index,
          parseInt(this.selected[index].HourlyRate) *
            parseInt(this.selected[index].Hours)
        );
      }
      if (this.selected[index].FlatRate) {
        Vue.set(this.Diposit, index, this.selected[index].FlatRate);
      }
      let sum = 0;
      this.Diposit.forEach((value, index) => {
        sum = sum + parseInt(value);
      });
      this.form.Daily[this.len].TodaysDeposite = sum;
      this.form.Daily[this.len].NewMbBalance = sum + this.lastDepo;
      if(this.len > 1){
      this.form.Daily[this.len].BalanceForward = this.form.Daily[this.len-1].NewMbBalance;

      }else{
         this.form.Daily[this.len].BalanceForward = 0; 
      }
      console.log(this.form.Daily[this.len]);
    },
    setDiposit(index) {
      console.log("sdfghjkl;");
      if (this.selected[index].HourlyRate) {
        this.selected[index].Diposit =
          this.selected[index].HourlyRate * this.selected[index].Hours;
      }
      if (this.selected[index].FlatRate) {
        this.selected[index].Diposit = this.selected[index].FlatRate;
      }
    },
    saveForm() {
      this.show = false;
      let dataBase = "/mentalBanks";
      console.log(this.show);
      console.log(this.form);
      if (this.edit) {
        patchData(dataBase, this.token, this.form)
          .then((resp) => {
            console.log(resp);
            this.makeToast("success", "success fully edited your form");
            this.show = true;
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              this.makeToast("danger", "There is a problem with your form");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      } else {
        posts(dataBase, this.form)
          .then((resp) => {
            console.log(resp.data);
            this.edit = true;
            this.form.answer1 = [
              {
                ValueEvents: "",
                HourlyRate: "",
                Rate: "",
                FlatRate: "",
              },
            ];
            this.form.TodaysDeposite = "";
            this.form.BalanceForward = "";
            this.form.NewMbBalance = "";
            this.form.Newmental = "";
            this.form.Affirmation = "";
            this.form.Happennings = "";
            this.submited = true;
            this.$emit("changeTitle", "vision");
            this.makeToast("success", "success fully submited your form");
            this.show = true;
          })
          .catch((err) => {
            if (err.response) {
              // client received an error response (5xx, 4xx)
              this.makeToast("danger", "There is a problem with your form");
              this.show = true;
            } else if (err.request) {
              this.makeToast("danger", "Connection Problem");
              this.show = true;
            } else {
              this.makeToast("danger", "Some Error has Happened");
              this.show = true;
            }
          });
      }
    },
  },
};
</script>

<style>
.normalInput {
  width: 100% !important;
}
</style>
