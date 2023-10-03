<script setup lang="ts">
import {useToDoListStore} from "@/stores/toDoList";
import {reactive, ref} from "vue";
import TodoCard from "@/components/TodoCard.vue";
import {useTodoStore} from "@/stores/toDos";
import type {Todo} from "@/types/todo.interface";

const toDoList = useToDoListStore();
const props = defineProps(['id'])
const todoStore = useTodoStore();

const todo = reactive<Todo>({
  name: "",
  items: [],
});

let actualToDoList = ref(toDoList.getById(parseInt(props.id)));

const handleSubmit = () => {
  todoStore.addTodo(todo);
};
</script>


<template>
  <div class="wrapper">
    <h1>{{actualToDoList.title}}</h1>
    <div>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">Ajouter une todo</label>
          <input type="text" id="name" v-model="todo.name" />
        </div>

        <div>
          <label for="items">Ajouter un items </label>
          <input type="text" id="items" v-model="todo.items" />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
    <p v-for="todo in todoStore.todos" :key="todo.id" class="todo-card">
      <TodoCard :name="todo.name" :items="todo.items" />
    </p>
  </div>
</template>


<style scoped>
  h1 {
    color : #181818;
    font-weight: bold;
  }
  p{
    color: #181818;
  }
</style>