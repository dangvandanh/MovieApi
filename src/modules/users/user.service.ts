import { prisma } from "../../core/prisma.js";

export const list = () => prisma.nguoiDung.findMany({ orderBy: { taiKhoan: "desc" } });
export const get = (id: number) => prisma.nguoiDung.findUnique({ where: { taiKhoan: id } });
export const create = (data: any) => prisma.nguoiDung.create({ data });
export const update = (id: number, data: any) => prisma.nguoiDung.update({ where: { taiKhoan: id }, data });
export const remove = (id: number) => prisma.nguoiDung.delete({ where: { taiKhoan: id } });
