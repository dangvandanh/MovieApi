import { asyncHandler } from "../../core/asyncHandler.js";
import { ok } from "../../core/response.js";
import * as svc from "./booking.service.js";
export const postBooking = asyncHandler(async (req, res) => {
    const { maLichChieu, seats } = req.body;
    const data = await svc.book({ taiKhoan: req.user.taiKhoan, maLichChieu, seats });
    ok(res, data, "Đặt vé thành công");
});
