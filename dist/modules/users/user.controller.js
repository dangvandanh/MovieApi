import { asyncHandler } from "../../core/asyncHandler.js";
import * as svc from "./user.service.js";
import { ok } from "../../core/response.js";
export const getAll = asyncHandler(async (_req, res) => ok(res, await svc.list()));
export const getOne = asyncHandler(async (req, res) => ok(res, await svc.get(+req.params.id)));
export const postOne = asyncHandler(async (req, res) => ok(res, await svc.create(req.body), "Created"));
export const putOne = asyncHandler(async (req, res) => ok(res, await svc.update(+req.params.id, req.body), "Updated"));
export const deleteOne = asyncHandler(async (req, res) => ok(res, await svc.remove(+req.params.id), "Deleted"));
