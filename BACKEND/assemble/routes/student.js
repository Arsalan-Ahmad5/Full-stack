import express from "express";
import { homeController } from "../controllers/homeContriller.js";
import { informationController } from "../controllers/informationController.js";
const router = express.Router();

router.get("/", homeController);


router.get("/info", informationController);

export default router;