import mongoose from "mongoose";
import { IHistory } from "../interface/AllInterFace";

// creating History Model
//  👇👇
interface MainData extends IHistory, mongoose.Document {}

const historySchema = new mongoose.Schema<IHistory>({
  message: {
    type: String,
  },
  transactionRefrence: {
    type: Number,
  },
  transactionType: {
    type: String,
  },
});

export default mongoose.model<MainData>("histories", historySchema);
