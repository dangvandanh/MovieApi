import { ApiError } from "../core/ApiError.js";
export const errorMiddleware = (err, _req, res, _next) => {
    const status = err instanceof ApiError ? err.statusCode : 500;
    res.status(status).json({ message: err.message || "Internal Server Error" });
};
