import { Request, Response } from "express";
import { asyncHandler } from "../../core/asyncHandler.js";
import * as svc from "./auth.service.js";
import { ok } from "../../core/response.js";

export const postRegister = asyncHandler(async (req: Request, res: Response) => {
  const data = await svc.register(req.body);
  ok(res, data, "Đăng ký thành công");
});

export const postLogin = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const data = await svc.login(email, password);
  ok(res, data, "Đăng nhập thành công");
});
