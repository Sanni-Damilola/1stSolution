import { IUser } from "../interface/interface";
import axios from "axios";

const localUrl = "http://loaclhost/api";

export const register = async (data: IUser) => {
  await axios.post(`${localUrl}/postUser`, data).then((res) => res.data);
};
