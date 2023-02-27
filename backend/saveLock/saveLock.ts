import mongoose from "mongoose";
import { IQuickSave } from "../interface/AllInterFace";

// creating QuickSave Model
//  👇👇
interface MainData extends IQuickSave, mongoose.Document {}

const historySchema = new mongoose.Schema<IQuickSave>(
  {
    amount: {
      type: Number,
    },
    startTime: {
      type: Boolean,
    },
    dateTime: {
      type: String || Number,
    },
    interest: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("histories", historySchema);
