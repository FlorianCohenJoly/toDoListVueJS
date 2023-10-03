<script setup lang="ts">
import { defineProps, ref } from 'vue';

const { name, items } = defineProps(['name', 'items']);

const isChecked = ref(false);
</script>

<template>
  <div class="card">

    <div class="card-content">
      <h2>{{ name }}</h2>
      <div class="items-container">
        <input type="checkbox" v-model="isChecked" class="checkbox" />
        <p v-for="(item, index) in items" :key="index">{{ item }}</p>
        <button style="color: red;" >Supprimer </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card {
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  max-width: 300px;
}

.card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.items-container {
  display: flex;
  align-items: center;
}

.checkbox {
  margin-right: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}

</style>