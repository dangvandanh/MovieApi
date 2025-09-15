import { asyncHandler } from "../../core/asyncHandler.js";
import { ok } from "../../core/response.js";
import * as svc from "./showtime.service.js";

export const postShowtime = asyncHandler(async (req, res) => ok(res, await svc.create(req.body), "Created"));
export const getByMovie = asyncHandler(async (req, res) => ok(res, await svc.byMovie(+req.params.movieId)));
export const getSeats = asyncHandler(async (req, res) => ok(res, await svc.seatsOfShowtime(+req.params.id)));
