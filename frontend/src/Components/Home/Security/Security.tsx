import React from "react";
import styled from "styled-components";
import UnderLineButton from "../../Global/UnderLineButton";
import security from "../../Image/security.png";

const Security = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={security} />
        <Wrap>
          <span>Your security is our priority</span>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL <br /> security encryption to ensure that
            your information is comepletely protected from fraud.
          </p>
          <UnderLineButton
            transparent="40%"
            hoverColor="#e3f5ff"
            text="Learn more"
            color="blue"
          />
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
  span {
    font-weight: bold;
    font-size: 30px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 17px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
