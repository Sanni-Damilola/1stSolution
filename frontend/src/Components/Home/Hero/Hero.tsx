import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Props/ButtonLinkToApp";
import CallToActionButton from "../../Props/CallToActionButton";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <h2></h2>
          <p></p>
          <CallToActionButton text="Create free account" padding="18px 20px" />
          <ButtonLinkToApp />
        </Right>
        <Left>
          <Image></Image>
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
