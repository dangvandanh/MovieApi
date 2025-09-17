import { prisma } from "../../core/prisma.js";
export const create = (data) => prisma.lichChieu.create({ data: { ...data, ngayGioChieu: new Date(data.ngayGioChieu) } });
export const byMovie = (maPhim) => prisma.lichChieu.findMany({
    where: { maPhim },
    include: {
        rap: { include: { cumRap: { include: { heThongRap: true } } } },
        phim: true,
    },
    orderBy: { ngayGioChieu: "asc" },
});
export const seatsOfShowtime = async (maLichChieu) => {
    const lc = await prisma.lichChieu.findUnique({
        where: { maLichChieu },
        include: {
            rap: { include: { gheList: true } },
            datVes: true,
        },
    });
    if (!lc)
        throw new Error("Không tìm thấy lịch chiếu");
    const bookedSet = new Set(lc.datVes.map((v) => v.maGhe));
    return lc.rap.gheList.map((g) => ({ ...g, daDat: bookedSet.has(g.maGhe) }));
};
