import {ToDo} from "@/classes/ToDo";

export class ToDoList{
    _title: string
    _toDo: ToDo[]

    constructor(title: string, toDo: ToDo[]) {
        this._title = title
        this._toDo = toDo
    }

    get toDo(): ToDo[] {
        return this._toDo;
    }

    set toDo(value: ToDo[]) {
        this._toDo = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }
}