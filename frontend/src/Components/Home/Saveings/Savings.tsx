import React from "react";
import styled from "styled-components";
import CallToActionButton from "../../Props/CallToActionButton";
import SavingsProps from "../../Props/SavingsProps";
import lock from "../../Image/safelock.png";

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
          <SavingsProps
            iconColor=""
            text1="Automated Savings"
            text2="Build a dedicated savings faster on your terms automatically or manually."
            buttonText="Piggybank"
            image={lock}
          />
          <SavingsProps
            iconColor=""
            text1="Automated Savings"
            text2="Build a dedicated savings faster on your terms automatically or manually."
            buttonText="Piggybank"
            image={lock}
          />
          <SavingsProps
            iconColor=""
            text1="Automated Savings"
            text2="Build a dedicated savings faster on your terms automatically or manually."
            buttonText="Piggybank"
            image={lock}
          />
          <SavingsProps
            iconColor=""
            text1="Automated Savings"
            text2="Build a dedicated savings faster on your terms automatically or manually."
            buttonText="Piggybank"
            image={lock}
          />
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BoxWrapper = styled.div`
  flex-wrap: wrap;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  width: 70%;
  background-color: red;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
