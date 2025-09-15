import { prisma } from "../../core/prisma";

export const list = () => prisma.rapPhim.findMany({ orderBy: { maRap: "desc" } });
export const get = (id: number) => prisma.rapPhim.findUnique({ where: { maRap: id } });
export const create = (data: any) => prisma.rapPhim.create({ data });
export const update = (id: number, data: any) => prisma.rapPhim.update({ where: { maRap: id }, data });
export const remove = (id: number) => prisma.rapPhim.delete({ where: { maRap: id } });
