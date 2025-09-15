import { prisma } from "../../core/prisma.js";

export const list = async (q?: { dangChieu?: boolean; sapChieu?: boolean; hot?: boolean }) =>
  prisma.phim.findMany({
    where: {
      ...(q?.dangChieu !== undefined ? { dangChieu: q.dangChieu } : {}),
      ...(q?.sapChieu !== undefined ? { sapChieu: q.sapChieu } : {}),
      ...(q?.hot !== undefined ? { hot: q.hot } : {})
    },
    orderBy: { maPhim: "desc" }
  });

export const get = (id: number) => prisma.phim.findUnique({ where: { maPhim: id } });

export const create = (data: any) => prisma.phim.create({ data });

export const update = (id: number, data: any) =>
  prisma.phim.update({ where: { maPhim: id }, data });

export const remove = (id: number) => prisma.phim.delete({ where: { maPhim: id } });
