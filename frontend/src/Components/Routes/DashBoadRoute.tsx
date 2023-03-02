import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";
import Investify from "../DashBoard/Investify/Investify";

const DashBoadRoute = () => {
  const element = useRoutes([
    {
      path: "/dashBoard",
      children: [
        {
          index: true,
          element: <DashBoard />,
        },
        {
          path: "/investify",
          element: <Investify />,
        },
      ],
    },
  ]);
  return element;
};

export default DashBoadRoute;
