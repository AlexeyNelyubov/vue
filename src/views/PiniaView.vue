<script setup lang="ts">
import { useCounterStore } from '../stores/counter.js'

const store = useCounterStore();
</script>

<template>
  <div class="main-information">
  <span>composible</span>
  <div class="functionality">
      <span>Counter</span>
      <button @click="store.increment" class="custom-button">+</button>
      <button @click="store.decrement" class="custom-button">-</button>
      <span>{{ store.counter }}</span>
      <span>{{ store.doubleCount }}</span>
    </div>
  </div>
</template>
