import React from "react";
import styled from "styled-components";
import logo from "../../Image/logo.svg";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 1) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);

  return (
    <Container boxShadow={show ? "value" : ""}>
      <Wrapper>
        <Logo src={logo} />
        <ButtonWrapper>
          <SignIn>Sign in</SignIn>
          <SignUp>Create free account</SignUp>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div<{ boxShadow: string }>`
  width: 100%;
  height: 90px;
  position: sticky;
  z-index: 999;
  top: 0;
  transition: all 650ms;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" : "none"};
`;

const Wrapper = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.img`
  height: 33px;
`;
const ButtonWrapper = styled.div``;
const SignIn = styled.button`
  padding: 18px 23px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 9px;
  transition: all 360ms;
  color: rgb(12, 24, 37);
  background-color: white;
  font-size: 16.5px;
  font-weight: 600;
  :hover {
    border: 1px solid rgb(13, 96, 216);
    color: rgb(13, 96, 216);
  }
`;
const SignUp = styled.button`
  border-radius: 9px;
  border: 0;
  outline: none;
  background-color: rgb(12, 24, 37);
  transition: all 360ms;
  color: white;
  padding: 18px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 16.5px;
  cursor: pointer;
  :hover {
    background-color: rgb(13, 96, 216);
  }
`;
