<script setup lang="ts">
  import { store } from '../stores/counterReactive.js'
</script>

<template>
  <div class="main-information">
    <span>reactive</span>
    <div class="functionality">
      <span>Counter</span>
      <button @click="store.increment()" class="custom-button">+</button>
      <button @click="store.decrement()" class="custom-button"> -</button>
      <span>{{ store.counter }}</span>
      <span>{{ store.doubleCount() }}</span> 
    </div>  
  </div>
</template>