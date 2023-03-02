import mongoose from "mongoose";
import { ITargetData } from "../interface/AllInterFace";

interface MainData extends ITargetData, mongoose.Document {}

const TargetSchema = new mongoose.Schema<ITargetData>(
  {
    amount: {
      type: Number,
    },

    Targetbalance: {
      type: Number,
    },
    targetValue: {
      type: Boolean,
    },

    fixedAmount: {
      type: Number,
    },

    interest: {
      type: Number,
    },
    dateTime: {
      type: String,
    },

    title: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("targets", TargetSchema);
