import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

interface props {
  text1: string;
  text2: string;
  iconColor: string;
  buttonText: string;
  image: string;
}

const SavingsProps: React.FC<props> = ({
  text1,
  text2,
  iconColor,
  buttonText,
  image,
}) => {
  return (
    <Container>
      <Image src={image} />
      <span>{text1}</span>
      <p>{text2}</p>
      <nav>
        <Icon color={iconColor}>
          <BsArrowRight />
        </Icon>
        <Text>{buttonText}</Text>
      </nav>
    </Container>
  );
};

export default SavingsProps;

const Image = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;
const Icon = styled.div<{ color: string }>`
  display: flex;
  width: 40px;
  height: 40px;
  color: blue;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.color};
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
  margin: 30px;
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
