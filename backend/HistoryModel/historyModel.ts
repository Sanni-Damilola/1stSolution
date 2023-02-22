import mongoose from "mongoose";
import { IHistory } from "../interface/AllInterFace";

interface MainData extends IHistory, mongoose.Document {}

const historySchema = new mongoose.Schema<IHistory>({
  message: {
    type: String,
  },
  transactionRefrence: {
    type: String,
  },
  transactionType: {
    type: String,
  },
});

export default mongoose.model<MainData>("history", historySchema);
