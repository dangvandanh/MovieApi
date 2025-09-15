import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.middleware.js";
import { getByMovie, getSeats, postShowtime } from "./showtime.controller.js";
const r = Router();
r.post("/", authenticate, authorize("QuanTri"), postShowtime);
r.get("/movie/:movieId", getByMovie);
r.get("/:id/seats", getSeats);
export default r;
