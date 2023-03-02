import React from "react";
import styled from "styled-components";
import logo from "../Image/logo.svg";

const DashBoard = () => {
  return (
    <Container>
      <MenuBar>
        <MenuWrapper>
          <Menu></Menu>
          <Logo src={logo} />
        </MenuWrapper>
      </MenuBar>
      <ManinDasboard></ManinDasboard>
    </Container>
  );
};

export default DashBoard;
const Logo = styled.img`
  height: 33px;
`;

const MenuWrapper = styled.div``;
const Menu = styled.div``;

const Container = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
`;
const MenuBar = styled.div`
  width: 260px;
  height: 100vh;
  flex-direction: column;
  display: flex;
  background-color: rgb(6, 40, 99);
`;
const ManinDasboard = styled.div`
  background-color: green;
  width: calc(100% - 260px);
`;
