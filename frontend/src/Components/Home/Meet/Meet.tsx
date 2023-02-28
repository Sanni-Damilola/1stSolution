import React from "react";
import styled from "styled-components";
import image from "../../Image/pexels-canva-studio-3194524.jpg";

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
      </Right>
      <Left src={image} />
    </Container>
  );
};

export default Meet;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
