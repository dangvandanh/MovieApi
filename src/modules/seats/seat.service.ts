import prisma from "../../core/prisma.js";

export const list = () => prisma.ghe.findMany({ orderBy: { maGhe: "desc" } });
export const get = (id: number) => prisma.ghe.findUnique({ where: { maGhe: id } });
export const create = (data: any) => prisma.ghe.create({ data });
export const update = (id: number, data: any) => prisma.ghe.update({ where: { maGhe: id }, data });
export const remove = (id: number) => prisma.ghe.delete({ where: { maGhe: id } });
