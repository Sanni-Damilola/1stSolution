import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <Container>
      <Card>
        <Logo />
        <Wrapper>
          <h2>Create a Secure Accoun</h2>
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
`;
const Logo = styled.img``;
const Wrapper = styled.div``;
const InputWrap = styled.div``;
const Input = styled.input``;
const Card = styled.div``;
