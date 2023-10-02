export class ToDo {

    _name: string
    _description: string
    _isFinished: boolean

    constructor(name: string, description: string, isFinished: boolean) {
        this._name = name
        this._description = description
        this._isFinished = isFinished
    }

    get name(): string {
        return this._name
    }

    set name(name: string) {
        this._name = name
    }

    get description(): string{
        return this._description
    }

    set description(description: string){
        this._description = description
    }

    get isFinished(): boolean {
        return this._isFinished
    }

    set isFinished(isFinished: boolean){
        this._isFinished = isFinished
    }
}