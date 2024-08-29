import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import rateLimit from "../../../lib/rateLimit"; // Adjust the path if necessary

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
});

export async function POST(req: NextRequest) {
  try {
    const rateLimitResponse = await limiter.check(req);
    if (rateLimitResponse) return rateLimitResponse;

    const { username, password } = await req.json();

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    console.log("Admin Username:", adminUsername);
    console.log(
      "Admin Password Hash:",
      adminPasswordHash ? adminPasswordHash : "No Hash Found"
    );

    if (!adminUsername || !adminPasswordHash) {
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    if (username !== adminUsername) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const passwordMatch = await bcrypt.compare(password, adminPasswordHash);
    console.log("Password Match:", passwordMatch);
    if (!passwordMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign({ username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({
      success: true,
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
