<template>
  <CChartPie
    :datasets="defaultDatasets"
    :labels="data.name"
  />
</template>

<script>
import { CChartPie } from '@coreui/vue-chartjs'

export default {
  props:['data'],
  name: 'CChartPieExample',
  components: { CChartPie },
  computed: {
    defaultDatasets () {
      return [

        {
          backgroundColor: [
            '#41B883',
            '#E46651',
            '#00D8FF',
            '#DD1B16'
          ],
          data: this.data.value
        }
      ]
    }
  }
}
</script>
