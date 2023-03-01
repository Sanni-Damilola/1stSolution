import React from "react";
import styled from "styled-components";
import ButtonLinkToApp from "../../Global/ButtonLinkToApp";
import appleIcon from "../../Image/apple-icon.svg";
import googleIcon from "../../Image/google-icon.svg";
import CallToActionButton from "../../Global/CallToActionButton";
import CustomersReply from "../../Global/CustomersReply";
import adebola from "../../Image/adebola.jpeg";
import olabisi from "../../Image/olabisi.jpeg";
import micheal from "../../Image/micheal.jpeg";
import Rachael from "../../Image/Racheal.jpeg";

const Customers = () => {
  return (
    <Container>
      <Wrapper>
        <Right>
          <Replies>
            <CustomersReply
              image={olabisi}
              message="Hello Piggy users, I’m Ola and more than elated to let you know that for the first time in my existence I’m able to save over 200k because I used the piggy safelock. Growing up in the rural parts of Lagos is one thing, steadily working to bring myself out is another thing. I was able to make not only first hundred but my second with piggyvest. You can do it too! Cheers😊😊"
              name="Olabisi A"
              date="Saturday, 4th of February 2023 by 02:48 AM"
            />
            <CustomersReply
              image={Rachael}
              message="My name is Rachael Joseph and I am here to testify that Piggyvest has helped me a lot. I had to spread the good news to my friends and tell them about the app and behold they are also using it. Thank you so much Pggyvest for saving me cause I am the type of person that spends lavishly. Thank you once again Piggyvest 💙"
              name="Rachael O"
              date="Saturday, 4th of February 2023 by 02:48 AM"
            />
            <CustomersReply
              image={adebola}
              message="Havenue for me to do so. Simple to use, very friendly interface and I just love the fact that they answer my mails immediately. Love the energy!!!"
              name="Adebola P"
              date="Wednesday, 15th of February 2023 by 13:07 PM"
            />
            <CustomersReply
              image={micheal}
              message="I am so happy with this lovely Piggyvest I was able to do many things last year I bought a land I started my house project Did many things!"
              name="Micheal O"
              date="Tuesday, 14th of February 2023 by 09:30 AM"
            />
          </Replies>
        </Right>

        <Left>
          <span>4 Million + customers</span>
          <p>
            Since launching in 2016, over 4,000,000 people <br /> have used
            PiggyVest to manage their money better, avoid <br /> over-spending
            and be more accountable.
          </p>
          <CallToActionButton padding="10px 13px" text="Create free account" />
          <ButtonWrapper>
            <ButtonLinkToApp
              image={appleIcon}
              padding="12px 18px"
              text="Get on iPhone"
              marginTopValue=""
              HoverBorderValue="value"
            />
            <ButtonLinkToApp
              marginTopValue=""
              HoverBorderValue="value"
              image={googleIcon}
              padding="12px 15px"
              text="Get on Android"
            />
          </ButtonWrapper>
        </Left>
      </Wrapper>
    </Container>
  );
};

export default Customers;

const Right = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  height: 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
`;
const Replies = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  transition: all 500ms;
  animation: MoveAndUpDown 9s normal infinite; // 👇 animation for message to automatically move up and dowm
  @keyframes MoveAndUpDown {
    from {
      bottom: 63px;
    }
    to {
      bottom: 400px;
    }
  }
`;
const Left = styled.div`
  margin-left: 50px;
  span {
    font-weight: bold;
    font-size: 50px;
  }
  P {
    font-family: "DM Sans";
    vertical-align: baseline;
    text-decoration: none solid rgb(53, 53, 53);
    font-weight: 500;
    font-size: 16px;
    line-height: 27.2px;
    color: rgb(53, 53, 53);
  }
`;
