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
    <h1 class="green">ToDolists</h1>
    <div>
      <button class="add-new-list" @click="isShow = true" v-show="!isShow"> Créer une nouvelle liste </button>
      <input class="name-list-input" placeholder="Veuillez entrer un nom de toDoList" v-model="title" v-show="isShow" />
      <button class="confirm-add-list" @click="addNewToDoList(title)" v-show="isShow"> ajouter </button>
      <button class="" @click="isShow = false" v-show="isShow"> x </button>
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
  }
  h3 {
    font-size: 1.2rem;
  }
  li {
    color: #181818;
  }
  .add-new-list {
    border-radius: 5px;
    border: none;
    margin: 4px;
  }
  .name-list-input {
    border-radius: 2px;
    border: none;
    padding: 4px;
  }
  </style>