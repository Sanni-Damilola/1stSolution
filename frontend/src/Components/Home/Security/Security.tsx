import React from "react";
import styled from "styled-components";

const Security = () => {
  return (
    <Container>
      <Wrapper>
        <Image />
        <Wrap>
          <b>Your security is our priority</b>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is comepletely protected from fraud.
          </p>
        </Wrap>
        
      </Wrapper>
    </Container>
  );
};

export default Security;

const Wrapper = styled.div``
const Image = styled.img``
const Wrap = styled.div``

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
