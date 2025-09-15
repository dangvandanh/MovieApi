import jwt from "jsonwebtoken";
import { env } from "../configs/env.js";
export const authenticate = (req, res, next) => {
    const token = (req.headers.authorization || "").replace("Bearer ", "");
    if (!token)
        return res.status(401).json({ message: "Unauthorized" });
    try {
        const payload = jwt.verify(token, env.jwtSecret);
        req.user = payload;
        next();
    }
    catch {
        res.status(401).json({ message: "Invalid token" });
    }
};
export const authorize = (...roles) => (req, res, next) => {
    if (!req.user)
        return res.status(401).json({ message: "Unauthorized" });
    if (!roles.length || roles.includes(req.user.role))
        return next();
    return res.status(403).json({ message: "Forbidden" });
};
