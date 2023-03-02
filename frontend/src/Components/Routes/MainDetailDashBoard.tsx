import React from "react";
import { useRoutes } from "react-router-dom";
import Investify from "../DashBoard/Investify/Investify";

const MainDetailDashBoard = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Investify />,
    },
  ]);
  return element;
};

export default MainDetailDashBoard;
