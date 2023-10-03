import {ToDo} from "@/classes/ToDo";

export class ToDoList{
    _id: number
    _title: string
    _toDo: ToDo[]

    constructor(id:number, title: string, toDo: ToDo[]) {
        this._id = id
        this._title = title
        this._toDo = toDo
    }

    get id(): number{
        return this._id
    }

    set id(id: number){
        this._id = id
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