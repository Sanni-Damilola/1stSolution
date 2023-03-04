import React from "react";
import { useRoutes } from "react-router-dom";
import HomeDashBoard from "../DashBoard/Home/HomeDashBoard";
import Investify from "../DashBoard/Investify/Investify";
import Flex from "../DashBoard/Savings/Flex";
import Piggybank from "../DashBoard/Savings/Piggybank";
import SavingsDashboard from "../DashBoard/Savings/SavingsDashBoard";
import Target from "../DashBoard/Savings/Target";
import SaveLock from "../DashBoard/Savings/SaveLock";

const DashBoadRoute = () => {
  const element = useRoutes([
    {
      path: "/eee",
      element: <HomeDashBoard />,
    },
    {
      path: "/sdfghj",
      element: <HomeDashBoard />,
    },
    {
      path: "/",
      children: [
        {
          index: true,
          element: <SavingsDashboard />,
        },
        {
          path: "/savings/piggybank",
          element: <Piggybank />,
        },
        {
          path: "/savings/flex",
          element: <Flex />,
        },
        {
          path: "/savings/target",
          element: <Target />,
        },
        {
          path: "/savings/safelock",
          element: <SaveLock />,
        },
      ],
    },
    {
      path: "/invest",
      element: <Investify />,
    },
  ]);
  return element;
};

export default DashBoadRoute;
