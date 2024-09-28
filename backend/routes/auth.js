import express from "express";
import { register,login } from "../controllers/authController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("auth page");
});

router.post("/register", register);

router.post('/login',login)

export default router;
