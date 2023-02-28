import React from "react";
import styled from "styled-components";
import lock from "../Image/safelock.png";
import { BsArrowRight } from "react-icons/bs";

interface props {
  text1: string;
  text2: string;
  iconColor: string;
  buttoText: string;
  image;
}

const SavingsProps: React.FC<props> = ({
  text1,
  text2,
  iconColor,
  buttoText,
  image,
}) => {
  return (
    <Container>
      <Image src={image} />
      <span></span>
      <p>
        Build a dedicated savings faster on your terms automatically or
        manually.
      </p>
      <nav>
        <Icon>
          <BsArrowRight />
        </Icon>
        <Text>piggybank</Text>
      </nav>
    </Container>
  );
};

export default SavingsProps;

const Image = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;
const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  color: blue;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: rgb(227, 245, 255);
`;
const Text = styled.div`
  color: rgb(53, 53, 53);
  margin-left: 10px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  border-radius: 20px;
  background-color: #f9f9f9;
  padding-left: 30px;
  height: 340px;
  cursor: pointer;
  span {
    font-weight: bold;
    font-size: 26px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 16px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
    max-width: 290px;
  }

  nav {
    display: flex;
    align-items: center;
    margin-top: 50px;

    transition: all 650ms;
  }
  :hover {
    nav {
      margin-left: 12px;
    }
  }
`;
