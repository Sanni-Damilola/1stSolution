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
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"email"} placeholder="Full Name" />
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
  padding-bottom: 20px;
`;
const Logo = styled.img`
  height: 33px;
  margin-top: 70px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: white;
  padding-bottom: 20px;
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
    font-size: 12px;
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
  margin-top: 40px;
`;
const Input = styled.input`
  width: 350px;
  height: 55px;
  margin-top: 10px;
  background-color: #edf2f7;
  outline: none;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    color: rgb(0, 0, 0, 0.3);
  }
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
