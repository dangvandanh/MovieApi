import { prisma } from "../../core/prisma";

export const list = () => prisma.heThongRap.findMany({ orderBy: { maHeThongRap: "desc" } });
export const get = (id: number) => prisma.heThongRap.findUnique({ where: { maHeThongRap: id } });
export const create = (data: any) => prisma.heThongRap.create({ data });
export const update = (id: number, data: any) => prisma.heThongRap.update({ where: { maHeThongRap: id }, data });
export const remove = (id: number) => prisma.heThongRap.delete({ where: { maHeThongRap: id } });
