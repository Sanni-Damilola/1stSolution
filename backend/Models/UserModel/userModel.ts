import mongoose from "mongoose";
import { IUser } from "../../interface/AllInterFace";

// creating User Model
//  👇👇
interface MainData extends IUser, mongoose.Document {}

const userSchema = new mongoose.Schema<IUser>(
  {
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
    userName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    isAdmin: {
      type: Boolean,
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
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("user", userSchema);
