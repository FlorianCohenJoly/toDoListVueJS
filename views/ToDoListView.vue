<script setup lang="ts">
import {useToDoListStore} from "@/stores/toDoList";
import {ref} from "vue";

const toDoList = useToDoListStore();
const props = defineProps(['id'])

let actualToDoList = ref(toDoList.getById(parseInt(props.id)));
</script>


<template>
  <div>
    <p>{{actualToDoList}}</p>
    <p>id : {{props.id}}</p>
  </div>
</template>


<style scoped>
  p{
    color: #181818;
  }
</style>