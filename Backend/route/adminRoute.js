import express from "express"
import { getGame,addGame } from "../controller/gameController.js";

const router = express.Router();
router.get("/", getGame);
router.post("/addgame", addGame);

export default router;