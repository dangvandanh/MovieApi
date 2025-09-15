import { prisma } from "../src/core/prisma";

async function main() {
  const cgv = await prisma.heThongRap.upsert({
    where: { maHeThongRap: 1 },
    update: {},
    create: { tenHeThongRap: "CGV", logo: "https://logo.cgv.vn" }
  });

  const cr = await prisma.cumRap.create({
    data: { tenCumRap: "CGV Vincom", diaChi: "Q1 - HCM", maHeThongRap: cgv.maHeThongRap }
  });

  const rap = await prisma.rapPhim.create({ data: { tenRap: "Rạp 1", maCumRap: cr.maCumRap } });

  // 40 ghế
  await prisma.$transaction(
    Array.from({ length: 40 }).map((_, i) =>
      prisma.ghe.create({
        data: { tenGhe: `A${i + 1}`, loaiGhe: i < 4 ? "Vip" : "Thuong", maRap: rap.maRap }
      })
    )
  );

  const phim = await prisma.phim.create({
    data: {
      tenPhim: "Avengers",
      trailer: "https://youtu.be/xyz",
      hinhAnh: "",
      moTa: "Marvel movie",
      ngayKhoiChieu: new Date(),
      hot: true,
      dangChieu: true
    }
  });

  await prisma.banner.create({ data: { maPhim: phim.maPhim, hinhAnh: "banner.jpg" } });

  await prisma.lichChieu.create({
    data: { maPhim: phim.maPhim, maRap: rap.maRap, ngayGioChieu: new Date(Date.now() + 864e5), giaVe: 90000 }
  });

  console.log("Seed done");
}

main().finally(() => prisma.$disconnect());
