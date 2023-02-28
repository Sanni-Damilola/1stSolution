import React from "react";
import styled from "styled-components";

const CustomersReply = () => {
  return (
    <Container>
      <Date></Date>
      <Wrapper>
        <Image />
        <Left>
          <Name></Name>
          <Message></Message>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default CustomersReply;

const Container = styled.div`
display: flex;
flex-direction: column;

`;
const Date = styled.span``;
const Wrapper = styled.div``;
const Image = styled.img``;
const Left = styled.div``;
const Name = styled.b``;
const Message = styled.p``;
