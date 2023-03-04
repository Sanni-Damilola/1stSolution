import axios from "axios";
import { UserData } from "../interface/interface";

const localUrl = "http://localhost:2001";

export const createUser = async ({
  name,
  email,
  password,
  userName,
  phoneNumber,
}: any) => {
  return await axios
    .post(`${localUrl}/api/user/register`, {
      name,
      email,
      password,
      userName,
      phoneNumber,
    })
    .then((res) => {
      return res.data;
    });
};

export const GetOneUser = async (id: any) => {
  return await axios
    .get(`${localUrl}/api/user/${id}/userdetail`)
    .then((res) => res.data);
};

export const TransferMoney = async (data: any, id: any) => {
  return await axios
    .post(`${localUrl}/api/user/sendmoney/${id}/${id}`, data)
    .then((res) => res.data);
};

export const LoginUser = async ({ email, password }: any) => {
  return await axios
    .post(`${localUrl}/api/user/login`, {
      email,
      password,
    })
    .then((res) => {
      return res.data;
    });
};
