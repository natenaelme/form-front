<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" :header="allcustomer" text="All Customers">
        <template #default>
         
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers!="loading .."&&numberOfUnApprovedUsers!="loading .."'>
      <CWidgetDropdown color="warning" :header="numberOfUnApprovedUsers" text="Unapproved Customers">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers!="loading .."&&numberOfUnApprovedUsers!="loading .."'>
      <CWidgetDropdown color="success" :header="numberofApprovedUsers" text="Approved Customers">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers=="loading .."&&numberOfUnApprovedUsers=="loading .."'>
      <CWidgetDropdown color="danger" :header="unverifiedCustomers" text="Unverified Customers">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers=="loading .."&&numberOfUnApprovedUsers=="loading .."'>
      <CWidgetDropdown
        color="warning"
        :header="verifiedCustomers"
        text="Verified Customers"
      >
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :data-points="[]"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers=="loading .."&&numberOfUnApprovedUsers=="loading .."'>
      <CWidgetDropdown
        color="info"
        :header="approvedCustomers"
        text="Approved By Mentor"
      >
        <template #default>
        
        </template>
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple },
  props:['DashboardData'],
  data() {
    return {
      
      numberofApprovedUsers:"loading ..",
      numberOfUnApprovedUsers:"loading ..",

      allcustomer:"loading ..",
      unverifiedCustomers:"loading ..",
      verifiedCustomers:"loading ..",
      approvedCustomers:"loading .."
    }
  },
  
  mounted() {
    console.log("ffffffffffffffffffffffffffffffffffffffffff");
    console.log(this.DashboardData);
    var dashboardData =  this.DashboardData;
      this.allcustomer = (dashboardData.allCustomers).toString();
      if(dashboardData.numberofApprovedUsers!= undefined)this.numberofApprovedUsers = (dashboardData.numberofApprovedUsers).toString();
      if(dashboardData.numberOfUnApprovedUsers!= undefined)this.numberOfUnApprovedUsers = (dashboardData.numberOfUnApprovedUsers).toString();
      console.log(dashboardData.numberOfUnApprovedUsers + " dsfsd")
      console.log(this.numberofApprovedUsers  +  "dddfssssssssss" + this.numberOfUnApprovedUs);
      if(dashboardData.unVerifiedCustomers!= undefined){this.unverifiedCustomers = (dashboardData.unVerifiedCustomers).toString()};
      if(dashboardData.verifiedCustomers!= undefined)this.verifiedCustomers = (dashboardData.verifiedCustomers).toString();
      if(dashboardData.approvedCustomers!= undefined)this.approvedCustomers = (dashboardData.approvedCustomers).toString();
    
  },
  methods: {
   
  },
}
</script>
