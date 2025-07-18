import express from "express";
import { login } from "../controllers/authcontrollers.js";

const router_auth = express.Router();

// Route for user login
router_auth.post("/login", login);       
// Route for user registration (if needed, can be added later)

export default router_auth;