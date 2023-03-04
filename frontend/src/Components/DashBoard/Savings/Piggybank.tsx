import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Pigbox from "./Pigbox";

const Piggybank = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Top>
            <Left>
              <Bold>
                <h1>Piggybank</h1>
              </Bold>
            </Left>
            <Right>
              <Img src={""} />
            </Right>
          </Top>
          <Bottom>
            <NavLink to="/savings/piggybank" style={{ textDecoration: "none" }}>
              <Navs>Piggybank</Navs>
            </NavLink>
            <NavLink to="/savings/safelocks" style={{ textDecoration: "none" }}>
              <Navs2>Safelock</Navs2>
            </NavLink>
            <NavLink to="/savings/target" style={{ textDecoration: "none" }}>
              <Navs2>Targets</Navs2>
            </NavLink>
            <NavLink to="/savings/flex" style={{ textDecoration: "none" }}>
              <Navs2>Flex Naira</Navs2>
            </NavLink>
            <Navs2>Flex Dollar</Navs2>
          </Bottom>
          <Pigbox />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Piggybank;
const Navs2 = styled.div`
  color: #a0aec0;
  font-family: U8, sans-serif;
  /* margin-bottom: 5px; */
  /* border-bottom: 3px solid rgb(8, 62, 158); */
  width: 80px;
  margin-left: 40px;
  line-height: 40px;
  display: flex;
`;
const Navs = styled.div`
  color: #1a202c;
  font-family: U8, sans-serif;
  /* margin-bottom: 5px; */
  border-bottom: 3px solid rgb(8, 62, 158);
  width: 80px;
  line-height: 40px;
  display: flex;
`;
const Bottom = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e8f0;
  margin-top: 10px;
  display: flex;
`;
const Img = styled.img`
  height: 45px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const P = styled.div`
  p {
    color: #718096;
    font-family: Karla, sans-serif;
    font-size: 0.875rem;
    margin: 0;
  }
  margin-top: 7px;
`;
const Bold = styled.div`
  h1 {
    font-size: 29px;
    color: rgb(8, 62, 158);
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 88%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  /* background-color: red; */
  overflow: hidden;
`;
