import mongoose from "mongoose";
import cors from "cors";
import express, { Request, Response } from "express";
import route from "../Routes/userRoute";

const app = express();
app.use(express.json()).use(cors());

const port: number = 2001; // port number

// listening to port
app.listen(port, () => {
  console.log("Done on ", port);
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Up And Running ❕🚴‍♂️🚴‍♀️",
  });
}); // default or landing route

app.use("/api", route); // route

const url: string = "mongodb://localhost/solution"; // dataBase Name
mongoose.connect(url).then(() => {
  console.log("connected to ", url);
}); // connecting to dataBase
