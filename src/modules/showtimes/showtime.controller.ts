import { asyncHandler } from "../../core/asyncHandler";
import { ok } from "../../core/response";
import * as svc from "./showtime.service";

export const postShowtime = asyncHandler(async (req, res) => ok(res, await svc.create(req.body), "Created"));
export const getByMovie = asyncHandler(async (req, res) => ok(res, await svc.byMovie(+req.params.movieId)));
export const getSeats = asyncHandler(async (req, res) => ok(res, await svc.seatsOfShowtime(+req.params.id)));
