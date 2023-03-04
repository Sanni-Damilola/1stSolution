import React from "react";
import styled from "styled-components";
import { AiOutlinePercentage, AiFillBank, AiFillSetting } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { BiHash } from "react-icons/bi";

const FlexAcc = () => {
  return (
    <Container>
      <Left>
        <Top>
          <Up>
            <Text>
              <p>FLEX ACCOUNT (8%)</p>
            </Text>
            <Naira>
              <h3>₦0.00</h3>
            </Naira>
            <Avai>
              <h4>
                Available Balance: <span>₦0.00</span>
              </h4>
            </Avai>
          </Up>
          <Down>
            <Box>
              <Icons>
                <BsBookmarkFill />
              </Icons>
              <Write>
                <p>New Label</p>
              </Write>
            </Box>
            <Box>
              <Icons>
                <AiFillBank />
              </Icons>
              <Write>
                <p>Withdraw</p>
              </Write>
            </Box>
            <Box>
              <Icons>
                <BiHash />
              </Icons>
              <Write>
                <p>Settings</p>
              </Write>
            </Box>
          </Down>
          <Authold>
            <Aut>
              <p>AutoSave Deposit</p>
              <Nai>₦0</Nai>
            </Aut>
            <Aut>
              <p>AutoSave Deposit</p>
              <Nai>₦0</Nai>
            </Aut>
          </Authold>
        </Top>
        <Int>
          <Text>
            <p>Introducing: Labels 🎉</p>
          </Text>
          <Prc>
            <p>
              Labels lets you organise your emergency funds based on your needs.
            </p>
          </Prc>
          <Betton>
            <h4>LEARN MORE</h4>
          </Betton>
        </Int>
        <Below>
          <Up>
            <Text>
              <p>TRANSACTIONS</p>
            </Text>
            <Naira2>
              <All>All</All>
              <All2>Credit</All2>
              <All2>Debit</All2>
            </Naira2>
          </Up>
          <Trans>
            <No>
              <p>No transactions to display for now</p>
            </No>
            <View>
              <h4>VIEW MORE TRANSACTIONS</h4>
            </View>
          </Trans>
        </Below>
      </Left>
      <Right>
        <But>
          <h3>GET ACCOUNT NUMBER</h3>
        </But>
      </Right>
    </Container>
  );
};

export default FlexAcc;
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
  p {
    color: #686868;
    font-size: 13px;
    margin-bottom: 0;
    margin-top: 5px;
  }
`;
const Int = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 35px;
  align-items: center;
  justify-content: center;
  background-color: #f8e4ef;
  border: 1px solid #e2e8f0;
  padding-left: 15px;
`;
const Right = styled.div`
  width: 35%;
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
`;
const All2 = styled.div`
  height: 30px;
  width: 65px;
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
const All = styled.div`
  height: 30px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(231, 67, 156);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Below = styled.div`
  width: 100%;
  height: 210px;
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
    color: #000;
    font-size: 13px;
  }
  margin-left: 10px;
`;
const Icons = styled.div`
  color: rgb(231, 67, 156);
  font-size: 20px;
`;
const Box = styled.div`
  width: 33%;
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
    color: rgb(231, 67, 156);
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
  height: 310px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 15px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;
