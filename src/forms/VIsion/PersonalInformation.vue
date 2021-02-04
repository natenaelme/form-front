<template>
  <div>
    <HeaderFile :FirstHeader="$t('Personal_Information.PersonalInformation')" />
    <b-container cols="5">
      <b-list-group>
        <b-list-group-item>
          <b-row>
            <b-col>
              {{ $t("Personal_Information.FullName") }}
            </b-col>
            <b-col>
              {{ fullName }}
            </b-col>
          </b-row>
        </b-list-group-item>

        <div v-for="item in inputToLoop" :key="item">
          <b-list-group-item>
            <b-row>
              <b-col>
                {{ $t("Personal_Information." + item) }}
              </b-col>
              <b-col>
                <b-form-input
                  id="input-1"
                  style="font-size: 12px"
                  v-model="form[item]"
                  type="text"
                  required
                  placeholder=""
                ></b-form-input>
              </b-col>
            </b-row>
          </b-list-group-item>
        </div>

        <b-list-group-item>
          <b-row>
            <b-col md="12">
              {{ $t("Personal_Information.Countries") }}
            </b-col>
            <b-col md="4" v-for="(item, index) in form.Countries" :key="index">
              <b-form-input
                id="input-1"
                style="font-size: 12px"
                v-model="form.Countries[index]"
                type="text"
                required
                placeholder=""
              ></b-form-input>
            </b-col>
          </b-row>
          <b-col style="text-align: right; padding: 0 !important">
            <b-button variant="danger" v-on:click="form.Countries.push('')">+</b-button>
          </b-col>
        </b-list-group-item>
        <b-list-group-item>
          <b-row>
            <b-col md="2" v-for="item in buttonsToLoop" :key="item">
              <b-button
                style="margin-bottom: 10px"
                @click="form[item] = !form[item]"
                :class="{ 'btn-success': form[item] }"
                >{{ $t("Personal_Information." + item) }}</b-button
              >
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
      <div class="position-relative row form-check">
        <div class="text-center">
          <button class="btn btn-primary" @click="saveForm()">Save</button><br />
          <div v-if="!show" class="lds-ripple">
            <div></div>
            <div></div>
            loading..
          </div>
        </div>
        <br />
        <div class="text-center">
          <b-button to="/question/how_to_search" variant="outline-success">
            <b-icon icon="arrow-left"></b-icon> back
          </b-button>
          <b-button
            :disabled="!submited"
            to="/question/my_life"
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
const { posts, getUserData, patchData } = require("../../assets/js/service");
export default {
  components: {
    HeaderFile,
  },
  data() {
    return {
      fullName: localStorage.getItem("fullName"),
      form: {
        Age: "",
        Height: "",
        Address: "",
        POBox: "",
        Fax: "",
        PassportNo: "",
        BloodType: "",
        Hobby: "",
        Gender: "",
        Education: "",
        Weight: "",
        Tel: "",
        Web: "",
        DriverLNo: "",
        InsuranceNo: "",
        BankBookNo: "",
        Talent: "",
        Countries: [""],
        blessed: false,
        great: false,
        amazing: false,
        love: false,
        peace: false,
        powerful: false,
        joy: false,
        focused: false,
        believer: false,
        persistent: false,
        consisten: false,
        positive: false,
        healthy: false,
        wealth: false,
        genuine: false,
        visionary: false,
        organized: false,
        strong: false,
        couragious: false,
        attractive: false,
        giver: false,
        active: false,
        forgiving: false,
        userId: localStorage.getItem("userId"),
      },
      show: true,
      submited: false,
      token: localStorage.getItem("token"),
      id: localStorage.getItem("userId"),
      inputToLoop: [
        "Age",
        "Height",
        "Address",
        "POBox",
        "Fax",
        "PassportNo",
        "BloodType",
        "Hobby",
        "Gender",
        "Education",
        "Weight",
        "Tel",
        "Web",
        "DriverLNo",
        "InsuranceNo",
        "BankBookNo",
        "Talent",
      ],
      buttonsToLoop: [
        "blessed",
        "great",
        "amazing",
        "love",
        "peace",
        "powerful",
        "joy",
        "focused",
        "believer",
        "persistent",
        "consisten",
        "positive",
        "healthy",
        "wealth",
        "genuine",
        "visionary",
        "organized",
        "strong",
        "couragious",
        "attractive",
        "giver",
        "active",
        "forgiving",
      ],
    };
  },
  mounted: function () {
    let dataBase = "/personalInformations";
    getUserData(dataBase, this.id, this.token)
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
  methods: {
    makeToast(variant, message) {
      this.$bvToast.toast(message, {
        title: variant,
        variant: variant,
        solid: true,
      });
    },
    saveForm() {
      this.show = false;
      let dataBase = "/personalInformations";
      console.log(this.show);
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
            this.form.Age = "";
            this.form.eight = "";
            this.form.ddress = "";
            this.form.OBox = "";
            this.form.ax = "";
            this.form.assportNo = "";
            this.form.loodType = "";
            this.form.obby = "";
            this.form.ender = "";
            this.form.ducation = "";
            this.form.eight = "";
            this.form.el = "";
            this.form.eb = "";
            this.form.riverLNo = "";
            this.form.nsuranceNo = "";
            this.form.ankBookNo = "";
            this.form.alent = "";
            this.form.ountries = [""];
            this.form.lessed = false;
            this.form.reat = false;
            this.form.mazing = false;
            this.form.ove = false;
            this.form.eace = false;
            this.form.owerful = false;
            this.form.oy = false;
            this.form.ocused = false;
            this.form.eliever = false;
            this.form.ersistent = false;
            this.form.onsisten = false;
            this.form.ositive = false;
            this.form.ealthy = false;
            this.form.ealth = false;
            this.form.enuine = false;
            this.form.isionary = false;
            this.form.rganized = false;
            this.form.trong = false;
            this.form.ouragious = false;
            this.form.ttractive = false;
            this.form.iver = false;
            this.form.ctive = false;
            this.form.orgiving = false;
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
    changeValue(value) {
      console.log(value);
      let form = this.form;
      console.log(form[value]);
    },
  },
};
</script>

<style lang="stylus" scoped></style>
