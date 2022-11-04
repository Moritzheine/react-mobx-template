import React, { FC, ReactElement } from "react";
import "./App.css";
import { RootStore, StoreContext } from "./stores";
import { Main } from "./components";

const App: FC = (): ReactElement => {
  const stores = new RootStore();

  return (
    <StoreContext.Provider value={stores}>
      <Main />
    </StoreContext.Provider>
  );
};

export default App;
