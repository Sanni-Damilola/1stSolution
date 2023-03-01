import React from "react";
import { useRoutes } from "react-router";
import SignIn from "../Home/Auth/SignIn";
import SignUp from "../Home/Auth/SignUp";
import HomePage from "../Home/HomePage/HomePage";

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
  ]);

  return element;
};

export default HomeRoutes;
