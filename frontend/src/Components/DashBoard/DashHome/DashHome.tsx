import React from "react";
import styled from "styled-components";
import {
  AiOutlineUser,
  AiOutlinePlus,
  AiTwotoneDollar,
  AiFillStar,
} from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { BiBox } from "react-icons/bi";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiFillRocket,
  AiOutlineLogout,
} from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashHome = () => {
  const [show, setShow] = React.useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <Body>
        <Side style={{ position: "relative" }}>
          {show ? (
            <Icons>
              <Up>
                <Togg
                  style={{
                    color: "white",
                    fontSize: "25px",
                    top: "30px",
                    left: "12px",
                    cursor: "pointer",
                  }}
                  onClick={toggle}
                >
                  <AiOutlineMenu />
                </Togg>

                <Icon
                  style={{
                    marginTop: "100px",
                    fontSize: "25px",
                    cursor: "pointers",
                    marginLeft: "10px",
                  }}
                >
                  <AiOutlineHome />
                </Icon>

                <Icon
                  style={{
                    color: "white",
                    fontSize: "25px",
                    cursor: "pointer",
                    marginTop: "25px",
                    marginLeft: "10px",
                  }}
                >
                  <FiTarget />
                </Icon>

                <Icon
                  style={{
                    color: "white",
                    fontSize: "25px",
                    cursor: "pointer",
                    marginTop: "25px",
                    marginLeft: "10px",
                  }}
                >
                  <AiFillRocket />
                </Icon>

                <Icon
                  style={{
                    color: "white",
                    fontSize: "25px",
                    cursor: "pointer",
                    marginTop: "25px",
                    marginLeft: "10px",
                    zIndex: "100",
                  }}
                >
                  <AiOutlineUser />
                </Icon>
              </Up>

              <Icon
                style={{
                  rotate: "calc(-90deg)",
                  marginBottom: "30px",
                  fontSize: "25px",
                  marginLeft: "10px",
                }}
              >
                <AiOutlineLogout />
              </Icon>
            </Icons>
          ) : (
            <>
              <Togg
                style={{
                  color: "white",
                  fontSize: "25px",
                  top: "30px",
                  left: "25px",
                  cursor: "pointer",
                  zIndex: "100",
                }}
                onClick={toggle}
              >
                <AiOutlineMenu />
              </Togg>
            </>
          )}
        </Side>

        <Contain wd={show ? "270%" : "calc(100% - 300px)"}>
          <Eben>
            <Even>
              <Good>Ebenezer,</Good>
              <Wash>Good Morning, wash your hands</Wash>
            </Even>

            <User>
              <AiOutlineUser />
            </User>
          </Eben>

          <Refresh>
            <Rcon>
              <BiRefresh />
            </Rcon>

            <Quick>
              <Qcon>
                <AiOutlinePlus />
              </Qcon>

              <Save>QUICK SAVE</Save>
            </Quick>
          </Refresh>

          <Total>
            <Saving>
              <Icon>
                <AiTwotoneDollar />
              </Icon>

              <Link to="/saving/piggybank">
                <TotText>
                  <Text1>Total Savings</Text1>

                  <Star>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </Star>
                </TotText>
              </Link>
            </Saving>

            <Saving>
              <Icon>
                <AiTwotoneDollar />
              </Icon>

              <Link to="/saving/safelock">
                <TotText>
                  <Text1>Total Investments</Text1>

                  <Star>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </Star>
                </TotText>
              </Link>
            </Saving>

            <Saving style={{ backgroundColor: "black", color: "white" }}>
              <Icon>
                <AiTwotoneDollar />
              </Icon>

              <TotText>
                <Text1>Flex Dollar</Text1>

                <Star>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Star>
              </TotText>
            </Saving>

            <Saving
              style={{
                backgroundColor: "white",
                color: "black",
                boxShadow: "0 0 3px gray",
              }}
            >
              <Icon>
                <AiTwotoneDollar />
              </Icon>

              <TotText>
                <Text1>Flex Naira</Text1>

                <Star>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Star>
              </TotText>
            </Saving>

            <Saving>
              <Icon>
                <AiTwotoneDollar />
              </Icon>

              <TotText>
                <Text1>Link PocketApp</Text1>

                <Star>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </Star>
              </TotText>
            </Saving>
          </Total>

          <Hold>
            <Right>
              <Todo>
                <List>TO-DO LIST</List>

                <Safe>
                  <Lock>
                    <Radio type="radio" />

                    <Switch>Switch to the new NUBAN</Switch>
                  </Lock>

                  <Lock>
                    <Radio type="radio" />

                    <Switch>Saflock for 61 - 90 days</Switch>
                  </Lock>

                  <Lock>
                    <Radio type="radio" />

                    <Switch>Set your security question now</Switch>
                  </Lock>
                </Safe>
              </Todo>

              <Gets>
                <Get>
                  <Box>
                    <BiBox />
                  </Box>

                  <Int>
                    <One>Get Savings Interest for the month</One>

                    <Two>
                      Tap to earn interest on your savings for the month
                    </Two>
                  </Int>
                </Get>

                <Get>
                  <Box>
                    <BiBox />
                  </Box>

                  <Int>
                    <One>Get Savings Interest for the month</One>

                    <Two>
                      Tap to earn interest on your savings for the month
                    </Two>
                  </Int>
                </Get>
                <Get>
                  <Box>
                    <BiBox />
                  </Box>

                  <Int>
                    <One>Get Savings Interest for the month</One>

                    <Two>
                      Tap to earn interest on your savings for the month
                    </Two>
                  </Int>
                </Get>
              </Gets>
            </Right>

            <Left>
              <Image src="/images/home/FEB2.png" alt="tech" />

              <Image src="" />
            </Left>
          </Hold>
        </Contain>
      </Body>
    </div>
  );
};

