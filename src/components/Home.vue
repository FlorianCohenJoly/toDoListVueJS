<script setup lang="ts">
import { useToDoListStore } from "@/stores/toDoList";
import { onBeforeMount, reactive, ref } from "vue";
import { RouterLink } from "vue-router";
import { ToDoList } from "@/classes/ToDoList";

const toDoListStore = useToDoListStore();

let isShow = ref(false)
let title = ref('')

onBeforeMount(()=>{
  if (localStorage.getItem('todolist')) {
    try {
      const stringifyToDoList = JSON.parse(localStorage.getItem('todolist') || '{}')
      toDoListStore.setToDoList(stringifyToDoList)
    } catch(e) {
      localStorage.removeItem('todolist');
    }
  }
})

const addNewToDoList = (text: string) => {
  const newToDoList = toDoListStore.addTodoList(text);
  title.value = '';
  const parsedToDoList = JSON.stringify(newToDoList)
  localStorage.setItem('todolist', parsedToDoList);
}

const deleteToDoList = (id: number) =>{
  toDoListStore.toDoList.forEach((list: ToDoList, index: number) => {
    if(list._id === id){
      toDoListStore.toDoList.splice(index, 1)
      console.log(toDoListStore.toDoList, index)
      localStorage.setItem('todolist', JSON.stringify(toDoListStore.toDoList));
    }
  })
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
      <li v-for="item in toDoListStore.toDoList" :key="item._id">{{ item._title }}
        <RouterLink :to="{ name:'todolist' , params: { id: item._id }}">go to todolist</RouterLink>
        <button @click="deleteToDoList(item._id)">Supprimer</button>
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