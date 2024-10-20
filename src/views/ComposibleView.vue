<script setup lang="ts">
  import { ref } from 'vue';
  const counter = ref<number>(0)
</script>

<template>
  <div class="main-information">composible</div>
  <div>
    <span>Counter</span>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
    <span>{{ counter }}</span>
  </div>
</template>
