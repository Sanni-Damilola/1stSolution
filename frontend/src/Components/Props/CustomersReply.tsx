import React from "react";
import styled from "styled-components";
import image from "../Image/adebola.jpeg";

const CustomersReply = () => {
  return (
    <Container>
      <Date>hursday, 27th of October 2022 by 13:03 PM </Date>
      <Wrapper>
        <Image src={image} />
        <Left>
          <Name>Adebola P</Name>
          <Message>
            avenue for me to do so. Simple to use, very friendly interface and I
            just love the fact that they answer my mails immediately. Love the
            energy!!!
          </Message>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default CustomersReply;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
`;
const Date = styled.span`
  color: rgb(0, 0, 0, 0.5);
  font-size: 14px;
`;
const Wrapper = styled.div``;
const Image = styled.img``;
const Left = styled.div``;
const Name = styled.b``;
const Message = styled.p``;
