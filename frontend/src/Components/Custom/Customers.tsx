import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../Props/ButtonLinkToApp";
import appleIcon from "../../Image/apple-icon.svg";
import googleIcon from "../../Image/google-icon.svg";


const Customers = () => {
  return (
    <Container>
      <Wrapper>
        <Replies></Replies>
        <Left>
          <ButtonWrapper>
            <ButtonLinkToApp
              image={appleIcon}
              padding="12px 18px"
              text="Get on iPhone"
            />
            <ButtonLinkToApp
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
  width: 63%;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  background-color: red;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const Replies = styled.div``;
const Left = styled.div`
  margin-left: 50px;
`;
