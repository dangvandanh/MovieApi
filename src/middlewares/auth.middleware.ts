import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../configs/env";

export type JwtUser = { taiKhoan: number; role: string };

export const authenticate = (
  req: Request & { user?: JwtUser },
  res: Response,
  next: NextFunction
) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  try {
    const payload = jwt.verify(token, env.jwtSecret) as JwtUser;
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const authorize =
  (...roles: string[]) =>
  (req: Request & { user?: JwtUser }, res: Response, next: NextFunction) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!roles.length || roles.includes(req.user.role)) return next();
    return res.status(403).json({ message: "Forbidden" });
  };
