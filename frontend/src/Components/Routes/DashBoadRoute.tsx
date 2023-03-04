import React from "react";
import { useRoutes } from "react-router-dom";
import DashBoard from "../DashBoard/DashBoard";

const DashBoadRoute = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <DashBoard />,
    },
  ]);
  return element;
};

export default DashBoadRoute;
