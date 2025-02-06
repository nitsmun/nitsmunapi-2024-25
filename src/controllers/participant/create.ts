import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import * as utils from "../../utils";

const prisma = new PrismaClient();

const createParticipant = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    institute,
    paymentProof,
    previousExperience,
    phone,
    scholar_id,
    branch,
    choice1,
    choice2,
    choice3,
    choice4,
    allotted,
    portfolio,
    members,
    portfolioC11,
    portfolioC12,
    portfolioC13,
    portfolioC21,
    portfolioC22,
    portfolioC23,
    portfolioC31,
    portfolioC32,
    portfolioC33,
    portfolioC41,
    portfolioC42,
    portfolioC43,
  } = req.body;

  try {
    const newParticipant = await prisma.participants.create({
      data: {
        name,
        email,
        institute,
        phone,
        paymentProof,
        scholar_id,
        branch,
        choice1,
        choice2,
        choice3,
        choice4,
        allotted,
        portfolio,
        members,
        previousExperience,
        portfolioC11,
        portfolioC12,
        portfolioC13,
        portfolioC21,
        portfolioC22,
        portfolioC23,
        portfolioC31,
        portfolioC32,
        portfolioC33,
        portfolioC41,
        portfolioC42,
        portfolioC43
      },
    });

    res.status(200).json({
      message: "Participant created successfully!",
      participant: newParticipant,
    });
    try {
      await utils.email.sendCongratulationsEmail(email);
    }
    catch (err) {
      res.status(402).json({
        error: "Could not send email!!",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Participant creation failed!",
    });
  }
};

export default createParticipant;