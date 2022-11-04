import React, { FC, ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
import { Main } from "../components";

const WebRoutes: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
    </Routes>
  );
};

export default WebRoutes;
