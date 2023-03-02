import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import styled from "styled-components";
import SideBarProps from "../Global/SideBarProps";
import logo from "../Image/logo.svg";
import { ImHome2 } from "react-icons/im";

const DashBoard = () => {
  // menu menuSidebar functions 👇👇
  const [menu, setMenu] = React.useState(false);
  const menuSidebar = () => {
    setMenu(!menu);
  }; // menu bar

  // menu Route functions 👇👇
  const [home, setHome] = React.useState(false);
  const homeRoute = () => {
    setHome(!home);
  }; // menu bar
  const [savings, setSavings] = React.useState(false);
  const savingsRoute = () => {
    setHome(!home);
  }; // menu bar
  const [invest, setInvest] = React.useState(false);
  const homeRoute = () => {
    setHome(!home);
  }; // menu bar
  const [home, setHome] = React.useState(false);
  const homeRoute = () => {
    setHome(!home);
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
            paddingleft={home ? "value" : ""}
            bg={home ? "" : "value"}
            color={home ? "" : "value"}
            displayIcon="value"
            padding={home ? "" : "value"}
            text="home"
            icon={<ImHome2 />}
          />
        </Hold>
        <Hold onClick={homeRoute}>
          <SideBarProps
            paddingleft={home ? "value" : ""}
            bg={home ? "" : "value"}
            color={home ? "" : "value"}
            displayIcon="value"
            padding={home ? "" : "value"}
            text="home"
            icon={<ImHome2 />}
          />
        </Hold>
        <Hold onClick={homeRoute}>
          <SideBarProps
            paddingleft={home ? "value" : ""}
            bg={home ? "" : "value"}
            color={home ? "" : "value"}
            displayIcon="value"
            padding={home ? "" : "value"}
            text="home"
            icon={<ImHome2 />}
          />
        </Hold>
        <Hold onClick={homeRoute}>
          <SideBarProps
            paddingleft={home ? "value" : ""}
            bg={home ? "" : "value"}
            color={home ? "" : "value"}
            displayIcon="value"
            padding={home ? "" : "value"}
            text="home"
            icon={<ImHome2 />}
          />
        </Hold>
      </MenuBar>
      <ManinDasboard></ManinDasboard>
    </Container>
  );
};

export default DashBoard;

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
  width: ${({ width }) => (width ? "260px" : "73px")};
  height: 100vh;
  flex-direction: column;
  display: flex;
  background-color: rgb(6, 40, 99);
  transition: all 500ms;
`;
const ManinDasboard = styled.div`
  background-color: green;
  width: calc(100% - 260px);
`;
