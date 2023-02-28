import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Props/ButtonLinkToApp";
import CallToActionButton from "../../Props/CallToActionButton";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <span>The Better Way to Save & Invest.</h2>
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

const Right = styled.div``;
const Left = styled.div``;
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
`;
