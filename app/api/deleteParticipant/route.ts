// app/api/deleteParticipant/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  try {
    const deletedParticipant = await prisma.participant.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json(deletedParticipant);
  } catch (error) {
    const message = (error as Error).message;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
