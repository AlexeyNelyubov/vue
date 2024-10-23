<script setup lang="ts">
import { useCounterStore } from '../stores/counterComposable.js'

const store = useCounterStore();
</script>

<template>
  <div class="main-information">
    <span>composible</span>
    <div class="functionality">
      <span>pinia</span>
      <button @click="store.increment" class="custom-button">+</button>
      <button @click="store.decrement" class="custom-button">-</button>
      <span>{{ store.counter }}</span>
      <span>{{ store.doubleCount }}</span>
    </div>
  </div>
</template>
