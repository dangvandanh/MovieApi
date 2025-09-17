import prisma from "../../core/prisma.js";
import type { Ghe } from "@prisma/client";

export const create = (data: {
  maRap: number; maPhim: number; ngayGioChieu: Date | string; giaVe: number;
}) => prisma.lichChieu.create({ data: { ...data, ngayGioChieu: new Date(data.ngayGioChieu) } });

export const byMovie = (maPhim: number) =>
  prisma.lichChieu.findMany({
    where: { maPhim },
    include: {
      rap: { include: { cumRap: { include: { heThongRap: true } } } },
      phim: true,
    },
    orderBy: { ngayGioChieu: "asc" },
  });

export const seatsOfShowtime = async (maLichChieu: number) => {
  const lc = await prisma.lichChieu.findUnique({
    where: { maLichChieu },
    include: {
      rap: { include: { gheList: true } },
      datVes: true,
    },
  });
  if (!lc) throw new Error("Không tìm thấy lịch chiếu");

  const bookedSet = new Set<number>(lc.datVes.map((v: { maGhe: number }) => v.maGhe));
  return lc.rap.gheList.map((g: Ghe) => ({ ...g, daDat: bookedSet.has(g.maGhe) }));
};
