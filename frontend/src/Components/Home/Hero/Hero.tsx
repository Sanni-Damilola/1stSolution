import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Global/ButtonLinkToApp";
import CallToActionButton from "../../Global/CallToActionButton";
import heroImage from "../../Image/headerImg.png";
import investify from "../../Image/investify.png";
import myRent from "../../Image/rent.png";
import rect from "../../Image/rect.png";
import appleIcon from "../../Image/apple-icon.svg";
import googleIcon from "../../Image/google-icon.svg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <span>
            The Better Way <br /> to Save & Invest.
          </span>
          <p>
            PiggyVest helps over 4 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <CallToActionButton text="Create free account" padding="18px 20px" />
          <ButtonWrapper>
            <ButtonLinkToApp
              image={appleIcon}
              padding="12px 18px"
              marginTopValue="value"
              HoverBorderValue=""
              text="Get on iPhone"
            />
            <ButtonLinkToApp
              marginTopValue="value"
              HoverBorderValue=""
              image={googleIcon}
              padding="12px 15px"
              text="Get on Android"
            />
          </ButtonWrapper>
        </Right>
        <Left>
          <MyRent src={myRent} />
          <Investify src={investify} />
          <Rect src={rect} />
          <Image src={heroImage} />
        </Left>
      </Wrapper>
    </Container>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100px;
`;

const Right = styled.div`
  width: 50%;
`;
const Left = styled.div`
  width: 40%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  position: relative;
`;
const Image = styled.img`
  position: absolute;
  z-index: 1;
  left: 2px;
`;
const MyRent = styled.img`
  top: 34%;
  z-index: 2;
  width: 150px;
  height: 120px;
  left: -60px;
  position: absolute;
  object-fit: cover;
`;

const Investify = styled.img`
  bottom: 18%;
  z-index: 2;
  width: 150px;
  height: 110px;
  right: 60px;
  position: absolute;
  object-fit: cover;
`;
const Rect = styled.img``;

export default Hero;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 87%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 4.6em;
    font-weight: 800;
    line-height: 72px;
    font-family: UB-Bold;
    color: rgb(12, 24, 37);
  }

  p {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 17px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;
