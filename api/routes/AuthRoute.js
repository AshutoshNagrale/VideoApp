import express from "express";
import { Google, Signin, Signup } from "../controllers/AuthController.js";

const authRouter = express.Router();

//CREATE UESR
authRouter.post("/signup", Signup);

//SIGN IN
authRouter.post("/signin", Signin);

//GOOGLE AUTH
authRouter.post("/google", Google);

export default authRouter;
