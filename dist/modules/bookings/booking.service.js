import { prisma } from "../../core/prisma.js";
export const book = async (payload) => {
    return prisma.$transaction(async (tx) => {
        const existing = await tx.datVe.findMany({
            where: { maLichChieu: payload.maLichChieu, maGhe: { in: payload.seats } },
            select: { maGhe: true }
        });
        if (existing.length) {
            const taken = existing.map(x => x.maGhe);
            throw new Error(`Ghế đã có người đặt: ${taken.join(", ")}`);
        }
        const creates = payload.seats.map((maGhe) => tx.datVe.create({
            data: {
                taiKhoan: payload.taiKhoan,
                maLichChieu: payload.maLichChieu,
                maGhe
            }
        }));
        const result = await Promise.all(creates);
        return { count: result.length, ve: result };
    });
};
