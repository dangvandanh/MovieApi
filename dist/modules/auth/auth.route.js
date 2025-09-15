import { Router } from "express";
import { postLogin, postRegister } from "./auth.controller.js";
const r = Router();
r.post("/register", postRegister);
r.post("/login", postLogin);
export default r;
