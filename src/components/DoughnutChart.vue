<template>
  <div class="chart-container">
    <Doughnut :data="chartData()" :options="chartOptions()" />
    </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['summaryData'])

import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js'
import { Doughnut } from 'vue-chartjs'


function chartData() {
  return {
    labels: Object.keys(props.summaryData), 
    datasets: [
      {
        backgroundColor: [
          '#9e0142', '#d53e4f', '#f46d43', '#fdae61',
        '#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2'],
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