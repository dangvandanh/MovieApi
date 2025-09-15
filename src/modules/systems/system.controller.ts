import { Request, Response } from "express";
import { asyncHandler } from "../../core/asyncHandler.js";
import * as svc from "./system.service.js";
import { ok } from "../../core/response.js";

export const getAll = asyncHandler(async (_req: Request, res: Response) => ok(res, await svc.list()));
export const getOne = asyncHandler(async (req: Request, res: Response) => ok(res, await svc.get(+req.params.id)));
export const postOne = asyncHandler(async (req: Request, res: Response) => ok(res, await svc.create(req.body), "Created"));
export const putOne = asyncHandler(async (req: Request, res: Response) => ok(res, await svc.update(+req.params.id, req.body), "Updated"));
export const deleteOne = asyncHandler(async (req: Request, res: Response) => ok(res, await svc.remove(+req.params.id), "Deleted"));
