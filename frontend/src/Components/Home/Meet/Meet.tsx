import React from "react";
import styled from "styled-components";
import image from "../../Image/pexels-canva-studio-3194524.jpg";
import { BsArrowRight } from "react-icons/bs";

const Meet = () => {
  return (
    <Container>
      <Right>
        <span>
          Access investment <br /> opportunities
        </span>
        <p>
          Invest securely and confidently on the go. Grow your <br /> money
          confidently by investing in pre-vetted investment <br />{" "}
          opportunities.
        </p>
        <Button>
          <Icon>
            <BsArrowRight />
          </Icon>
          <Text>Meet Felicia</Text>
        </Button>
      </Right>
      <Left src={image} />
    </Container>
  );
};

export default Meet;

const Button = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 500ms;

  background-image: linear-gradient(
    transparent 0,
    transparent 70%,
    rgb(238, 243, 244) 0%,
    rgb(238, 243, 244) 90%
  );
  background-position-x: left;
  background-repeat: no-repeat;
  background-size: 0 100%;
  cursor: pointer;
  :hover {
    background-size: 100% 100%;
  }
  width: fit-content;
`;
const Icon = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  color: blue;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
`;
const Text = styled.div`
  color: white;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Right = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(13, 96, 216);
  height: 500px;
  padding-left: 100px;
  span {
    font-weight: bold;
    font-size: 50px;
    color: white;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    font-weight: 500;
    font-size: 16px;
    line-height: 27.2px;
    color: white;
  }
`;
const Left = styled.img`
  width: 50%;
  height: 500px;
  object-fit: cover;
  text-decoration: none solid rgb(53, 53, 53);
`;
