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

const Container = styled.div``;
const Right = styled.div`
  width: 60%;
  height: 100%;
  background-color: rgb(13, 96, 216);
  height: 400px;
`;
const Left = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
`;
