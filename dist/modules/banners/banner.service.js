import { prisma } from "../../core/prisma.js";
export const list = () => prisma.banner.findMany({ orderBy: { maBanner: "desc" } });
export const get = (id) => prisma.banner.findUnique({ where: { maBanner: id } });
export const create = (data) => prisma.banner.create({ data });
export const update = (id, data) => prisma.banner.update({ where: { maBanner: id }, data });
export const remove = (id) => prisma.banner.delete({ where: { maBanner: id } });
