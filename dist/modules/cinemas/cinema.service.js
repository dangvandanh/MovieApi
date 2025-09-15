import { prisma } from "../../core/prisma.js";
export const list = () => prisma.rapPhim.findMany({ orderBy: { maRap: "desc" } });
export const get = (id) => prisma.rapPhim.findUnique({ where: { maRap: id } });
export const create = (data) => prisma.rapPhim.create({ data });
export const update = (id, data) => prisma.rapPhim.update({ where: { maRap: id }, data });
export const remove = (id) => prisma.rapPhim.delete({ where: { maRap: id } });
