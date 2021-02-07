<template>
  <div>
    <HeaderFile :FirstHeader="$t('My_Dream_Board')" />
    <b-row style="margin-top: -15%">
      <b-col md="3"></b-col>
      <b-col md="6" v-if="next" class="view overlay">
        <img
          v-if="!images.Health"
          style="margin-top: 46%; margin-left: -2%"
          @click="route('physical')"
          class="img-fluid image"
          src="../../assets/img/health.png"
          width="40%"
        />
                <img
          v-if="images.Health"
          style="margin-top: 46%; margin-left: -2%"
          @click="route('physical')"
          class="img-fluid image"
          src="../../assets/img/healthb.png"
          width="40%"
        />

        <img
          v-if="!images.Spirtual"
          style="margin-left: -22%; margin-top: 21px"
          @click="route('spirtual')"
          class="image"
          src="../../assets/img/spri.png"
          width="40%"
        />
        <img
          v-if="images.Spirtual"
          style="margin-left: -22%; margin-top: 21px"
          @click="route('spirtual')"
          class="image"
          src="../../assets/img/sprib.png"
          width="40%"
        />
        <img
          v-if="!images.Vision"
          style="margin-left: -7%; margin-top: 24px"
          @click="route('service')"
          class="image"
          src="../../assets/img/vission.png"
          width="40%"
        />
        <img
          v-if="images.Vision"
          style="margin-left: -7%; margin-top: 24px"
          @click="route('service')"
          class="image"
          src="../../assets/img/vissionb.png"
          width="40%"
        />
        <img

          style="margin-top: 61%; margin-left: -59%"
          class="image"
          src="../../assets/img/circle.png"
          width="40%"
        />
        <img
          v-if="!images.Finance"
          style="margin-top: -50%; margin-left: 65%"
          @click="route('financial')"
          class="image"
          src="../../assets/img/finacal.png"
          width="40%"
        />
        <img
          v-if="images.Finance"
          style="margin-top: -50%; margin-left: 65%"
          @click="route('financial')"
          class="image"
          src="../../assets/img/finacalb.png"
          width="40%"
        />
        <img
          v-if="!images.Family || !images.Car || !images.House"
          style="margin-top: -19%; margin-left: 59%"
          @click="route('family')"
          class="image"
          src="../../assets/img/family.png"
          width="40%"
        />
        <img
          v-if="images.Family && images.Car && images.House"
          style="margin-top: -19%; margin-left: 59%"
          @click="route('family')"
          class="image"
          src="../../assets/img/familyb.png"
          width="40%"
        />
        <img
          v-if="!images.Socal"
          style="margin-top: -27%; margin-left: 31%"
          @click="route('socal_dream')"
          class="image"
          src="../../assets/img/socal.png"
          width="40%"
        />
                <img
          v-if="images.Socal"
          style="margin-top: -27%; margin-left: 31%"
          @click="route('socal_dream')"
          class="image"
          src="../../assets/img/socalb.png"
          width="40%"
        />
        <img
          v-if="!images.Knowledge"          
          style="margin-top: -62%; margin-left: 3%"
          @click="route('my_mental')"
          class="image"
          src="../../assets/img/Knowlage.png"
          width="40%"
        />
        <img
          v-if="images.Knowledge"          
          style="margin-top: -62%; margin-left: 3%"
          @click="route('my_mental')"
          class="image"
          src="../../assets/img/Knowlageb.png"
          width="40%"
        />
      </b-col>
      <b-col md="3"></b-col>
    </b-row>
    <b-row style="" class="print">
      <b-col md="3"></b-col>
      <b-col md="6" v-if="!next" class="view overlay">
        <img
          class="health-image image"
          @click="route('physical')"
          style=""
          :src="images.Health"
          alt=""
          width="8%"
          height="30%"
        />

        <img
          class="spirtual-image image"
          @click="route('spirtual')"
          style=""
          :src="images.Spirtual"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="vission-image image"
          @click="route('service')"
          style=""
          :src="images.Vision"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="profile-image"
          style=""
          :src="profileImage"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="financial-image image"
          @click="route('financial')"
          style=""
          :src="images.Finance"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="family-image image"
          @click="route('family')"
          style=""
          :src="images.Family"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="car-image image"
          @click="route('car')"
          style=""
          :src="images.Car"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="house-image image"
          @click="route('my_house')"
          style=""
          :src="images.House"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="socal-image image"
          @click="route('socal_dream')"
          style=""
          :src="images.Socal"
          alt=""
          width="8%"
          height="30%"
        />
        <img
          class="knowlage-image image"
          @click="route('my_mental')"
          style=""
          :src="images.Knowledge"
          alt=""
          width="8%"
          height="30%"
        />
      </b-col>
    </b-row>
    <p class="text-center" style="margin-top: 5%; margin-bottom: 0%">
      <b-button to="/question/use_posetive" :disabled="next" variant="success"
        >Next</b-button
      >
    </p>
  </div>
