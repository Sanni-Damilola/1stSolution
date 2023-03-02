import React from "react";
import styled from "styled-components";

const Dash = () => {
  return (
    <div>
      <Main>
        <Side></Side>

        <Dashh></Dashh>
      </Main>
    </div>
  );
};

export default Dash;

const Dashh = styled.div`
  width: 100%;
  height: 100%;
`;

const Side = styled.div`
  width: 250px;
  position: fixed;
`;

const Main = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: flex-start;
`;
