import { prisma } from "../../core/prisma.js";
export const list = () => prisma.cumRap.findMany({ orderBy: { maCumRap: "desc" } });
export const get = (id) => prisma.cumRap.findUnique({ where: { maCumRap: id } });
export const create = (data) => prisma.cumRap.create({ data });
export const update = (id, data) => prisma.cumRap.update({ where: { maCumRap: id }, data });
export const remove = (id) => prisma.cumRap.delete({ where: { maCumRap: id } });
