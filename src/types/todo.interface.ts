export interface Todo{
    name: string;
    items: TodoItem[];
}

export interface TodoItem{
    id: number;
    name: string;
    done: boolean;
}

export interface TodoWithId extends Todo {
    id: number,
}