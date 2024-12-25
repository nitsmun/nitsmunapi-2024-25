import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const createParticipant = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    institute,
    paymentProof,
    scholar_id,
    branch,
    choice1,
    choice2,
    choice3,
    allotted,
    portfolio,
  } = req.body;

  try {
    const newParticipant = await prisma.participants.create({
      data: {
        name,
        email,
        institute,
        paymentProof,
        scholar_id,
        branch,
        choice1,
        choice2,
        choice3,
        allotted,
        portfolio,
      },
    });

    res.status(200).json({
      message: "Participant created successfully!",
      participant: newParticipant,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Participant creation failed!",
    });
  }
};

export default createParticipant;