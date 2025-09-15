import { Request, Response } from "express";
import { asyncHandler } from "../../core/asyncHandler";
import * as svc from "./movie.service";
import { ok } from "../../core/response";

export const getMovies = asyncHandler(async (req: Request, res: Response) => {
  const { dangChieu, sapChieu, hot } = req.query;
  const data = await svc.list({
    dangChieu: dangChieu === "true" ? true : dangChieu === "false" ? false : undefined,
    sapChieu: sapChieu === "true" ? true : sapChieu === "false" ? false : undefined,
    hot: hot === "true" ? true : hot === "false" ? false : undefined
  });
  ok(res, data);
});
export const getMovie = asyncHandler(async (req, res) => ok(res, await svc.get(+req.params.id)));
export const postMovie = asyncHandler(async (req, res) => ok(res, await svc.create(req.body), "Created"));
export const putMovie = asyncHandler(async (req, res) => ok(res, await svc.update(+req.params.id, req.body), "Updated"));
export const deleteMovie = asyncHandler(async (req, res) => ok(res, await svc.remove(+req.params.id), "Deleted"));
