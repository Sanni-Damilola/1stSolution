import mongoose from "mongoose";
import { IQuickSave } from "../interface/AllInterFace";

// creating History Model
//  👇👇
interface MainData extends IQuickSave, mongoose.Document {}

const historySchema = new mongoose.Schema<IQuickSave>(
  {
    amount: {
      type: String,
    },
    transactionRefrence: {
      type: String,
    },
    transactionType: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<MainData>("histories", historySchema);
