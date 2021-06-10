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
            :data-points="[65, 59, 84, 84, 51, 55, 40]"
            point-hover-background-color="primary"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers!="loading .."&&numberOfUnApprovedUsers!="loading .."'>
      <CWidgetDropdown color="danger" :header="numberOfUnApprovedUsers" text="Unapproved Customers">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3" v-if='numberofApprovedUsers!="loading .."&&numberOfUnApprovedUsers!="loading .."'>
      <CWidgetDropdown color="danger" :header="numberofApprovedUsers" text="Approved Customers">
        <template #default>
          
        </template>
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
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
            :data-points="[1, 18, 9, 17, 34, 22, 11]"
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
            :data-points="[78, 81, 80, 45, 34, 12, 40]"
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
      if(dashboardData.numberofApprovedUsers)this.numberofApprovedUsers = (dashboardData.numberofApprovedUsers).toString();
      if(dashboardData.numberOfUnApprovedUsers)this.numberOfUnApprovedUsers = (dashboardData.numberOfUnApprovedUsers).toString();
    
  },
  methods: {
   
  },
}
</script>
