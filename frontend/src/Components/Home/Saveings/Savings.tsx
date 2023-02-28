import React from 'react'
import styled from 'styled-components';

const Savings = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <span>Your security is our priority</span>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL <br /> security encryption to ensure that
            your information is comepletely protected from fraud.
          </p>
        </Right>
        <BoxWrapper></BoxWrapper>
      </Wrapper>
    </Container>
  );
}

export default Savings

const Right = styled.div`
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

const Wrapper = styled.div``
const BoxWrapper = styled.div``
const Container = styled.div``