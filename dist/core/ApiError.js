import httpStatus from "http-status";
export class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const throwNotFound = (msg = "Not found") => new ApiError(httpStatus.NOT_FOUND, msg);
