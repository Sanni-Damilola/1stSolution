import mongoose from "mongoose";
import cors from "cors";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json()).use(cors());

const port: number = 2001;

app.listen(port, () => {
  console.log("Done on ", port);
});

// default or landing route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Up And Running ❕🚴‍♂️🚴‍♀️",
  });
});

// dataBase Name
const url: string = "mongodb://localhost/solution";
mongoose.connect(url).then(() => {
  console.log("connected to ", url);
}); // connecting to dataBase
