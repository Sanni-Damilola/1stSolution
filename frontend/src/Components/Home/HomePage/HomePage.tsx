import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Investify from "../Investify/Investify";
import Meet from "../Meet/Meet";
import Savings from "../Saveings/Savings";
import Security from "../Security/Security";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Security />
      <Savings />
      <Investify />
      <Meet />
    </div>
  );
};

export default HomePage;
