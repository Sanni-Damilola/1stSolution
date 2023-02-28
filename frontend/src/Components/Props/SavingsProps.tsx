import React from "react";
import styled from "styled-components";
import lock from "../Image/safelock.png";
import { BsArrowRight } from "react-icons/bs";

interface props {
  text1: string;
  text2: string;
}

const SavingsProps = () => {
  return (
    <Container>
      <Image src={lock} />
      <span>Automated Savings</span>
      <p>
        Build a dedicated savings faster on your terms automatically or
        manually.
      </p>
      <ButtonWrapper>
        <Icon>
          <BsArrowRight />
        </Icon>
        <Text>piggybank</Text>
      </ButtonWrapper>
    </Container>
  );
};

export default SavingsProps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 320px;
  border-radius: 20px;
  background-color: #f9f9f9;
  padding-left: 30px;
  height: 340px;
  span {
    font-weight: bold;
    font-size: 26px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 15px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;

const Image = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  /* display: flex;
justify-content: center;
align-items: center; */
  border-radius: 50%;
  padding: 10px;
`;
const Text = styled.div`
  color: rgb(53, 53, 53);
`;
