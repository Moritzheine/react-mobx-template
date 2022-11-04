import React from "react";
import { CellStore } from "./cellStore";


export class RootStore {
    private readonly _cellStore: CellStore = new CellStore();

    get cellStore(): CellStore {
        return this._cellStore;
    }
}

export const StoreContext = React.createContext<RootStore | null>(null);