import React from "react";
import styled from "styled-components";
import logo from "../../Image/logo.svg";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <ButtonWrapper>
          <SignIn></SignIn>
          <SignUp></SignUp>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 90px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  width: 300px;
`;
const ButtonWrapper = styled.div``;
const SignIn = styled.div``;
const SignUp = styled.div``;
