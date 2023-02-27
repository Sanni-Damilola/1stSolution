import React from "react";
import { useRoutes } from "react-router";
import HomePage from "../Home/HomePage/HomePage";

const HomeRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);

  return element;
};

export default HomeRoutes;
