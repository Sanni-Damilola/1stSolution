import React from "react";
import styled from "styled-components";

const SavingsProps = () => {
  return (
    <Container>
      <Image />
      <span>
        4 ways to build <br /> your savings
      </span>
      <p>
        Earn 5%-15% when you save with any <br /> of these PiggyVest plans.
      </p>
      <ButtonWrapper>
        <Icon></Icon>
        <Text>

        </Text>
      </ButtonWrapper>
    </Container>
  );
};

export default SavingsProps;

const Container = styled.div`
  span {
    font-weight: bold;
    font-size: 30px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 17px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;

const Image = styled.img``;
const ButtonWrapper = styled.div``;
const Icon = styled.div`
  /* display: flex;
justify-content: center;
align-items: center; */
  border-radius: 50%;
  padding: 10px;
`;
const Text = styled.div`
  font-size: 30px;
  color: rgb(53, 53, 53);
`;
