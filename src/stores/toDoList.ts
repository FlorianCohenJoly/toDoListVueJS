import { ToDoList } from "@/classes/ToDoList";
import { defineStore } from 'pinia'
import { ToDo } from "@/classes/ToDo";

export const useToDoListStore = defineStore('toDoList', {
    state: ()=>({
        toDoList: [] as ToDoList[],
        id: 0
    }),
    getters:{
        getToDoList(): ToDoList[]{
            return this.toDoList
        },
    },
    actions:{
        getById(id: number){
            return this.toDoList.find(todolist => todolist._id === id)
        },

        addTodoList(title: string) {
            let list  = new ToDoList(this.id++, title, [] as ToDo[])
            this.toDoList.push(list);
        },

        deleteToDoListById(id: number): ToDoList[]{
            this.toDoList = this.toDoList.filter(tdl => tdl.id !== id);
            return this.toDoList;
        }
    },
})
