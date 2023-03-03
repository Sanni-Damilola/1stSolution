import React from "react";
import { useRoutes } from "react-router-dom";
import DashSaving from "../DashBoard/DashBoardSavings/DashSaving";
import Investify from "../DashBoard/Investify/Investify";

const MainDetailDashBoard = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Investify />,
    },
    // {
    //   path: "/",
    //   element: <DashSaving />,
    // },
    // {
    //   path: "/",
    //   element: <Investify />,
    // },
    // {
    //   path: "/",
    //   element: <Investify />,
    // },
    // {
    //   path: "/",
    //   element: <Investify />,
    // },
  ]);
  return element;
};

export default MainDetailDashBoard;
