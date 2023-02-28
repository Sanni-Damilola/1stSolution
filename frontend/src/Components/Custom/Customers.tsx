import React from "react";
import styled from "styled-components";

const Customers = () => {
  return (
    <Container>
      <Replies></Replies>
      <Left></Left>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Customers;

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
