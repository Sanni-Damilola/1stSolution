import React from "react";
import { AiFillWarning } from "react-icons/ai";
import styled from "styled-components";

const Investify = () => {
  return (
    <Container>
      <Hold>
        <h2>investify</h2>
        <Account></Account>
      </Hold>
      <Wrapper>
        <Right>
          <Up>
            <TotalBalance>total balance</TotalBalance> <br />
            <b>#0.00</b>
            <LearnMore>
              <Wrap>
                <Warning>
                  <AiFillWarning />
                </Warning>
                learn more
              </Wrap>
            </LearnMore>
          </Up>
          <Down>
            <ButtonWrap>
              <Button>
                <ButtonIcon></ButtonIcon>
                My investments
              </Button>
            </ButtonWrap>
            <StartInvesting>start investing</StartInvesting>
            <Text>
              Start investing in verified opportunities. Let's help you get
              started.
            </Text>
            <InvestButton>invest now</InvestButton>
            <LearnButton>learn more</LearnButton>
          </Down>
        </Right>
        <Left>
          <Pecentage>
            <Extected>extected roi</Extected>
            <h3>Up to 25%</h3>
            <pre>per annum</pre>
            <Extected>COMPLETE YOUR SETUP</Extected>
          </Pecentage>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Investify;

const ButtonIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;
const Right = styled.div``;
const Up = styled.div`
  width: 660px;
  padding-top: 20px;
  height: 180px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px 10px 10px 0px;
  b {
    color: rgb(121, 19, 229);
    font-size: 36px;
    font-weight: 800;
    padding-left: 19px;
  }
`;
const TotalBalance = styled.span`
  color: rgb(45, 55, 72);
  font-size: 11px;
  font-weight: 600;
  padding-left: 19px;
  text-transform: uppercase;
`;
const LearnMore = styled.div`
  border-top: 1px solid rgb(0, 0, 0, 0.2);
  margin-top: 40px;
  height: 50px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  color: black;
  font-size: 13px;
  font-weight: 600;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    color: rgb(8, 62, 158);
  }
`;
const Warning = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 17px;
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 19px;
  border-bottom: 1px solid rgb(0, 0, 0, 0.2);
`;
const Button = styled.span`
  color: rgb(26, 32, 44);
  font-size: 13px;
  font-weight: 600;
`;
const StartInvesting = styled.div``;
const Down = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.2);
  width: 660px;
  height: 180px;
  margin-top: 50px;
  border-radius: 10px 10px 10px 0px;
`;
const Account = styled.div``;
const Hold = styled.div`
  h2 {
    color: rgb(0, 0, 0);
    font-size: 40px;
    font-weight: 800;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.div``;
const InvestButton = styled.div``;
const Pecentage = styled.div``;
const Extected = styled.div``;
const LearnButton = styled.div``;
const Left = styled.div``;
