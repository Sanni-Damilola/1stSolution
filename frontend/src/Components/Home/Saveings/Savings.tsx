import React from "react";
import styled from "styled-components";
import CallToActionButton from "../../Props/CallToActionButton";
import SavingsProps from "../../Props/SavingsProps";

const Savings = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <span>
            4 ways to build <br /> your savings
          </span>
          <p>
            Earn 5%-15% when you save with any <br /> of these PiggyVest plans.
          </p>
          <CallToActionButton padding="10px 13px" text="Start Saving" />
        </Right>
        <BoxWrapper>
          <SavingsProps />
        </BoxWrapper>
      </Wrapper>
    </Container>
  );
};

export default Savings;

const Right = styled.div`
  span {
    font-weight: bold;
    font-size: 30px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 16px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;

const Wrapper = styled.div`
  width: 90%;
`;
const BoxWrapper = styled.div`
  flex-wrap: wrap;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
