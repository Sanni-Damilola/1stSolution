import React from "react";
import styled from "styled-components";
import logo from "../../Image/logo.svg";

const SignUp = () => {
  return (
    <Container>
      <Card>
        <Logo src={logo} />
        <Wrapper>
          <h2>Create a Secure Account</h2>
          <p>Welcome to the future of Savings & Investments</p>
          <InputWrap>
            <span>Full Name</span>
            <Input />
          </InputWrap>
        </Wrapper>
      </Card>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgb(6, 40, 99);
  height: 800px;
`;
const Logo = styled.img`
  height: 33px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: white;
  height: 80%;
  border-radius: 30px 30px 30px 0px;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    color: rgb(8, 62, 158);
    font-size: 20px;
    margin: 0;
    font-weight: 700;
  }
  span {
    color: rgb(74, 85, 104);
    font-size: 13px;
    font-weight: 700;
    text-align: start;
  }
  p {
    color: rgb(74, 85, 104);
    font-weight: 500;
    font-size: 14px;
    text-align: center;
  }
`;
const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input``;
const Card = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
