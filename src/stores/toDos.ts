import { defineStore } from "pinia";
import type { Todo, TodoWithId } from "@/types/todo.interface";

interface TodoStoreState {
    todos: TodoWithId[];
}

export const useTodoStore = defineStore("todos", {
    state: (): TodoStoreState => ({
        todos: [],
    }),
    actions: {
        addTodo(todo: Todo) {
            const responseTodo = {
                ...todo,
                id: Math.random(),
            };
            this.todos.push(responseTodo);
        },
    },
});