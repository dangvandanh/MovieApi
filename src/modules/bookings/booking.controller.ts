// src/modules/bookings/booking.controller.ts
import { Request, Response } from "express";
import prisma from "../../core/prisma.js";
import { asyncHandler } from "../../core/asyncHandler.js";

// POST /api/bookings
// body: { maLichChieu: number, seats: number[] }
export const postBooking = asyncHandler(async (req: any, res: Response) => {
  const userId = req.user?.taiKhoan; // auth middleware gắn vào
  const { maLichChieu, seats } = req.body as {
    maLichChieu: number;
    seats: number[];
  };

  if (!userId) throw new Error("Unauthorized");
  if (!maLichChieu || !Array.isArray(seats) || seats.length === 0) {
    throw new Error("Thiếu dữ liệu đặt vé");
  }

  // Mỗi ghế là 1 bản ghi DatVe
  const created = await Promise.all(
    seats.map((maGhe) =>
      prisma.datVe.create({
        data: { taiKhoan: userId, maLichChieu, maGhe },
        include: {
          lichChieu: {
            include: {
              rap: { include: { cumRap: { include: { heThongRap: true } } } },
              phim: true,
            },
          },
          ghe: true,
        },
      })
    )
  );

  res.json({ message: "Đặt vé thành công", data: created });
});

// GET /api/bookings/me
export const getMyBookings = asyncHandler(async (req: any, res: Response) => {
  const userId = req.user?.taiKhoan;
  if (!userId) throw new Error("Unauthorized");

  const list = await prisma.datVe.findMany({
    where: { taiKhoan: userId },
    orderBy: { createdAt: "desc" },
    include: {
      lichChieu: {
        include: {
          rap: { include: { cumRap: { include: { heThongRap: true } } } },
          phim: true,
        },
      },
      ghe: true,
    },
  });

  // Chuẩn hoá dữ liệu trả về
  const data = list.map((b) => ({
    maVe: b.id,
    ngayDat: b.createdAt,
    ghe: {
      maGhe: b.ghe.maGhe,
      tenGhe: b.ghe.tenGhe,
      loaiGhe: b.ghe.loaiGhe,
    },
    lichChieu: b.lichChieu && {
      maLichChieu: b.lichChieu.maLichChieu,
      ngayGioChieu: b.lichChieu.ngayGioChieu,
      giaVe: b.lichChieu.giaVe,
      rap: b.lichChieu.rap && {
        maRap: b.lichChieu.rap.maRap,
        tenRap: b.lichChieu.rap.tenRap,
        cumRap: b.lichChieu.rap.cumRap && {
          maCumRap: b.lichChieu.rap.cumRap.maCumRap,
          tenCumRap: b.lichChieu.rap.cumRap.tenCumRap,
          diaChi: b.lichChieu.rap.cumRap.diaChi,
          heThongRap: b.lichChieu.rap.cumRap.heThongRap && {
            maHeThongRap: b.lichChieu.rap.cumRap.heThongRap.maHeThongRap,
            tenHeThongRap:
              b.lichChieu.rap.cumRap.heThongRap.tenHeThongRap,
            logo: b.lichChieu.rap.cumRap.heThongRap.logo,
          },
        },
      },
      phim: b.lichChieu.phim && {
        maPhim: b.lichChieu.phim.maPhim,
        tenPhim: b.lichChieu.phim.tenPhim,
        hinhAnh: b.lichChieu.phim.hinhAnh,
        moTa: b.lichChieu.phim.moTa,
      },
    },
  }));

  res.json({ message: "OK", data });
});
