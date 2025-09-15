import { prisma } from "../../core/prisma.js";
export const list = () => prisma.nguoiDung.findMany({ orderBy: { taiKhoan: "desc" } });
export const get = (id) => prisma.nguoiDung.findUnique({ where: { taiKhoan: id } });
export const create = (data) => prisma.nguoiDung.create({ data });
export const update = (id, data) => prisma.nguoiDung.update({ where: { taiKhoan: id }, data });
export const remove = (id) => prisma.nguoiDung.delete({ where: { taiKhoan: id } });
