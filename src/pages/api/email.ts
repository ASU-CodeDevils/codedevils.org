import { NextApiRequest, NextApiResponse } from "next";
require("dotenv");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // get the data sent from the frontend
    const { email, subject, message } = req.body;

    res.status(200).json({ message: "API endpoint called successfully" });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
