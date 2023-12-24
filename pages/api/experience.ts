import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, description } = req.body;
  const skill = await prisma.experience.create({
    data: {
      name,
      description,
    },
  });
  res.json(skill);
}
