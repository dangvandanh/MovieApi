import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware";
import { postBooking } from "./booking.controller";
const r = Router();
r.post("/", authenticate, postBooking);
export default r;
