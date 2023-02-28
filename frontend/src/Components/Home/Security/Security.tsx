import React from "react";
import styled from "styled-components";
import UnderLineButton from "../../Props/UnderLineButton";
import security from "../../Image/security.png";

const Security = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={security} />
        <Wrap>
          <Div>Your security is our priority</Div>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL <br /> security encryption to ensure that
            your information is comepletely protected from fraud.
          </p>
          <UnderLineButton />
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Security;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100px;
  margin-right: 30px;
`;
const Wrap = styled.div`
  P {
    font-size: 16px;
    font-weight: 600;
  }
`;

const Div = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
