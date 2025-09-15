import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { postBooking } from "./booking.controller.js";
const r = Router();
r.post("/", authenticate, postBooking);
export default r;
