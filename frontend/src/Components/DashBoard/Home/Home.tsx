import React from 'react';
import styled from 'styled-components';
import DashHome from '../dashHome/DashHome';
import SideBar from './SideBar';



const Dash = () => {
  return (
    <div>

        <Main>
            
            <Side>
                 <SideBar />
            </Side>
            
            <Dashh>
                <DashHome />
            </Dashh>

        </Main>

    </div>
  )
}

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

