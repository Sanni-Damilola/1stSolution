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

const TargetAccount = () => {
  return (
    <Container>
      <Left>
        <Top>
          <Up>
            <Text>
              <p>TOTAL BALANCE</p>
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
                <p>Create a Target</p>
              </Write>
            </Box>
            <Box>
              <Icons>
                <BiHash />
              </Icons>
              <Write>
                <p>Learn More</p>
              </Write>
            </Box>
          </Down>
        </Top>
        <Below>
          <Up>
            <Text>
              <p>MY SAFELOCKS</p> <span>Explore Targets</span>
            </Text>
            <Naira2>
              <All1>Ongoing</All1>
              <All2>Completed</All2>
            </Naira2>
          </Up>
          <Trans>
            <Tag src={""} />
            <h3>Create a Target</h3>
            <No>
              <p>
                Save with discipline towards a specific goal or target. Earn
                interests every day into your Flex wallet. Let's help you get
                started.
              </p>
            </No>
            <Butto>CREATE A TARGET</Butto>
            <Butto2>JOIN A SAVING CHALLENGE</Butto2>
          </Trans>
        </Below>
      </Left>
      <Right>
        <Int>
          <Texts>
            <p>INTEREST RATE</p>
          </Texts>
          <Prc>
            <h4>9%</h4>
          </Prc>
          <Per>
            <p>Per Annum</p>
          </Per>
        </Int>
      </Right>
    </Container>
  );
};

export default TargetAccount;
const Tag = styled.img`
  height: 150px;
  margin-top: 13px;
`;
const Butto2 = styled.button`
  width: 50%;
  display: flex;
  height: 45px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: #27ae60;
  border: 1px solid #27ae60;
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
  background-color: #27ae60;
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
    color: #27ae60;
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
  margin-left: 40px;
`;
const View = styled.div`
  h4 {
    color: #083e9e;
  }
`;
const No = styled.div`
  width: 75%;
  p {
    color: #2d3748;
    line-height: 1.5;
    font-family: Karla, sans-serif;
    font-size: 15px;
    text-align: center;
  }
`;
const Trans = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    color: #27ae60;
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
  background-color: #27ae60;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid #e2e8f0;
  /* color: #2d3748; */
  /* margin-left: 15px; */
`;
const Below = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
  margin-top: 40px;
  padding-bottom: 20px;
`;
const Write = styled.div`
  p {
    color: #27ae60;
    font-size: 13px;
  }
  margin-left: 10px;
`;
const Icons = styled.div`
  color: #27ae60;
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
    color: #27ae60;
    font-weight: 700;
    font-family: U8, sans-serif;
    margin: 0;
    font-size: 40px;
  }
`;
const Texts = styled.div`
  span {
    margin-left: 13px;
    color: #979797;
    font-size: 14px;
    margin-top: 5px;
  }
  margin-top: 15px;
  display: flex;
  /* border-bottom: 1px solid #e2e8f0; */
  p {
    font-size: 13px;
    color: #000;
    font-weight: 600;
    margin: 0;
    line-height: 27px;
    /* border-bottom: 2px solid #27ae60; */
  }
`;
const Text = styled.div`
  span {
    margin-left: 13px;
    color: #979797;
    font-size: 14px;
    margin-top: 5px;
  }
  margin-top: 15px;
  display: flex;
  border-bottom: 1px solid #e2e8f0;
  p {
    font-size: 13px;
    color: #000;
    font-weight: 600;
    margin: 0;
    line-height: 27px;
    border-bottom: 2px solid #27ae60;
  }
`;
const Up = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
  flex-direction: column;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 25px;
`;
const Top = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 10px 10px 10px 0px;
  padding-left: 15px;
  padding-bottom: 15px;
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
`;
