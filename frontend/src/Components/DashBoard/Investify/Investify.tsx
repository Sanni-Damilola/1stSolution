import React from "react";
import { AiFillWarning } from "react-icons/ai";
import styled from "styled-components";
import setUp from "../../Image/complete-setup-v3.jpg";
import account from "../../Image/linkToAccount.png";

const Investify = () => {
  return (
    <Container>
      <Hold>
        <h2>investify</h2>
        <Account src={account} />
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
          </Pecentage>
          <Complete>
            <Extected>COMPLETE YOUR SETUP</Extected>
            <Image src={setUp} />
          </Complete>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Investify;

const Complete = styled.div`
  flex-direction: column;
  display: flex;
  width: 300px;
`;

const Image = styled.img`
  height: 100px;
  border-radius: 10px;
  cursor: pointer;
`;

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
  justify-content: space-between;
`;
const Right = styled.div``;
const Up = styled.div`
  width: 660px;
  padding-top: 10px;
  height: 150px;
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
  margin-top: 19px;
  height: 50px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  :hover {
    color: rgb(8, 62, 158);
  }
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
  :hover {
    color: rgb(8, 62, 158);
  }
`;
const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  width: 97%;
  padding-left: 19px;
  height: 60px;
  border-bottom: 2px solid rgb(0, 0, 0, 0.2);
`;
const Button = styled.span`
  color: rgb(26, 32, 44);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
`;
const StartInvesting = styled.div`
  color: rgb(121, 19, 229);
  font-size: 24px;
  font-weight: 800;
  text-transform: capitalize;
  margin-top: 30px;
`;
const Down = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.2);
  width: 660px;
  height: 280px;
  margin-top: 50px;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 10px 0px;
`;
const Account = styled.img`
  height: 45px;
  cursor: pointer;
`;
const Hold = styled.div`
  text-transform: capitalize;
  h2 {
    color: rgb(0, 0, 0);
    font-size: 40px;
    font-weight: 800;
  }
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Text = styled.span`
  color: rgb(45, 55, 72);
  font-size: 14px;
  font-weight: 600;
`;
const InvestButton = styled.div`
  border-radius: 8px 8px 8px 0px;
  background-color: rgb(121, 19, 229);
  padding: 5px 50px;
  cursor: pointer;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 16px;
  font-size: 16px;
`;
const Pecentage = styled.div`
  height: 100px;
  border: 1px solid rgb(0, 0, 0, 0.2);
  border-radius: 10px 10px 10px 0px;
  margin-bottom: 60px;
  padding-top: 15px;
  padding-left: 15px;
  h3 {
    color: rgb(121, 19, 229);
    font-size: 30px;
    font-weight: 400;
    margin: 0;
  }
  pre {
    font-size: 12px;
    color: rgb(113, 128, 150);
    margin: 0;
  }
`;
const Extected = styled.div`
  font-weight: 600;
  font-size: 10px;
  color: rgb(54, 55, 72);
  text-transform: uppercase;
  margin-bottom: 10px;
`;
const LearnButton = styled.div`
  border-radius: 10px 10px 10px 0px;
  padding: 5px 50px;
  cursor: pointer;
  border: 1px solid rgb(121, 19, 229);
  color: rgb(121, 19, 229);
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 16px;
  font-size: 16px;
`;
const Left = styled.div`
  width: 30%;
`;
