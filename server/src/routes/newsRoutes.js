// routes/newsRoutes.js
import express from "express";
import { createNews, getNews } from "../controllers/newsController.js";

const router = express.Router();

// Admin poate adăuga news
router.post("/", createNews);

// Oricine poate vedea news
router.get("/", getNews);

export default router;