import React from "react";
import styled from "styled-components";
import investify from "../../Image/invest.png";
import UnderLineButton from "../../Global/UnderLineButton";

const Investify = () => {
  return (
    <Container>
      <Image src={investify} />

      <Left>
        <Texts>Up To 25% Returns</Texts>
        <span>
          Access investment <br /> opportunities
        </span>
        <p>
          Invest securely and confidently on the go. Grow your <br /> money
          confidently by investing in pre-vetted investment <br />{" "}
          opportunities.
        </p>
        <UnderLineButton
          text="Learn more about Investments"
          transparent="50%"
          hoverColor="rgb(247, 240, 255)"
          color="rgb(155, 82, 222)"
        />
      </Left>
    </Container>
  );
};

export default Investify;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;
const Image = styled.img`
  width: 270px;
  margin-right: 50px;
`;
const Left = styled.div`
  margin-left: 50px;
  span {
    font-weight: bold;
    font-size: 50px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 16px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;
const Texts = styled.div`
  border-radius: 50px;
  background-color: rgb(247, 240, 255);
  color: rgb(155, 82, 222);
  padding: 9px 30px;
  width: fit-content;
`;
