// src/modules/bookings/booking.route.ts
import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { postBooking, getMyBookings } from "./booking.controller.js";

const r = Router();

// Tạo vé
r.post("/", authenticate, postBooking);

// Danh sách vé của user đang đăng nhập
r.get("/me", authenticate, getMyBookings);

export default r;
