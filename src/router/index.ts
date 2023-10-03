import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../../views/HomeView.vue"
import ToDoListView from "../../views/ToDoListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/toDoList/:id',
      name: 'todolist',
      component: ToDoListView,
      props: true
    }
  ]
})

export default router