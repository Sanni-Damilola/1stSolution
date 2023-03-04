import React, { useState } from "react";
import styled from "styled-components";
import {
  AiOutlinePercentage,
  AiFillBank,
  AiFillSetting,
  AiOutlineClose,
} from "react-icons/ai";
import { useAppSelector } from "../../Global/ReduxState/Store";
import { useQuery } from "@tanstack/react-query";
import { GetOneUser } from "../../Api/Api";
import axios from "axios";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const localUrl = "http://localhost:6400";
const Pigbox = () => {
  const [show, setShow] = useState(false);
  const user = useAppSelector((state) => state.currentUser);
  const readUser = useQuery({
    queryKey: ["user"],
    queryFn: () => GetOneUser(user?._id),
  });

  const schema = yup
    .object({
      amount: yup.number().required("field mu"),
    })
    .required();
  type formData = yup.InferType<typeof schema>;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });
  const Canc = () => {
    setShow(false);
  };
  const Toggle = () => {
    setShow(!false);
  };
  // const posting = useMutation({
  // mutationFn: (data) => {
  // return TransferMoney(data, user?._id);
  // },
  // onSuccess: (data) => {
  // Swal.fire({
  // title: "succeful",
  // icon: "success",
  // });
  // },
  // });
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    await axios
      .post(`${localUrl}/api/quick/saveQuick/${user?._id}`, data)
      .then((res: any) => {
        Swal.fire({
          title: "succeful",
          icon: "success",
        });
      })
      .catch((err: any) => {
        Swal.fire({
          title: "an error occured",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
      });
  });
  return (
    <Container>
      <Left>
        <Top>
          <Up>
            <Text>
              <p>MY BALANCE</p>
            </Text>
            <Naira>
              {readUser?.data ? (
                <h3>#{readUser?.data?.data?.wallet[0]?.Balance}</h3>
              ) : (
                <h3>₦0.</h3>
              )}
              <Button onClick={Toggle}>+QUICK SAVE</Button>
            </Naira>
          </Up>
          <Down>
            <Box>
              <Icons>
                <AiOutlinePercentage />
              </Icons>
              <Write>
                <p>Interests</p>
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
                <AiFillSetting />
              </Icons>
              <Write>
                <p>Settings</p>
              </Write>
            </Box>
          </Down>
        </Top>
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
        <Int>
          <Text>
            <p>INTEREST RATE</p>
          </Text>
          <Prc>
            <h4>10%</h4>
          </Prc>
          <Per>
            <p>Per Annum</p>
          </Per>
        </Int>
        <Info>
          <Text>
            <p>SAVINGS INFO</p>
          </Text>
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
          <Power>
            <Img src={""} />
            <Turn>Turn On AutoSave</Turn>
          </Power>
        </Info>
      </Right>

      {show ? (
        <Save>
          <Holder>
            <Icons onClick={Canc}>
              <AiOutlineClose />
            </Icons>
            <Quick>
              <h3>Save Quick</h3>
              <p>Enter an amount and account number you want to save</p>
            </Quick>
            <Tap>
              <p>Tap here & enter .. (e.g 5000)</p>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Tap here & enter..(e.g 5000)"
              />
            </Tap>

            <Proceed
              onClick={() => {
                onSubmit();
              }}
            >
              Proceed
            </Proceed>
          </Holder>
        </Save>
      ) : null}
    </Container>
  );
};

export default Pigbox;

const Proceed = styled.button`
  font-size: 17px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-weight: 700;
  font-family: U8, sans-serif;
  margin-top: 160px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #0d60d8;
  border: none;
  outline: none;
  width: 90%;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Input2 = styled.input`
  width: 88%;
  height: 45px;
  color: #1b2331;
  background-color: #edf2f7;
  font-size: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  border-radius: 5px;
`;
const Input = styled.input`
  width: 88%;
  height: 45px;
  color: #1d222b;
  background-color: #edf2f7;
  font-size: 100%;
  border: none;
  outline: none;
  padding-left: 15px;
  border-radius: 5px;
`;
const Tap2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 35px;
  /* margin-bottom: 5px; */
  p {
    color: #4a5568;
    font-weight: 700;
    font-family: U8, sans-serif;
    font-size: 13px;
  }
`;
const Tap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 55px;
  /* margin-bottom: 5px; */
  p {
    color: #4a5568;
    font-weight: 700;
    font-family: U8, sans-serif;
    font-size: 13px;
  }
`;
const Quick = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  p {
    color: #718096;
    margin: 0;
    font-size: 14px;
  }
  h3 {
    font-size: 24px;
    margin: 0;
    color: #083e9e;
    font-weight: 700;
    font-family: U8, sans-serif;
  }
`;

const Holder = styled.div`
  width: 27%;
  display: flex;
  height: 100%;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  padding-left: 35px;
`;
const Save = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: flex-end;
  transition-timing-function: ease-in;
  transition: 1s;
  /* transform: translateX(-100%); */
  /* transition-delay: 1s; */
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
  width: 160px;
  height: 55px;
  display: flex;
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
  border-bottom: 1px solid #e2e8f0;
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
    color: #083e9e;
    font-size: 30px;
    margin-bottom: 0;
    margin-top: 5px;
  }
`;
const Int = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
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
  background-color: #083e9e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const Below = styled.div`
  width: 100%;
  height: 195px;
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
  color: #083e9e;
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
    color: #083e9e;
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
    color: #2d3748;
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
