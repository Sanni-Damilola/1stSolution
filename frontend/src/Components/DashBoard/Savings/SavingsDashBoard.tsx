import React from "react";
import styled from "styled-components";
import Savings from "./Savings";

const SavingsDashboard = () => {
  return (
    <Container>
      <Savings />
    </Container>
  );
};

export default SavingsDashboard;

const Container = styled.div`
  display: flex;
`;
