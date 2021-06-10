<template>
  <div>
    <div v-if="!DashboardData">
      <h3>Loading ...</h3>
    </div>
    <WidgetsDropdown v-if="DashboardData" :DashboardData="DashboardData" />
    <CCard>
      <CCardBody>
        <b-row>
          <b-col>
            <h5 class="text-center">Diposites Appproved</h5>
            <div v-if="!DashboardData">
              <h3>Loading ...</h3>
            </div>
            <CChartPieExample v-if="DashboardData" :data="pieChart1" />
          </b-col>
          
        </b-row>
      </CCardBody>
      <CCardFooter>
        <div v-if="!DashboardData">
              <h3 class="text-center">Loading ...</h3>
            </div>
        <CRow class="text-center" v-if="DashboardData">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">All Customers vs Approved Customers</div>
            <strong>{{allCustomers}} Customers ({{approvedCustomer/allCustomers*100}}%  Approved)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="approvedCustomer/allCustomers*100"
            />
          </CCol>
          

          
        </CRow>
      </CCardFooter>
    </CCard>

    
  </div>
</template>

<script>
import MainChartExample from "./charts/MainChartExample";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import CChartPieExample from "./charts/CChartPieExample";
const { PostVerification } = require("../assets/js/service");

export default {
  name: "Dashboard",
  components: {
    MainChartExample,
    WidgetsDropdown,
    WidgetsBrand,
    CChartPieExample,
  },
  data() {
    return {
      approvedCustomer:null,
      allCustomers: null,
      pieChart1: {
        name: ["All Customers", "Approved Customers"],
        value: [],
      },
      pieChart2: {
        name: ["Deposit Approved By Accountant", "Verification Sent"],
        value: [],
      },
      DashboardData: null,
      maleCustomers: null,
      femaleCustomers: null,
      allVerifiedCustomer: null,
      ItUsers: null,
      customer_service: null,
      mentor: null,
      accountant: null,
      selected: "Month",
    };
  },

  beforeCreate() {
    PostVerification("/users/mentorsDashboard",
    localStorage.getItem('token'),
    {id:localStorage.getItem('userId')}).then((resp) => {
      console.log("fggssssssssssssssssssssssssssssssssssssssssssssssssssss");
      console.log(resp);
      this.DashboardData = resp.data.responce;
      this.approvedCustomer = this.DashboardData.numberofApprovedUsers;
      this.allCustomers =this.DashboardData.allCustomers;
      
      this.pieChart1.value = [
        this.DashboardData.allCustomers,
        this.DashboardData.numberofApprovedUsers,
      ];
      this.pieChart2.value = [
        this.DashboardData.DepositeApprovedByAccountant,
        this.DashboardData.DepositeSent,
      ];
    });
  },

  methods: {
    color(value) {
      let $color;
      if (value <= 25) {
        $color = "info";
      } else if (value > 25 && value <= 50) {
        $color = "success";
      } else if (value > 50 && value <= 75) {
        $color = "warning";
      } else if (value > 75 && value <= 100) {
        $color = "danger";
      }
      return $color;
    },
  },
};
</script>
