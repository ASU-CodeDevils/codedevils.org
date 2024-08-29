// app/api/addParticipant/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function POST(req: NextRequest) {
  const { name, points } = await req.json();

  try {
    const newParticipant = await prisma.participant.create({
      data: { name, points },
    });
    return NextResponse.json(newParticipant);
  } catch (error) {
    const message = (error as Error).message;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
