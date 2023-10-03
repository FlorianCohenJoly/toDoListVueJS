<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
body{
  background-color: white;
}
header {
  display: flex;
  align-items: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a:first-of-type {
  border: 0;
}
</style>
