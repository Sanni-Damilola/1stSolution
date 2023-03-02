import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Image/headerLogo.svg";
import Logo from "../../Global/Logo";

const Footer = () => {
  return (
    <>
      <Foot>
        <Contain>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Logo image={logo} height="33px" />
          </Link>

          <Products>
            <Pig>Products</Pig>

            <Flex>
              <About>Piggbank</About>
              <About>Invest</About>
              <About>Safelock</About>
              <About>Target Savings</About>
              <About>Flex Naira</About>
            </Flex>
          </Products>

          <Products>
            <Pig>Company</Pig>

            <Flex>
              <About>About</About>
              <About>FAQs</About>
              <About>Blog</About>
            </Flex>
          </Products>

          <Products>
            <Pig>Legal</Pig>

            <Flex>
              <About>Terms</About>
              <About>Privacy</About>
              <About>Security</About>
            </Flex>
          </Products>

          <Socials>
            <AiFillFacebook />
            <AiFillTwitterSquare />
            <AiFillInstagram />
          </Socials>
        </Contain>
      </Foot>

      <Power>Powered by CodeLab (C.2023)</Power>
    </>
  );
};

export default Footer;

const Power = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Socials = styled.div`
  font-size: 30px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
`;

const About = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 10px;
  color: #0c1825;
`;

const Flex = styled.div``;

const Pig = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #0c1825;
`;

const Products = styled.div``;

const Contain = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

const Foot = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
