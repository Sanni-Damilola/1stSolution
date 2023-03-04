import React from "react";
import styled from "styled-components";
import { FiThumbsUp, FiLock } from "react-icons/fi";
// import img from "../Assets/pigi.png";
// import img2 from "../Assets/complete.jpg";
// import img3 from "../Assets/apps.png";
// import img4 from "../Assets/goog.png";

const Todo = () => {
  return (
    <Container>
      <Left>
        <Top>
          <p>TO-DO LIST</p>
        </Top>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Verify your email address</p>
          </Text>
        </Box>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Add your BVN or NIN now!</p>
          </Text>
        </Box>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Tell us more abiut yourself</p>
          </Text>
        </Box>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Securely add a valid debit card</p>
          </Text>
        </Box>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Set your security question now! 🔐 🔐</p>
          </Text>
        </Box>
        <Box>
          <Checkbox></Checkbox>
          <Text>
            <p>Refer a friend, earn ₦1,000.00 bonus 🎉</p>
          </Text>
        </Box>
        <Card>
          <Icon>
            <FiThumbsUp />
          </Icon>
          <Texthold>
            <p>
              <span>See your recent activities</span>
            </p>
            <p>See your most recent activities on Piggyvest</p>
          </Texthold>
        </Card>
        <Card2>
          <Icon2>
            <FiLock />
          </Icon2>
          <Texthold2>
            <p>
              <span>Create a Safelock</span>
            </p>
            <p>Avoid spending temptations. Tap to create a safelock</p>
          </Texthold2>
        </Card2>
        <Card3>
          <Icon3>
            <FiThumbsUp />
          </Icon3>
          <Texthold3>
            <p>
              <span>Link ypur Pocket App</span>
            </p>
            <p>Withdraw from your PiggyVest safer & faster 💜</p>
          </Texthold3>
        </Card3>
        <Recent>
          <p>RECENT ACTIVITIES</p>
        </Recent>
        <Card4>
          <Img src={""} />
          <Texthold4>
            <p>
              <span>Just registered</span>
            </p>
            <p>2 mins ago</p>
          </Texthold4>
        </Card4>
        <View>
          <h3>VIEW MORE ACTIVITIES</h3>
        </View>
      </Left>
      <Right>
        <Comp>
          <p>COMPLETE YOUR SETUP</p>
        </Comp>
        <Hold>
          <Image src={""} />
        </Hold>
        <Comp>
          <p>Download the mobile App</p>
        </Comp>
        <Hold>
          <Imghold>
            <Image2 src={""} />
            <Image3 src={""} />
          </Imghold>
        </Hold>
      </Right>
    </Container>
  );
};

export default Todo;
const Image3 = styled.img`
  height: 43px;
`;
const Image2 = styled.img`
  height: 43px;
`;
const Imghold = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Hold = styled.div`
  overflow: hidden;
  border-radius: 6px;
  width: 330px;
  height: 120px;
  margin-bottom: 12px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Comp = styled.div`
  /* margin-left: 30px; */
  p {
    color: #2d3748;
    font-family: U8, sans-serif;
    font-size: 13px;
  }
`;
const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding-left: 50px;
`;
const View = styled.div`
  h3 {
    color: #5a5add;
  }
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 18px;
`;
const Img = styled.img`
  height: 40px;
  border-radius: 50%;
  margin-left: 15px;
`;
const Recent = styled.div`
  margin-top: 13px;
  p {
    color: #2d3748;
    font-size: 14px;
    font-size: 0.625rem;
    font-weight: 600;
    font-family: U8, sans-serif;
  }
`;
const Texthold4 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  span {
    color: rgb(117, 63, 246);
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #818181;
  }
`;
const Texthold3 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  span {
    color: rgb(117, 63, 246);
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #818181;
  }
`;
const Texthold2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  span {
    color: rgb(34, 149, 242);
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #818181;
  }
`;
const Texthold = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 13px;
  span {
    color: rgb(13, 96, 216);
  }
  p {
    margin: 0;
    font-size: 14px;
    color: #818181;
  }
`;
const Icon3 = styled.div`
  color: rgb(117, 63, 246);
  margin-left: 13px;
  font-size: 27px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Icon2 = styled.div`
  color: rgb(34, 149, 242);
  margin-left: 13px;
  font-size: 27px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Icon = styled.div`
  color: rgb(13, 96, 216);
  margin-left: 13px;
  font-size: 27px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Card4 = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  border-color: rgb(117, 63, 246);
  /* margin-top: 40px; */
  border: 1px solid gray;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Card3 = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  border-color: rgb(117, 63, 246);
  /* margin-top: 40px; */
  border: 1px solid rgb(117, 63, 246);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Card2 = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  /* border-color: rgb(13, 96, 216); */
  /* margin-top: 40px; */
  border: 1px solid rgb(34, 149, 242);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Card = styled.div`
  width: 100%;
  height: 70px;
  background-color: transparent;
  /* border-color: rgb(13, 96, 216); */
  margin-top: 40px;
  border: 1px solid rgb(13, 96, 216);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
const Text = styled.div`
  color: rgb(66, 74, 87);
  font-size: 0.75rem;
  font-family: U8, sans-serif;
  font-weight: 700;
  margin-left: 10px;
`;
const Checkbox = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50px;
  border: 1px solid blue;
  margin-left: 13px;
`;
const Box = styled.div`
  width: 100%;
  height: 45px;
  align-items: center;
  display: flex;
  border-radius: 5px;
  border: 1px solid #acacac;
  margin-bottom: 10px;
`;
const Top = styled.div`
  p {
    color: #2d3748;
    font-family: U8, sans-serif;
    font-size: 13px;
  }
`;
const Left = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;
