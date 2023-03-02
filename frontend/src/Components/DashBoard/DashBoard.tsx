import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DashBoard = () => {
  return (
    <Container>
      <MenuBar></MenuBar>
      <ManinDasboard>
        <Link to={"/"}></Link>
      </ManinDasboard>
    </Container>
  );
};

export default DashBoard;

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
