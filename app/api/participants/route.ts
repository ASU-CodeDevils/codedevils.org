// app/api/participants/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const participants = await prisma.participant.findMany({
      orderBy: {
        points: "desc",
      },
    });
    return NextResponse.json(participants); // Ensure response is always JSON
  } catch (error) {
    const message = (error as Error).message;
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
