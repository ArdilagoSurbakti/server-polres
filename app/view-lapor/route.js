import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const pengaduan = await prisma.feedback.findMany();
console.log(pengaduan);

    // Buat response dengan header CORS
    const response = NextResponse.json({
      status: 200,
      message: "Data pengaduan berhasil diambil.",
      data: pengaduan,
    });

    // Tambahkan header CORS
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Terjadi kesalahan saat mengambil data pengaduan.",
      error: error.message,
    });
  }
}
