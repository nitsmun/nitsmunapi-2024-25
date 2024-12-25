import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const updateParticipant = async(req: Request, res : Response) => {
    const { id, name, email, institute, paymentProof, choice1, choice2, choice3, allotted, portfolio } = req.body;

    try {
        if(!id) {
            return res.status(400).json({error : "No ID Found"});
        }
    
        const updatedParticipant = await prisma.participants.update({
            where: {
                id : String(id),
            },
            data : {
                ...(name && { name }),
                ...(email && { email }),
                ...(institute && { institute }),
                ...(paymentProof && { paymentProof }),
                ...(choice1 && { choice1 }),
                ...(choice2 && { choice2 }),
                ...(choice3 && { choice3 }),
                ...(allotted && { allotted }),
                ...(portfolio && { portfolio })
            }
        });
    
        return res.status(200).json(updatedParticipant).send("Participant Added Successfully");

    } catch (error) {
        console.log(error);
        return res.status(500).json({error : "Partcipant not updated"}).send("Participant not updated");
    }
    

}
