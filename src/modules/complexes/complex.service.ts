import { prisma } from "../../core/prisma";

export const list = () => prisma.cumRap.findMany({ orderBy: { maCumRap: "desc" } });
export const get = (id: number) => prisma.cumRap.findUnique({ where: { maCumRap: id } });
export const create = (data: any) => prisma.cumRap.create({ data });
export const update = (id: number, data: any) => prisma.cumRap.update({ where: { maCumRap: id }, data });
export const remove = (id: number) => prisma.cumRap.delete({ where: { maCumRap: id } });
