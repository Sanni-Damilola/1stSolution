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
  width: 460px;
  flex-direction: column;
  justify-content: center;
  border-radius: 5px;
  height: 190px;
  background-color: rgb(249, 249, 249);
`;
const Date = styled.span`
  color: rgb(0, 0, 0, 0.5);
  font-size: 13px;
  text-align: right;
  margin-right: 24px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;
const Left = styled.div``;
const Name = styled.b`
  font-size: 13px;
`;
const Message = styled.p`
  margin: 0;
  font-size: 13px;
  max-width: 380px;
`;
