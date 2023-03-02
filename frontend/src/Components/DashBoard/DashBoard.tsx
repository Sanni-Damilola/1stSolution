import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import SideBarProps from "../Global/SideBarProps";
import logo from "../Image/logo.svg";

const DashBoard = () => {
  return (
    <Container>
      <MenuBar>
        <MenuWrapper>
          <Menu>
            <AiOutlineMenu />
          </Menu>
          <Logo src={logo} />
        </MenuWrapper>
        <SideBarProps />
      </MenuBar>
      <ManinDasboard></ManinDasboard>
    </Container>
  );
};

export default DashBoard;
const Logo = styled.img`
  height: 26px;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 40px;
`;
const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3px;
  font-size: 25px;
  color: white;
  cursor: pointer;
  margin-right: 30px;
`;

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
