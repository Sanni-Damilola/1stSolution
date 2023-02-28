import React from "react";
import styled from "styled-components";

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
      <Left />
    </Container>
  );
};

export default Meet;

const Container = styled.div``;
const Right = styled.div``;
const Left = styled.div``;