</template>

<script>
import HeaderFile from "../../containers/HeaderFile";
const { getterIdForImage } = require("../../assets/js/service");
export default {
  components: {
    HeaderFile,
  },
  data() {
    return {
      pages: localStorage.getItem("pages"),
      next: true,
      profileImage: localStorage.getItem("profileImage"),
      images: {},
      token: localStorage.getItem("token"),
      id: localStorage.getItem("userId"),
    };
  },
  mounted() {
    let pages = this.pages.split(",");
    console.log(pages[0]);
let dataBase = "/users/getImages/";
      getterIdForImage(dataBase, this.id, this.token).then((resp) => {
        this.images = resp.data.images;
      
        console.log(this.images);
      });
    if (pages[0] >= 12) {
      this.next = false;
      
    }
  },
  methods: {
    route(value) {
      this.$router.replace(value);
    },
    print() {
      print();
    },
  },
};
</script>

<style>
.image:hover {
  opacity: 0.5;
}
.images:hover {
  opacity: 0.5;
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;

  margin: 0 auto 0 auto;
  transform-origin: bottom;
}

.health-image {
  width: 40%;
  height: 200px;

  margin-top: 42%;
  margin-left: -2%;
  clip-path: polygon(
    42% 1%,
    91% 39%,
    82% 58%,
    81% 76%,
    14% 91%,
    14% 68%,
    18% 48%,
    28% 23%
  );
}

.spirtual-image {
  width: 40%;
  height: 200px;
  margin-left: -22%;
  margin-top: 21px;
  clip-path: polygon(
    61% 13%,
    86% 10%,
    86% 70%,
    73% 73%,
    56% 79%,
    48% 84%,
    0 47%,
    9% 36%,
    28% 25%,
    44% 17%
  );
}

.vission-image {
  width: 40%;
  height: 200px;
  margin-left: -7%;
  margin-top: 24px;
  clip-path: polygon(
    84% 44%,
    93% 53%,
    42% 89%,
    32% 81%,
    16% 74%,
    6% 71%,
    8% 10%,
    28% 11%,
    51% 20%,
    72% 33%
  );
}

.financial-image {
  width: 40%;
  height: 200px;
  margin-top: -50%;
  margin-left: 65%;
  clip-path: polygon(
    84% 68%,
    83% 93%,
    18% 73%,
    18% 58%,
    14% 45%,
    10% 35%,
    59% 1%,
    70% 17%,
    75% 29%,
    83% 52%
  );
}

.profile-image {
  width: 40%;
  height: 200px;
  margin-top: 53%;
  margin-left: -59%;
  clip-path: circle(40% at 50% 50%);
}

.socal-image {
  width: 40%;
  height: 200px;
  margin-top: -27%;
  margin-left: 31%;
  clip-path: polygon(
    50% 17%,
    59% 15%,
    65% 12%,
    94% 71%,
    62% 83%,
    25% 82%,
    6% 75%,
    31% 15%,
    41% 17%
  );
}

