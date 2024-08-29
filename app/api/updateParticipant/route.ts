// app/api/updateParticipant/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function PUT(req: NextRequest) {
  const { id, points } = await req.json();

  try {
    const updatedParticipant = await prisma.participant.update({
      where: { id: parseInt(id) },
      data: { points },
    });
    return NextResponse.json(updatedParticipant);
  } catch (error) {
    const message = (error as Error).message;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
