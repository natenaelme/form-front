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
          <b-col>
            <h5 class="text-center">Diposites Appproved & Sent</h5>
            <div v-if="!DashboardData">
              <h3>Loading ...</h3>
            </div>
            <CChartPieExample :data="pieChart2" />
          </b-col>
        </b-row>
      </CCardBody>
      <CCardFooter>
        <div v-if="!DashboardData">
              <h3 class="text-center">Loading ...</h3>
            </div>
        <CRow class="text-center" v-if="DashboardData">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">Verified Customers vs All Customers</div>
            <strong>{{allCustomers}} Customers ({{allVerifiedCustomer/allCustomers*100}}%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="40"
            />
          </CCol>
          <CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">
            <div class="text-muted">Verified Customers vs Approved Customers</div>
            <strong>{{approvedCustomer}} Approved Customers ({{approvedCustomer/allCustomers*100}}%)</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="info"
              :value="20"
            />
          </CCol>

          
        </CRow>
      </CCardFooter>
    </CCard>

    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader> Customers &amp; Staffs </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="12" v-if="!DashboardData">
                <h3 class="text-center">Loading ..</h3>
              </CCol>
              <CCol sm="12" lg="12" v-if="DashboardData">
                <CRow>
                  <CCol sm="6">
                    <CCallout color="warning">
                      <small class="text-muted">Male Verifid Users</small><br />
                      <strong class="h4">{{ maleCustomers }}</strong>
                    </CCallout>
                  </CCol>
                  <CCol sm="6">
                    <CCallout color="success">
                      <small class="text-muted">Femail Verifid Users</small
                      ><br />
                      <strong class="h4">{{ femaleCustomers }}</strong>
                    </CCallout>
                  </CCol>
                </CRow>
                <hr class="mt-0" />
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-user" class="progress-group-icon" />
                      <span class="title">Male</span>
                      <span class="ml-auto font-weight-bold"
                        >{{
                          ((maleCustomers / allVerifiedCustomer) * 100).toFixed(
                            2
                          )
                        }}%</span
                      >
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(maleCustomers / allVerifiedCustomer) * 100"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div class="progress-group mb-5">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-user-female"
                        class="progress-group-icon"
                      />
                      <span class="title">Female</span>
                      <span class="ml-auto font-weight-bold">{{
                        ((femaleCustomers / allVerifiedCustomer) * 100).toFixed(
                          2
                        )
                      }}</span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(femaleCustomers / allVerifiedCustomer) * 100"
                        color="success"
                      />
                    </div>
                  </div>
                </ul>
                <b-row>
                  <CCol sm="12">
                    <CCallout color="warning">
                      <small class="text-muted">All Staff Users</small><br />
                      <strong class="h4">{{ allManagementUser}}</strong>
                    </CCallout>
                  </CCol>
                </b-row>
                <ul class="horizontal-bars type-2">
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon name="cil-globe-alt" class="progress-group-icon" />
                      <span class="title">It Users</span>
                      <span class="ml-auto font-weight-bold">
                        {{ ItUsers }}
                        <span class="text-muted small"
                          >({{
                            ((ItUsers / allManagementUser) * 100).toFixed(2)
                          }}%)</span
                        >
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(ItUsers / allManagementUser) * 100"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-user"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Customer Service</span>
                      <span class="ml-auto font-weight-bold">
                        {{ customer_service }}
                        <span class="text-muted small"
                          >({{
                            (
                              (customer_service / allManagementUser) *
                              100
                            ).toFixed(2)
                          }}%)</span
                        >
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(customer_service / allManagementUser) * 100"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-user-plus"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Mentor</span>
                      <span class="ml-auto font-weight-bold">
                        {{ mentor }}
                        <span class="text-muted small"
                          >({{
                            ((mentor / allManagementUser) * 100).toFixed(2)
                          }}%)</span
                        >
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(mentor / allManagementUser) * 100"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="progress-group">
                    <div class="progress-group-header">
                      <CIcon
                        name="cil-bank"
                        height="17"
                        class="progress-group-icon"
                      />
                      <span class="title">Accountant</span>
                      <span class="ml-auto font-weight-bold">
                        {{ accountant }}
                        <span class="text-muted small"
                          >&nbsp;({{
                            ((accountant / allManagementUser) * 100).toFixed(2)
                          }}%)</span
                        >
                      </span>
                    </div>
                    <div class="progress-group-bars">
                      <CProgress
                        class="progress-xs"
                        :value="(accountant / allManagementUser) * 100"
                        color="success"
                      />
                    </div>
                  </div>
                  <div class="divider text-center">
                    <CButton color="link" size="sm" class="text-muted">
                      <CIcon name="cil-options" />
                    </CButton>
                  </div>
                </ul>
              </CCol>
            </CRow>
            <br />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import MainChartExample from "./charts/MainChartExample";
import WidgetsDropdown from "./widgets/WidgetsDropdown";
import WidgetsBrand from "./widgets/WidgetsBrand";
import CChartPieExample from "./charts/CChartPieExample";
const { getters } = require("../assets/js/service");

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
        name: ["All Deposit", "Deposit Approved By Accountant"],
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
    getters("messages/test").then((resp) => {
      console.log("fggssssssssssssssssssssssssssssssssssssssssssssssssssss");
      console.log(resp);
      this.DashboardData = resp.data.responce;

      this.maleCustomers = this.DashboardData.Malecustomers;
      this.ItUsers = this.DashboardData.it;
      this.customer_service = this.DashboardData.customer_service;
      this.mentor = this.DashboardData.mentor;
      this.approvedCustomer = this.DashboardData.approvedCustomers;
      this.accountant = this.DashboardData.accountant;
      this.allManagementUser =
        this.ItUsers + this.customer_service + this.mentor + this.accountant;
      this.femaleCustomers = this.DashboardData.Femalecustomers;
      this.allVerifiedCustomer = this.DashboardData.verifiedCustomers;
      this.allCustomers = this.DashboardData.allCustomers;
      this.pieChart1.value = [
        this.DashboardData.allDepositNumber,
        this.DashboardData.DepositeApprovedByAccountant,
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
