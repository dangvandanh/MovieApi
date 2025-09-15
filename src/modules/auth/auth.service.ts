import { prisma } from "../../core/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../configs/env.js";

export const register = async (input: {
  hoTen: string;
  email: string;
  soDt: string;
  matKhau: string;
  loaiNguoiDung?: string;
}) => {
  const existed = await prisma.nguoiDung.findUnique({ where: { email: input.email } });
  if (existed) throw new Error("Email đã tồn tại");
  const hashed = await bcrypt.hash(input.matKhau, 10);
  const user = await prisma.nguoiDung.create({
    data: { ...input, matKhau: hashed, loaiNguoiDung: input.loaiNguoiDung ?? "KhachHang" }
  });
  return { taiKhoan: user.taiKhoan, email: user.email };
};

export const login = async (email: string, password: string) => {
  const user = await prisma.nguoiDung.findUnique({ where: { email } });
  if (!user) throw new Error("Sai thông tin đăng nhập");
  const ok = await bcrypt.compare(password, user.matKhau);
  if (!ok) throw new Error("Sai thông tin đăng nhập");
  const token = jwt.sign(
    { taiKhoan: user.taiKhoan, role: user.loaiNguoiDung },
    env.jwtSecret,
    { expiresIn: "7d" }
  );
  return { token };
};