export default DashHome;

const Side = styled.div`
  width: 250px;
  position: fixed;
  height: 100vh;
  margin-top: -90px;
`;

const Togg = styled.div`
  position: absolute;
`;

const Icons = styled.div`
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #062863;
  color: white;
`;

const Up = styled.div``;

// const Box = styled.div``;

// const Int = styled.div``;

// const Box = styled.div``;

const Image = styled.img`
  width: 100%;
  margin-bottom: 15px;
`;

const Left = styled.div`
  width: 350px;
  height: 400px;
  /* border: 1px solid gray; */
`;

const Two = styled.div`
  font-size: 12px;
  color: #9b9a9a;
`;

const One = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #0d60d8;
`;

const Int = styled.div``;

const Box = styled.div`
  font-size: 25px;
  margin-right: 10px;
  color: #0d60d8;
`;

const Get = styled.div`
  width: 100%;
  height: 58px;
  border: 2px solid #0d60d8;
  margin-top: 10px;
  display: flex;
  align-items: center;
  /* box-shadow: 0 0 3px #0d60d8; */
  border-radius: 7px 7px 7px 0;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 15px;
`;

const Gets = styled.div`
  width: 100%;
`;

const Switch = styled.div`
  font-size: 12px;
  color: gray;
  margin-left: 10px;
`;

const Radio = styled.input`
  width: 17px;
  height: 17px;
  border: 2px solid #0d60d8;
`;

const Lock = styled.div`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  box-shadow: 0 0 2px gray;
  border-radius: 7px 7px 7px 0;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

const Safe = styled.div`
  width: 100%;
`;

const List = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: gray;
`;

const Todo = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const Right = styled.div`
  width: calc(100% - 400px);
  margin-left: 1px;
`;

const Hold = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  overflow: hidden;
`;

const Star = styled.div`
  font-size: 13px;
  display: flex;
`;

const Text1 = styled.h6`
  font-size: 13px;
  margin-bottom: 10px;
  text-decoration: none;
`;

const TotText = styled.div`
  /* height: 50px; */
  display: flex;
  flex-direction: column;
  margin-bottom: 31px;
  text-decoration: none;
  color: white;
`;

const Icon = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-right: 15px;
`;

const Saving = styled.button`
  width: 18%;
  height: 120px;
  border-radius: 8px 8px 8px 0;
  background-color: #0d60d8;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
`;

const Total = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Save = styled.div`
  font-size: 12px;
  font-weight: 700;
  margin-left: 2px;
`;

const Qcon = styled.div`
  font-size: 13px;
  margin-left: 6px;
`;

const Quick = styled.button`
  width: 120px;
  height: 35px;
  background-color: #0d60d8;
  border-radius: 7px 7px 7px 0;
  border: none;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Rcon = styled.div`
  font-size: 23px;
  color: black;
  cursor: pointer;
`;

const Refresh = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 35px;
  margin-bottom: 10px;
`;

const User = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #0d60d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
`;

const Wash = styled.div`
  font-size: 13px;
  color: #a5a4a4;
`;

const Good = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

const Even = styled.div``;

const Eben = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 50px; */
`;

const Contain = styled.div<{ wd: string }>`
  /* width: 95%; */
  /* width: calc(100vw - 320px); */
  /* width: 100%; */
  width: ${(props) => props.wd};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: flex-start; */
  margin-right: 20px;
  margin-left: 20px;
  /* height: 100%; */
  margin-top: 40px;
`;

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
`;
