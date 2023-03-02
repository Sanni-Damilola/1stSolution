import React from 'react';
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineHome, AiFillRocket, AiOutlineUser, AiOutlineLogout } from "react-icons/ai"
// import { BiTargetLock } from "react-icons/bi"
import { FiTarget } from "react-icons/fi"



const SideBar = () => {


  return (
    <div>

        <Side>

            <Contain>

                <Top>

                    <Logo>
                        <Icon>
                            {/* <AiOutlineMenu /> */}
                        </Icon>
                        <LogoText style={{marginLeft:"25px"}}>LOGO</LogoText>
                    </Logo>

                    <Buttons>
                        <Icon>
                            <AiOutlineHome />
                        </Icon>
                        <Button>Home</Button>
                    </Buttons>

                    <Buttons>
                        <Icon>
                            <FiTarget />
                        </Icon>
                        <Button>Savings</Button>
                    </Buttons>

                    <Buttons>
                        <Icon>
                            <AiFillRocket />
                        </Icon>
                        <Button>Invest</Button>
                    </Buttons>

                    <Buttons>
                        <Icon>
                            <AiOutlineUser />
                        </Icon>
                        <Button>Account</Button>
                    </Buttons>


                </Top>

                <Bottom>
                    <Buttons>
                        <Icon style={{rotate:"calc(-90deg)"}}>
                            <AiOutlineLogout />
                        </Icon>
                        <Button>Logout</Button>
                    </Buttons>
                </Bottom>

            </Contain>

        </Side>

    </div>
  )
}

export default SideBar

// const Side = styled.div``;

// const Side = styled.div``;

// const Side = styled.div``;

// const Side = styled.div``;

// const Side = styled.div``;

const Bottom = styled.div``;

const Button = styled.div`
font-size: 16px;
font-weight: 700;
color: white;
rotate: calc();
`;

const Buttons = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;
cursor: pointer;
`;

const LogoText = styled.div`
margin-bottom: 5px;
`;

const Icon = styled.div`
font-size: 23px;
color: white;
margin-right: 15px;
`;

const Logo = styled.div`
display: flex;
align-items: center;
color: white;
margin-bottom: 35px;
font-size: 23px;
font-weight: 700;
`;

const Top = styled.div`
/* margin-top: 20px; */
`;

const Contain = styled.div`
width: 80%;
height: 95%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-top: 20px;
/* align-items: center; */
`;

const Side = styled.div`
height: 100vh;
width: 250px;
display: flex;
position: fixed;
justify-content: center;
align-items: center;
background-color: #062863;
`;
