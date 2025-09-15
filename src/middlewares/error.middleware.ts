import { NextFunction, Request, Response } from "express";
import { ApiError } from "../core/ApiError.js";

export const errorMiddleware = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err instanceof ApiError ? err.statusCode : 500;
  res.status(status).json({ message: err.message || "Internal Server Error" });
};
