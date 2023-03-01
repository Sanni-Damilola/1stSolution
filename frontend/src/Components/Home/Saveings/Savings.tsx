import React from "react";
import styled from "styled-components";
import CallToActionButton from "../../Global/CallToActionButton";
import SavingsProps from "../../Global/SavingsProps";
import lock from "../../Image/safelock.png";
import target from "../../Image/target.png";
import flex from "../../Image/flex.png";
import piggy from "../../Image/piggy.png";

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
            iconColor="rgb(224,239,255)"
            text1="Automated Savings"
            text2="Build a dedicated savings faster on your terms automatically or manually."
            buttonText="Piggybank"
            image={piggy}
          />
          <SavingsProps
            iconColor="rgb(227,245,255)"
            text1="Fixed Savings"
            text2="Lock money away for a fixed duration with no access to it until maturity. It’s like having a custom fixed deposit."
            buttonText="Safelock"
            image={lock}
          />
          <SavingsProps
            iconColor="#e4fff1"
            text1="Goal-oriented Savings"
            text2="Reach all your savings goals faster. Save towards multiple goals on your own or with a group."
            buttonText="Target Savings"
            image={target}
          />
          <SavingsProps
            iconColor="rgb(253,231,245)"
            text1="Flexible Savings"
            text2="Save, transfer, withdraw, manage and organise your money for free at any time."
            buttonText="Flex Naira"
            image={flex}
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

  margin-top: 70px;
`;

const Wrapper = styled.div`
  width: 87%;
  display: flex;
  justify-content: space-between;
`;
const BoxWrapper = styled.div`
  flex-wrap: wrap;
  padding-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 70%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
