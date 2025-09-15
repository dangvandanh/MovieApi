import { Router } from "express";
import { authenticate, authorize } from "../../middlewares/auth.middleware";
import { deleteMovie, getMovie, getMovies, postMovie, putMovie } from "./movie.controller";

const r = Router();

r.get("/", getMovies);
r.get("/:id", getMovie);
r.post("/", authenticate, authorize("QuanTri"), postMovie);
r.put("/:id", authenticate, authorize("QuanTri"), putMovie);
r.delete("/:id", authenticate, authorize("QuanTri"), deleteMovie);

export default r;
