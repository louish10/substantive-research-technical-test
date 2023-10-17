<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
const error = ref(false)
const interactions = ref([{date: '', name: '', sector_id: ''}])
import DoughnutChart from './DoughnutChart.vue'

  function summariseData() {
    var summary = {
        'Communication Services': 0,
        'Consumer Discretionary': 0,
        'Consumer Staples': 0,
        'Energy': 0,
        'Financials': 0,
        'Healthcare': 0,
        'Industrials': 0,
        'Information Technology': 0,
        'Materials': 0,
        'Real Estate': 0,
        'Utilities': 0,
    }

    for (const interaction of interactions.value) {
        if (interaction.name in summary){
            summary[interaction.name] += 1
        }
    }
    return summary
  }

fetch('https://substantive.pythonanywhere.com/')
  .then((res) => res.json())
  .then((data) => {
    loading.value = false
    interactions.value = data.interactions
    console.log(summariseData())
  })
  .catch((error) => {
    console.error(error)
    error.value = true
  })

</script>

<template>
  <div>
    <div v-if="loading">loading</div>
    <div v-else>
      <p class="description">
        Here's a breakdown of your latest interactions. Hover over a segment to see which sector it belongs to.
      </p>
      <DoughnutChart :summary-data="summariseData()"></DoughnutChart>
    </div>
    <div v-if="error">There was an error loading the data.</div>
  </div>
</template>

<style lang="stylus">
.description 
  font-size 18px
  margin-bottom 30px

</style>