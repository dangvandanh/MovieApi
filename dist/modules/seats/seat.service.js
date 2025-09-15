import { prisma } from "../../core/prisma.js";
export const list = () => prisma.ghe.findMany({ orderBy: { maGhe: "desc" } });
export const get = (id) => prisma.ghe.findUnique({ where: { maGhe: id } });
export const create = (data) => prisma.ghe.create({ data });
export const update = (id, data) => prisma.ghe.update({ where: { maGhe: id }, data });
export const remove = (id) => prisma.ghe.delete({ where: { maGhe: id } });
