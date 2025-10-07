import express from "express"
import ControllerTemp from "../controllers/temperatura.js"

const router = express.Router();

router.post("/celFah", ControllerTemp.ConvertCelToFah)

export default router