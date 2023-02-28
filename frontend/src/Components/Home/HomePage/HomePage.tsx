import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Savings from "../Saveings/Savings";
import Security from "../Security/Security";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Security />
      <Savings />
    </div>
  );
};

export default HomePage;
