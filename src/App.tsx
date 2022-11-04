import React, { FC, ReactElement } from "react";
import "./App.css";
import { RootStore, StoreContext } from "./stores";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./routes/WebRoutes";

const App: FC = (): ReactElement => {
  const stores = new RootStore();

  return (
    <StoreContext.Provider value={stores}>
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
