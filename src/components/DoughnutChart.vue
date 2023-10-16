<template>
  <div class="chart-container">
    <Doughnut :data="chartData()" :options="chartOptions()" />
    </div>
</template>

<script lang="ts" setup>
  const props = defineProps(['summaryData'])

import { Chart as ChartJS, ArcElement, Tooltip} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

function sortedSummaryData() {
  let sortable = []

  for (const sectorName in props.summaryData) {
    sortable.push([sectorName, props.summaryData[sectorName]])
  }
  sortable.sort((a, b) => a[1] - b[1])
  const sortedSectorNames = sortable.map((x) => x[0])
  const sortedSectorCounts = sortable.map((x) => x[1])
  console.log(sortedSectorCounts)
  return [sortedSectorNames, sortedSectorCounts]
}


function chartData() {
  const [sortedSectorNames, sortedSectorCounts] = sortedSummaryData()
  return {
    labels: Object.keys(props.summaryData), 
    datasets: [
      {
        backgroundColor: [
          '#9e0142', '#d53e4f', '#f46d43', '#fdae61',
        '#fee08b','#ffffbf','#e6f598','#abdda4','#66c2a5','#3288bd','#5e4fa2'],
        data: sortedSectorCounts
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