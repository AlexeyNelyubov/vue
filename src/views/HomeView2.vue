<script setup lang="ts">
import { ref } from 'vue'
import HomeView from './HomeView.vue'
import PiniaView from './PiniaView.vue'
import ComposibleView from './ComposibleView.vue'

const stateName = ref<string>('HomeView')

type ObjectType = {
  [key: string]: object
}
const states: ObjectType = {
  HomeView: HomeView,
  PiniaView: PiniaView,
  ComposibleView: ComposibleView
}
</script>

<template>
  <div id="aww">
    <nav class="header">
      <button class="link" @click="stateName = 'PiniaView'">Pinia</button>
      <button class="link" @click="stateName = 'ComposibleView'">Composible</button>
    </nav>

    <component :is="states[stateName]"></component>
  </div>
</template>

<style scoped>
.header {
  height: 50px;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  background-color: aqua;
}

.link {
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: #000;
  text-decoration: none;
}

.link:hover {
  color: #868585;
  cursor: pointer;
}
</style>
