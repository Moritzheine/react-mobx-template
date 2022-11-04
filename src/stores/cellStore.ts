import { makeAutoObservable } from "mobx"


export class CellStore {

    constructor() {
        makeAutoObservable(this)
    }

}