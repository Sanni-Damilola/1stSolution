import React from "react";
import styled from "styled-components";
// import img1 from "../Assets/bank.png";
// import img2 from "../Assets/naira.png";
// import img3 from "../Assets/lock.png";
// import img4 from "../Assets/target.png";
// import img5 from "../Assets/dor.png";
// import img6 from "../Assets/at.png";
import { NavLink } from "react-router-dom";

const Cards = () => {
  return (
    <Container>
      <NavLink to="/savings/piggybank" style={{ textDecoration: "none" }}>
        <Card1>
          <Img src={""} />
          <Bold>
            <p>PiggyBank</p>
          </Bold>
          <P>
            <p>
              Strict savings automatically. Daily, weekly or Monthly. 10% p.a
            </p>
          </P>
          <Bold>
            <p>₦0.00</p>
          </Bold>
        </Card1>
      </NavLink>

      <NavLink to="/savings/flex" style={{ textDecoration: "none" }}>
        <Card2>
          <Img src={""} />
          <Bold2>
            <p>Flex Naira</p>
          </Bold2>
          <P>
            <p>
              Flexible savings for emergencies. Free transfers, withdrawals etc.
              8% p.a
            </p>
          </P>
          <Bold2>
            <p>₦0.00</p>
          </Bold2>
        </Card2>
      </NavLink>

      <NavLink to="/savings/safelock" style={{ textDecoration: "none" }}>
        <Card3>
          <Img src={""} />
          <Bold3>
            <p>Safelock</p>
          </Bold3>
          <P>
            <p>
              Lock funds to avoid temptations. Upfront interest. Up to 13% p.a
            </p>
          </P>
          <Bold3>
            <p>₦0.00</p>
          </Bold3>
        </Card3>
      </NavLink>

      <NavLink to="/savings/target" style={{ textDecoration: "none" }}>
        <Card4>
          <Img src={""} />
          <Bold4>
            <p>Targets</p>
          </Bold4>
          <P>
            <p>Reach your unique individual saving goals. 9% p.a</p>
          </P>
          <Bold4>
            <p>₦0.00</p>
          </Bold4>
        </Card4>
      </NavLink>

      <Card5>
        <Img src={""} />
        <Bold5>
          <p>Flex Dollar</p>
        </Bold5>
        <P>
          <p>Save & grow your wealth in dollars. Up to 7% p.a in dollars</p>
        </P>
        <Bold5>
          <p>₦0.00</p>
        </Bold5>
      </Card5>

      <Card6>
        <Img src={""} />
        <Bold6>
          <p>PocketApp®</p>
        </Bold6>
        <P>
          <p>Withdraw your savings to your pocket faster ⚡️</p>
        </P>
        <Bold6>
          <p>Connect Account</p>
        </Bold6>
      </Card6>
    </Container>
  );
};

export default Cards;
const Bold6 = styled.div`
  p {
    color: rgb(117, 63, 246);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card6 = styled.div`
  background-color: rgb(241, 236, 254);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold5 = styled.div`
  p {
    color: rgb(0, 0, 0);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card5 = styled.div`
  background-color: rgb(239, 244, 245);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold4 = styled.div`
  p {
    color: rgb(39, 174, 96);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card4 = styled.div`
  background-color: rgb(220, 255, 235);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
`;
const Bold3 = styled.div`
  p {
    color: rgb(34, 149, 242);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card3 = styled.div`
  background-color: rgb(231, 246, 255);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;
const Bold2 = styled.div`
  p {
    color: rgb(231, 67, 156);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Card2 = styled.div`
  background-color: rgb(255, 234, 245);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;
const P = styled.div`
  p {
    color: #4a5568;
    font-family: Karla, sans-serif;
    line-height: 1.5;
    font-size: 14px;
  }
`;
const Bold = styled.div`
  p {
    color: rgb(13, 96, 216);
    font-weight: 700;
    /* font-family: U8,sans-serif; */
    font-size: 19px;
    margin-top: 10px;
  }
`;
const Img = styled.img`
  margin-top: 10px;
`;
const Card1 = styled.div`
  background-color: rgb(204, 240, 254);
  cursor: pointer;
  width: 275px;
  height: 185px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  border-bottom-right-radius: 13px;
  border-bottom-left-radius: 7px;
  padding: 20px;
  margin-bottom: 15px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 45px;
  justify-content: space-between;
  margin-bottom: 45px;
`;
