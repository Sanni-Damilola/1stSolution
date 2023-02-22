import mongoose from "mongoose";
import { IUser } from "../interface/AllInterFace";

interface MainData extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  accountNumber: {
    type: Number,
  },
  verified: {
    type: Boolean,
  },
  wallet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallets",
    },
  ],
  history: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "histories",
    },
  ],
});
