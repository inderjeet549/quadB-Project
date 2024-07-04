import express from "express";
import { getGame } from "../controller/gameController.js";
const router = express.Router();

router.get("/", getGame);

export default router;