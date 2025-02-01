import { NextResponse } from "next/server";

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const data = await req.json()
    const { nama, nomorTelepon, email } = data;
    const pengaduanBaru = await prisma.feedback.create({
        data: {
            nama,
            nomorTelepon,
            email,
        },
    });

    return NextResponse.json({
        status: 200,
        message: pengaduanBaru

    });
}