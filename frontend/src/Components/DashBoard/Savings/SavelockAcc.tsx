import React from "react";
import styled from "styled-components";
import {
  AiOutlinePercentage,
  AiFillBank,
  AiFillSetting,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";

const SafelockAcc = () => {
  return (
    <Container>
      <Left>
        <Top>
          <Up>
            <Text>
              <p>SAFELOCK BALANCE</p>
            </Text>
            <Naira>
              <h3>₦0.00</h3>
            </Naira>
          </Up>
          <Down>
            <Box>
              <Icons>
                <AiOutlinePlus />
              </Icons>
              <Write>
                <p>Create a Safelock</p>
              </Write>
            </Box>
            <Box>
              <Icons>
                <BiHash />
              </Icons>
              <Write>
                <p>What is a Safelock?</p>
              </Write>
            </Box>
          </Down>
        </Top>
        <Below>
          <Up>
            <Text>
              <p>MY SAFELOCKS</p>
            </Text>
            <Naira2>
              <All1>Ongoing</All1>
              <All2>Completed</All2>
            </Naira2>
          </Up>
          <Trans>
            <h3>Create a Safelock</h3>
            <No>
              <p>You have no SafeLock setup. Let's help you get started.</p>
            </No>
            <Butto>CREATE A SAFELOCK</Butto>
            <Butto2>WHAT IS A SAFELOCK</Butto2>
          </Trans>
        </Below>
      </Left>
      <Right>
        <Int>
          <Text>
            <p>INTEREST RATE</p>
          </Text>
          <Prc>
            <h4>6% - 13%</h4>
          </Prc>
          <Per>
            <p>Per Annum</p>
          </Per>
        </Int>
      </Right>
    </Container>
  );
};

export default SafelockAcc;
const Butto2 = styled.button`
  width: 50%;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: #2295f2;
  border: 1px solid #2295f2;
  font-size: 17px;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 10px;
`;
const Butto = styled.button`
  width: 45%;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: #fff;
  background-color: #2295f2;
  font-size: 17px;
  cursor: pointer;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Betton = styled.button`
  width: 90%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: rgb(231, 67, 156);
  border: none;
  outline: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 20px;
`;
const Avai = styled.div`
  h4 {
    margin: 0;
  }
  span {
    color: rgb(231, 67, 156);
  }
  margin-top: 12px;
`;
const But = styled.button`
  width: 100%;
  display: flex;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgb(231, 67, 156);
  border: none;
  outline: none;
  h3 {
    color: white;
  }
`;
const Turn = styled.div`
  color: #000;
  font-size: 17px;
  margin-left: 10px;
`;
const Img = styled.img``;
const Power = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;
const Nai = styled.div`
  color: "#5a5858";
  font-size: 16px;
  margin-left: 10px;
`;
const Aut = styled.div`
  width: 270px;
  height: 55px;
  display: flex;
  margin-right: 10px;
  margin-top: 10px;
  p {
    color: #bebebe;
    margin: 0;
    font-size: 12px;
    margin-top: 10px;
    margin-left: 10px;
  }
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
`;
const Authold = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  /* border-bottom: 1px solid #e2e8f0; */
  padding-bottom: 15px;
  justify-content: space-between;
`;
const Info = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
  padding-left: 15px;
  margin-top: 45px;
`;
const Per = styled.div`
  p {
    color: #bebebe;
    font-size: 12px;
  }
`;
const Prc = styled.div`
  h4 {
    color: #2295f2;
    font-size: 27px;
    margin-bottom: 0;
    margin-top: 5px;
  }
`;
const Int = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
  padding-left: 15px;
`;
const Right = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const View = styled.div`
  h4 {
    color: #083e9e;
  }
`;
const No = styled.div`
  p {
    color: #2d3748;
    font-family: Karla, sans-serif;
    font-size: 15px;
  }
`;
const Trans = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    color: #2295f2;
    font-size: 27px;
    margin: 0;
    margin-top: 15px;
  }
`;
const All2 = styled.div`
  height: 30px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* color: white; */
  /* background-color: #083e9e; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
  color: #2d3748;
  margin-left: 15px;
`;
const All1 = styled.div`
  height: 30px;
  width: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #2295f2;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
  /* color: #2d3748; */
  /* margin-left: 15px; */
`;
const Below = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  margin-top: 40px;
`;
const Write = styled.div`
  p {
    color: #2295f2;
    font-size: 13px;
  }
  margin-left: 10px;
`;
const Icons = styled.div`
  color: #2295f2;
  font-size: 20px;
`;
const Box = styled.div`
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e8f0;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
`;
const Button = styled.div`
  font-size: 15px;
  color: #fff;
  text-align: center;
  width: 180px;
  cursor: pointer;
  height: 45px;
  display: flex;
  font-weight: 700;
  font-family: U8, sans-serif;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-color: #0d60d8;
  transition: ease-in 350ms;
  margin-right: 15px;
`;
const Naira2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  /* justify-content: space-between; */
  h3 {
    color: #083e9e;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
    font-size: 40px;
  }
`;
const Naira = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  h3 {
    color: #2295f2;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
    font-size: 40px;
  }
`;
const Text = styled.div`
  margin-top: 15px;
  p {
    font-size: 13px;
    color: #000;
    font-weight: 600;
    margin: 0;
  }
`;
const Up = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 25px;
`;
const Top = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
`;
const Left = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
