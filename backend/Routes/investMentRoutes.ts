import { CreatInvestify } from "../Controller/investController";
import express from "express";

const router = express.Router();

router.post("/invest/:id", CreatInvestify);

export default router;
