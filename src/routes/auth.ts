import express from "express";
import { loginHandler, resisterHandler } from "../controllers/auth.js";
import { validate } from "../middleware/validation.js";
import { registerSchema, loginSchema } from "../validations/auth.js";

const router = express.Router();

router.post("/register", validate(registerSchema), resisterHandler);
router.post("/login", validate(loginSchema), loginHandler);

// router.get("/me", authenticateToken, getUserHandler);
export default router;