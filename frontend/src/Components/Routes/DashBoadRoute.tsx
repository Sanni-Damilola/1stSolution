import React from "react";
import { useRoutes } from "react-router-dom";
import HomeDashBoard from "../DashBoard/Home/HomeDashBoard";

const DashBoadRoute = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomeDashBoard />,
    },
  ]);
  return element;
};

export default DashBoadRoute;
