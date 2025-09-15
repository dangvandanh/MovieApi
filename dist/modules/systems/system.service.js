import { prisma } from "../../core/prisma.js";
export const list = () => prisma.heThongRap.findMany({ orderBy: { maHeThongRap: "desc" } });
export const get = (id) => prisma.heThongRap.findUnique({ where: { maHeThongRap: id } });
export const create = (data) => prisma.heThongRap.create({ data });
export const update = (id, data) => prisma.heThongRap.update({ where: { maHeThongRap: id }, data });
export const remove = (id) => prisma.heThongRap.delete({ where: { maHeThongRap: id } });
