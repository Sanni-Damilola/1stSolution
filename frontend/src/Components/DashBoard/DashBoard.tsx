import React from "react";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import SideBarProps from "../Global/SideBarProps";
import logo from "../Image/logo.svg";
import { ImHome2 } from "react-icons/im";
import { RxPerson, RxTarget } from "react-icons/rx";
import { IoRocketOutline } from "react-icons/io5";
// import { Link } from "react-router-dom";
import MainDetailDashBoard from "../Routes/MainDetailDashBoard";

const DashBoard = () => {
  // menu menuSidebar functions 👇👇
  const [menu, setMenu] = React.useState(false);
  const menuSidebar = () => {
    setMenu(!menu);
    setAccount(true);
    setInvest(true);
    setAccount(true);
    setSavings(true);
    setHome(true);
  }; // menu bar

  // menu Route functions 👇👇
  const [home, setHome] = React.useState(true);
  const homeRoute = () => {
    setHome(false);
    setInvest(true);
    setAccount(true);
    setSavings(true);
  }; // menu bar
  const [savings, setSavings] = React.useState(true);
  const savingsRoute = () => {
    setSavings(false);
    setInvest(true);
    setAccount(true);
    setHome(true);
  }; // menu bar
  const [invest, setInvest] = React.useState(true);
  const investRoute = () => {
    setInvest(false);
    setSavings(true);
    setAccount(true);
    setHome(true);
  }; // menu bar
  const [account, setAccount] = React.useState(true);
  const accountRoute = () => {
    setAccount(false);
    setSavings(true);
    setInvest(true);
    setHome(true);
  }; // menu bar

  return (
    <Container>
      <MenuBar width={menu ? "" : "value"}>
        <MenuWrapper>
          <Menu onClick={menuSidebar}>
            <AiOutlineMenu />
          </Menu>
          <Logo src={logo} />
        </MenuWrapper>
        <Hold onClick={homeRoute}>
          <SideBarProps
            paddingleft={home ? "" : "value"}
            bg={home ? "" : "value"}
            color={home ? "" : "value"}
            displayIcon="value"
            padding={home ? "" : "value"}
            text="home"
            icon={<ImHome2 />}
          />
        </Hold>
        <Hold onClick={savingsRoute}>
          <SideBarProps
            paddingleft={savings ? "" : "value"}
            bg={savings ? "" : "value"}
            color={savings ? "" : "value"}
            displayIcon="value"
            padding={savings ? "" : "value"}
            text="savings"
            icon={<RxTarget />}
          />
        </Hold>
        <Hold onClick={investRoute}>
          <SideBarProps
            paddingleft={invest ? "" : "value"}
            bg={invest ? "" : "value"}
            color={invest ? "" : "value"}
            displayIcon="value"
            padding={invest ? "" : "value"}
            text="invest"
            icon={<IoRocketOutline />}
          />
        </Hold>
        <Hold onClick={accountRoute}>
          <SideBarProps
            paddingleft={account ? "" : "value"}
            bg={account ? "" : "value"}
            color={account ? "" : "value"}
            displayIcon="value"
            padding={account ? "" : "value"}
            text="account"
            icon={<RxPerson />}
          />
          <LogoOut>
            <Icon>
              <AiOutlineLogout />
            </Icon>
            <LogOutText>logout</LogOutText>
          </LogoOut>
        </Hold>
      </MenuBar>
      <ManinDasboard>
        <MainDetailDashBoard />
      </ManinDasboard>
    </Container>
  );
};

export default DashBoard;

const LogoOut = styled.div`
  display: flex;
  padding-left: 20px;
  align-items: center;
  cursor: pointer;
  transition: all 350ms;
  margin-top: 280px;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-88deg);
  color: white;
  margin-top: 3px;
  font-size: 25px;
`;
const LogOutText = styled.div`
  color: white;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
  margin-left: 30px;
  border-radius: 7px 7px 7px 0px;
`;
const Hold = styled.div``;

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
const MenuBar = styled.div<{ width: string }>`
  width: ${({ width }) => (width ? "320px" : "73px")};
  height: 100vh;
  flex-direction: column;
  display: flex;
  background-color: rgb(6, 40, 99);
  transition: all 500ms;
`;
const ManinDasboard = styled.div`
  width: 100%;
`;
