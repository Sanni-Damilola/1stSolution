import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Props/ButtonLinkToApp";
import appleIcon from "../../Image/apple-icon.svg";
import googleIcon from "../../Image/google-icon.svg";
import CallToActionButton from "../../Props/CallToActionButton";

const Customers = () => {
  return (
    <Container>
      <Wrapper>
        <Replies></Replies>
        <Left>
          <span>4 Million + customers</span>
          <p>
            Since launching in 2016, over 4,000,000 people <br /> have used
            PiggyVest to manage their money better, avoid <br /> over-spending
            and be more accountable.
          </p>
          <CallToActionButton padding="10px 13px" text="Create free account" />
          <ButtonWrapper>
            <ButtonLinkToApp
              image={appleIcon}
              padding="12px 18px"
              text="Get on iPhone"
              marginTopValue=""
              HoverBorderValue="value"
            />
            <ButtonLinkToApp
              marginTopValue=""
              HoverBorderValue="value"
              image={googleIcon}
              padding="12px 15px"
              text="Get on Android"
            />
          </ButtonWrapper>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Customers;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const Replies = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;
`;
const Left = styled.div`
  margin-left: 50px;
  span {
    font-weight: bold;
    font-size: 50px;
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
