<script setup lang="ts">
import {useToDoListStore} from "@/stores/toDoList";
import {ref} from "vue";
import {RouterLink} from "vue-router";

const toDoListStore = useToDoListStore();
const toDoList = toDoListStore.getToDoList;

let isShow = ref(false);
let title = ref('');
let listToDoList = ref(toDoList)
const addNewToDoList = (text: string) => {
  toDoListStore.addTodoList(text);

  title.value = '';
}
const deleteToDoList = (id: number) =>{
  listToDoList.value = toDoListStore.deleteToDoListById(id)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">To Do List Home</h1>
    <div>
      <button @click="isShow = true" v-show="!isShow"> + </button>
      <input placeholder="Veuillez entrer un nom de toDoList" v-model="title" v-show="isShow" />
      <button @click="addNewToDoList(title)" v-show="isShow"> ajouter </button>
      <button @click="isShow = false" v-show="isShow"> x </button>
    </div>
    <ol>
      <li v-for="item in listToDoList" :key="item.id">{{ item._title }}
        <RouterLink :to="{ name:'todolist' , params: { id: item.id }}">go to todolist</RouterLink>
        <button @click="deleteToDoList(item.id)">Supprimer</button>
      </li>
    </ol>
  </div>
</template>


<style scoped>
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    position: relative;
    top: -10px;
  }
  h3 {
    font-size: 1.2rem;
  }
  li {
    color: #181818;
  }
  .greetings h1,
  .greetings h3 {
    text-align: center;
  }
  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
  </style>