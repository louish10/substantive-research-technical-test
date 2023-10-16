<template>
  <div class="chart-container">
    <Doughnut :data="chartData()" :options="chartOptions()" />
    </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['summaryData'])

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'


function chartData() {
  return {
    labels: Object.keys(props.summaryData), 
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: Object.values(props.summaryData) 
      }
    ]
  }
}

function chartOptions() {
  return {
    responsive: false,
    maintainAspectRatio: true,
    layout: {
      width: 900
    }
  }
}
ChartJS.register(ArcElement, Tooltip)

</script>

<style>
.chart-container{
  width: 600px
}
</style>