.knowlage-image {
  width: 40%;
  height: 200px;
  margin-top: -52%;
  margin-left: 3%;
  clip-path: polygon(
    79% 28%,
    86% 33%,
    93% 37%,
    63% 99%,
    33% 78%,
    12% 51%,
    2% 28%,
    65% 10%,
    71% 19%
  );
}

.family-image {
  width: 40%;
  height: 200px;
  margin-top: -19%;
  margin-left: 59%;
  clip-path: polygon(28% 22%, 32% 12%, 57% 20%, 43% 40%, 21% 57%, 11% 38%, 19% 31%);
}
.car-image {
  width: 40%;
  height: 200px;
  margin-top: -35%;
  margin-left: 59%;
  clip-path: polygon(66% 44%, 75% 27%, 60% 21%, 43% 40%, 21% 57%, 31% 74%, 49% 59%);
}
.house-image {
  width: 40%;
  height: 200px;
  margin-top: -42%;
  margin-left: 59%;
  clip-path: polygon(76% 27%, 97% 33%, 85% 59%, 63% 81%, 41% 93%, 31% 74%, 57% 52%);
}
@media only screen and (max-width: 600px) {
  .health-image {
    width: 40%;
    height: 200px;

    margin-top: 60%;
    margin-left: -2%;
    clip-path: polygon(
      42% 1%,
      91% 39%,
      82% 58%,
      81% 76%,
      14% 91%,
      14% 68%,
      18% 48%,
      28% 23%
    );
  }

  .profile-image {
    width: 40%;
    height: 155px;
    margin-top: 74%;
    margin-left: -59%;
    clip-path: circle(40% at 50% 50%);
  }
  .family-image {
    width: 40%;
    height: 155px;
    margin-top: -19%;
    margin-left: 59%;
    -webkit-clip-path: polygon(
      28% 22%,
      32% 12%,
      57% 20%,
      43% 40%,
      21% 57%,
      11% 38%,
      19% 31%
    );
    clip-path: polygon(28% 22%, 32% 12%, 57% 20%, 43% 40%, 21% 57%, 11% 38%, 19% 31%);
  }
  .car-image {
    width: 40%;
    height: 155px;
    margin-top: -49%;
    margin-left: 59%;
    -webkit-clip-path: polygon(
      66% 44%,
      75% 27%,
      60% 21%,
      43% 40%,
      21% 57%,
      31% 74%,
      49% 59%
    );
    clip-path: polygon(66% 44%, 75% 27%, 60% 21%, 43% 40%, 21% 57%, 31% 74%, 49% 59%);
  }
  .house-image {
    width: 40%;
    height: 155px;
    margin-top: -60%;
    margin-left: 59%;
    -webkit-clip-path: polygon(
      76% 27%,
      97% 33%,
      85% 59%,
      63% 81%,
      41% 93%,
      31% 74%,
      57% 52%
    );
    clip-path: polygon(76% 27%, 97% 33%, 85% 59%, 63% 81%, 41% 93%, 31% 74%, 57% 52%);
  }
  .socal-image {
    width: 40%;
    height: 155px;
    margin-top: -52%;
    margin-left: 31%;
    -webkit-clip-path: polygon(
      50% 17%,
      59% 15%,
      65% 12%,
      94% 71%,
      62% 83%,
      25% 82%,
      6% 75%,
      31% 15%,
      41% 17%
    );
    clip-path: polygon(
      50% 17%,
      59% 15%,
      65% 12%,
      94% 71%,
      62% 83%,
      25% 82%,
      6% 75%,
      31% 15%,
      41% 17%
    );
  }
  .knowlage-image {
    width: 40%;
    height: 155px;
    margin-top: -88%;
    margin-left: 3%;
    -webkit-clip-path: polygon(
      79% 28%,
      86% 33%,
      93% 37%,
      63% 99%,
      33% 78%,
      12% 51%,
      2% 28%,
      65% 10%,
      71% 19%
    );
    clip-path: polygon(
      79% 28%,
      86% 33%,
      93% 37%,
      63% 99%,
      33% 78%,
      12% 51%,
      2% 28%,
      65% 10%,
      71% 19%
    );
  }
}
</style>
