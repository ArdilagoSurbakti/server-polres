// app/api/pengaduan/route.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Mengambil semua data pengaduan dari database
    const pengaduan = await prisma.feedback.findMany();

    // Mengirim data pengaduan ke client
    return NextResponse.json({
      status: 200,
      message: "Data pengaduan berhasil diambil.",
      data: pengaduan,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Terjadi kesalahan saat mengambil data pengaduan.",
      error: error.message,
    });
  }
}
