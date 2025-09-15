import { asyncHandler } from "../../core/asyncHandler";
import { ok } from "../../core/response";
import * as svc from "./booking.service";

export const postBooking = asyncHandler(async (req: any, res) => {
  const { maLichChieu, seats } = req.body as { maLichChieu: number; seats: number[] };
  const data = await svc.book({ taiKhoan: req.user.taiKhoan, maLichChieu, seats });
  ok(res, data, "Đặt vé thành công");
});
