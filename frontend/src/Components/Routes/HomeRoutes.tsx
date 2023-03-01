import React from "react";
import { useRoutes } from "react-router";
import DashBoard from "../DashBoard/DashBoard";
import SignIn from "../Home/Auth/SignIn";
import SignUp from "../Home/Auth/SignUp";
import HomePage from "../Home/HomePage/HomePage";
import DashBoadRoute from "./DashBoadRoute";

const HomeRoutes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signUp",
      element: <SignUp />,
    },
    {
      path: "/signIn",
      element: <SignIn />,
    },
    {
      path: "/dashBoard",
      element: <DashBoard />,
    },
  ]);

  return element;
};

export default HomeRoutes;
