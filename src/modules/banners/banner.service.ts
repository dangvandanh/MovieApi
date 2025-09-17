import prisma from "../../core/prisma.js";

export const list = () => prisma.banner.findMany({ orderBy: { maBanner: "desc" } });
export const get = (id: number) => prisma.banner.findUnique({ where: { maBanner: id } });
export const create = (data: any) => prisma.banner.create({ data });
export const update = (id: number, data: any) => prisma.banner.update({ where: { maBanner: id }, data });
export const remove = (id: number) => prisma.banner.delete({ where: { maBanner: id } });
