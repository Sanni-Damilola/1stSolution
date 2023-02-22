import mongoose from "mongoose";
import cors from "cors";
import express, { Request, Response } from "express";
import route from "../Routes/userRoute";

const app = express();
app.use(express.json()).use(cors());

// port number
const port: number = 2001;

// listening to port
app.listen(port, () => {
  console.log("Done on ", port);
});

// default or landing route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Up And Running ❕🚴‍♂️🚴‍♀️",
  });
});

app.use("/api", route); // route

// dataBase Name
const url: string = "mongodb://localhost/solution";
mongoose.connect(url).then(() => {
  console.log("connected to ", url);
}); // connecting to dataBase
