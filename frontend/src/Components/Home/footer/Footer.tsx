import React from "react";
import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../Image/headerLogo.svg";

const Footer = () => {
  return (
    <>
      <Foot>
        <Contain>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Logo src={logo} />
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

// const = styled.div``;

// const = styled.div``;

// const = styled.div``;

const Power = styled.div`
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 30px;
`;

// const Icon = styled.div`
// border-radius: 5px;
// /* margin-right: 10px; */
// /* font-size: 30px; */
// background-color: #0c1825;
// `;

const Socials = styled.div`
  font-size: 30px;
  cursor: ponter;
  /* gap: 2rem; */
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

const Logo = styled.img`
  height: 33px;
`;

const Contain = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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
