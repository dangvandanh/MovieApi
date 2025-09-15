import { Router } from "express";
import { postLogin, postRegister } from "./auth.controller";
const r = Router();
r.post("/register", postRegister);
r.post("/login", postLogin);
export default r;
