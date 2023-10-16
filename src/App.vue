<script setup lang="ts">
import DataDisplay from './components/DataDisplay.vue'
</script>

<template>
  <div class="content">
    <header>
      <h1 class="title">Substantive Research</h1>
    </header>

    <main>
      <DataDisplay></DataDisplay>
      <h1></h1>
    </main>
    </div>
</template>

<style scoped>

.title {
  text-align: center
}
.content{
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {

}
</style>
