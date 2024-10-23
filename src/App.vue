<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="header">
    <RouterLink to="/pinia" class="link">Pinia</RouterLink>
    <RouterLink to="/reactive" class="link">Reactive</RouterLink>
    <RouterLink to="/composible" class="link">Composable</RouterLink>
  </nav>
  <RouterView />
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
