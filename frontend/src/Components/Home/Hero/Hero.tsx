import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Props/ButtonLinkToApp";
import CallToActionButton from "../../Props/CallToActionButton";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <span>The Better Way to Save & Invest.</span>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <CallToActionButton text="Create free account" padding="18px 20px" />
          <ButtonLinkToApp />
        </Right>
        <Left>
          <Image />
        </Left>
      </Wrapper>
    </Container>
  );
};

const Right = styled.div`
  width: 50%;
`;
const Left = styled.div`
  width: 40%;
  height: 650px;
  background-color: green;
`;
const Image = styled.img``;

export default Hero;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 55px;
    font-weight: 700;
    line-height: 72px;
    font-family: UB-Bold;
    color: rgb(12, 24, 37);
  }

  p {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-align: center;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 400;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;

