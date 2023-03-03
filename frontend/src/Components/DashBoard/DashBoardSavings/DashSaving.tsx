import React from "react";
import styled from "styled-components";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiFillRocket,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { FiTarget } from "react-icons/fi";
import { Link } from "react-router-dom";

const DashSaving = () => {
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
                    cursor: "pointer",
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

        <Contain wd={show ? "100%" : "calc(100% - 300px)"}>
          <Eben>
            <Even>
              <Good>Savings</Good>
              <Wash>Let's see how well you are doing</Wash>
            </Even>

            <User>
              <AiOutlineUser />
            </User>
          </Eben>

          <Safe>
            <Lock>
              <Radio>Total Balance</Radio>

              <Switch>60,000.00</Switch>
            </Lock>

            <Images>
              <Text>BUILD YOUR SAVINGS</Text>
              <Imag src="/images/home/build.png" />
            </Images>
          </Safe>

          <Boxes>
            <Link to="/saving/piggybank">
              <Box style={{ backgroundColor: "#c4bfbf", color: "#0d60d8" }}>
                <Icoon>
                  <FiTarget />
                </Icoon>

                <BoxText>Piggybank</BoxText>

                <BoxText2>
                  Strict savings automatically. Daily, weekly or monthly. 10%
                  p.a
                </BoxText2>

                <BoxAmount>10,000.00</BoxAmount>
              </Box>
            </Link>

            <Box style={{ backgroundColor: "#d8d5d5", color: "green" }}>
              <Icoon>
                <FiTarget />
              </Icoon>

              <BoxText>Flex Naira</BoxText>

              <BoxText2>
                Flexible ssavings for emergencies. Free transfers, withdrawals.
              </BoxText2>

              <BoxAmount>10,000.00</BoxAmount>
            </Box>

            <Link to="/saving/safelock">
              <Box style={{ backgroundColor: "#f7e0e0", color: "#60a0fa" }}>
                <Icoon>
                  <FiTarget />
                </Icoon>

                <BoxText>Safelock</BoxText>

                <BoxText2>
                  Lock funds to avaoid tempatations. Upfront interest
                </BoxText2>

                <BoxAmount>10,000.00</BoxAmount>
              </Box>
            </Link>

            <Box style={{ backgroundColor: "#e7dada", color: "#faaa32" }}>
              <Icoon>
                <FiTarget />
              </Icoon>

              <BoxText>Targets</BoxText>

              <BoxText2>Reach your unique individual saving golas.</BoxText2>

              <BoxAmount>10,000.00</BoxAmount>
            </Box>

            <Box style={{ backgroundColor: "#fae2e2", color: "#3e3f41" }}>
              <Icoon>
                <FiTarget />
              </Icoon>

              <BoxText>Flex Dollar</BoxText>

              <BoxText2>Save and grow your wealth in dollars.</BoxText2>

              <BoxAmount>10,000.00</BoxAmount>
            </Box>

            <Box style={{ backgroundColor: "#e9dfdf", color: "#0d60d8" }}>
              <Icoon>
                <FiTarget />
              </Icoon>

              <BoxText>PocketApp</BoxText>

              <BoxText2>Withdraw your savings to your pocket faster.</BoxText2>

              <BoxAmount>10,000.00</BoxAmount>
            </Box>
          </Boxes>
        </Contain>
      </Body>
    </div>
  );
};

export default DashSaving;

// const = styled``;

// const = styled``;

// const = styled``;

const BoxAmount = styled.div`
  font-size: 13px;
  text-decoration: none;
`;

const BoxText2 = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  width: 80%;
  text-decoration: none;
`;

const BoxText = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
  text-decoration: none;
`;

const Icoon = styled.div`
  font-size: 25px;
  text-decoration: none;
`;

const Box = styled.div`
  text-decoration: none;
  cursor: pointer;
  width: 360px;
  height: 200px;
  border-radius: 8px 8px 8px 0;
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-around; */
  background-color: #b1afaf;
  margin-bottom: 15px;
  margin-right: 15px;
`;

const Boxes = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 30px;
  gap: 2rem;
  margin-left: 5px;
`;

const Imag = styled.img`
  width: 100%;
  border-radius: 7px 7px 7px 0;
  /* margin-top: 10px; */
`;

const Text = styled.div`
  font-size: 10px;
  color: gray;
`;

const Images = styled.div`
  width: 30%;
`;

const Switch = styled.div`
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 15px;
  color: #0d60d8;
  font-weight: 700;
`;

const Radio = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

const Lock = styled.div`
  width: 68%;
  height: 100%;
  padding-left: 15px;
  box-shadow: 0 0 2px gray;
  border-radius: 7px 7px 7px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Safe = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Even = styled.div`
  margin-top: 30px;
`;

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
  flex-wrap: wrap;
  justify-content: flex-end;
  /* align-items: flex-start; */
  margin-right: 20px;
  margin-left: 20px;
  /* height: 100%; */
  /* margin-top: 40px; */
`;

const Icon = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-right: 15px;
`;

const Side = styled.div`
  width: 250px;
  position: fixed;
  height: 100vh;
  /* margin-top: -90px; */
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

const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  /* flex-direction: column; */
  /* justify-content: flex-end; */
  /* align-items: center; */
`;
