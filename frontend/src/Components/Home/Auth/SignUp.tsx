import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../Image/logo.svg";

const SignUp = () => {
  return (
    <Container>
      <Card>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Logo src={logo} />
        </Link>
        <Wrapper>
          <h2>Create a Secure Account</h2>
          <p>Welcome to the future of Savings & Investments</p>
          <InputWrap>
            <span>Full Name</span>
            <Input type={"text"} placeholder="Full Name" />
          </InputWrap>
          <InputWrap>
            <span>Email Address</span>
            <Input
              type={"email"}
              placeholder="Email Address: sannifortune@example.com"
            />
          </InputWrap>
          <InputWrap>
            <span>Phone Number</span>
            <Input type={"number"} placeholder="Phone Number" />
          </InputWrap>
          <InputWrap>
            <span>Password</span>
            <Input type={"password"} placeholder="Password" />
          </InputWrap>
          <InputWrap>
            <span>Referrer Phone or Promo Code (Optional)</span>
            <Input type={"text"} placeholder="Referrer Phone Or Code" />
          </InputWrap>
          <Button>create account</Button>
        </Wrapper>
        <Link style={{ textDecoration: "none" }} to={"/signIn"}>
          <pre>Already have an account? Log In</pre>
        </Link>
      </Card>
    </Container>
  );
};

export default SignUp;

const Button = styled.button`
  padding: 19px 115px;
  cursor: pointer;
  border-radius: 10px 10px 10px 0px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  text-transform: uppercase;
  background-color: rgb(8, 62, 158);
  border: 0;
  outline: none;
`;

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
  padding-top: 30px;
  margin-top: 50px;
  background-color: white;
  padding-bottom: 25px;
  border-radius: 30px 30px 30px 0px;
  width: 450px;
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
  margin-top: 30px;
`;
const Input = styled.input`
  width: 350px;
  height: 55px;
  margin-top: 8px;
  background-color: #edf2f7;
  outline: none;
  border: 0;
  border-radius: 5px;
  padding-left: 10px;

  ::placeholder {
    color: rgb(0, 0, 0, 0.3);
    font-size: 15px;
    font-weight: 500;
  }
`;
const Card = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  pre {
    margin-top: 30px;
    color: whitesmoke;
    cursor: pointer;

    :hover {
      color: rgb(223, 241, 255);
    }
  }
`;
