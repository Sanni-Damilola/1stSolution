import mongoose from "mongoose";
import { IinvestorModel } from "../../interface/AllInterFace"; 
interface MainData extends IinvestorModel, mongoose.Document {}

const investSchema = new mongoose.Schema<IinvestorModel>(
  {
    title: {
      type: String,
    },

    status: {
      type: Boolean,
    },

    startTime: {
      type: String,
    },

    percentageInterest: {
      type: Number,
    },

    duration: {
      type: String,
    },

    category: {
      type: String,
    },

    totalUnit: {
      type: Number,
    },

    description: {
      type: String,
    },

    amountPerUnit: {
      type: Number,
    },

    investors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "investors",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("investments", investSchema);
