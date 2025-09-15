import { prisma } from "../../core/prisma.js";
export const list = async (q) => prisma.phim.findMany({
    where: {
        ...(q?.dangChieu !== undefined ? { dangChieu: q.dangChieu } : {}),
        ...(q?.sapChieu !== undefined ? { sapChieu: q.sapChieu } : {}),
        ...(q?.hot !== undefined ? { hot: q.hot } : {})
    },
    orderBy: { maPhim: "desc" }
});
export const get = (id) => prisma.phim.findUnique({ where: { maPhim: id } });
export const create = (data) => prisma.phim.create({ data });
export const update = (id, data) => prisma.phim.update({ where: { maPhim: id }, data });
export const remove = (id) => prisma.phim.delete({ where: { maPhim: id } });
