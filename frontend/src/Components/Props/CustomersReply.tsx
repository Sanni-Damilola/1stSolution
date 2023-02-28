import React from "react";
import styled from "styled-components";

interface props {
  date: string;
  image: string;
  name: string;
  message: string;
}

const CustomersReply: React.FC<props> = ({ date, image, message, name }) => {
  return (
    <Container>
      <Date>{date}</Date>
      <Wrapper>
        <Image src={image} />
        <Left>
          <Name>{name}</Name>
          <Message>{message}</Message>
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
  margin: 10px;
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
const Left = styled.div`
  overflow: hidden;
`;
const Name = styled.b`
  font-size: 13px;
`;
const Message = styled.p`
  margin: 0;
  font-size: 12px;
  letter-spacing: 1px;
  max-width: 380px;
`;
