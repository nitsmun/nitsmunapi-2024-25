import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const updateParticipant = async (req: Request, res: Response): Promise<void> => {
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
    const id=req.params.id;
    try {
        if (!id) {
            res.status(400).json({ error: "No ID Found" });
        }

        const updatedParticipant = await prisma.participants.update({
            where: {
                id: id,
            },
            data: {
                ...(name && { name }),
                ...(email && { email }),
                ...(institute && { institute }),
                ...(paymentProof && { paymentProof }),
                ...(scholar_id && { scholar_id }),
                ...(branch && { branch }),
                ...(choice1 && { choice1 }),
                ...(choice2 && { choice2 }),
                ...(choice3 && { choice3 }),
                ...(allotted && { allotted }),
                ...(portfolio && { portfolio }),
            },
        });
        res.status(200).json({
            message: "Updated successfully!!",
            updatedParticipant,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Participant not updated",
        });
    }
};

export default updateParticipant;
