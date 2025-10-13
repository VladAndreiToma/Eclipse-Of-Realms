import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddlewareJWT.js";
import { getUserProfile } from "../controllers/userController.js";

const router = express.Router();

// la server address e disponibil pe linkul api domeniu:port/register serviciul
router.post("/register", registerUser);
// _______ la fel pe ruta /login
router.post("/login", loginUser);
// la fel pt getuserprofile unde metrica dealungul jocului
router.get("/profile", protect, getUserProfile)

export default router;