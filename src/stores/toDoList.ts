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
            let randomId = Math.floor(Math.random() * 1000000)
            let list  = new ToDoList(randomId, title, [] as ToDo[])
            this.toDoList.push(list);
            return this.toDoList;
        },
        setToDoList(toDoList: ToDoList[]){
            if (toDoList){
                this.toDoList = toDoList
            }
        },

        deleteToDoListById(id: number){
            this.toDoList = this.toDoList.filter(tdl => tdl.id !== id);
        }
    },
})
