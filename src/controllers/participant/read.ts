import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { participant } from "..";

const prisma = new PrismaClient();

const readParticipants = async(req: Request, res: Response) : Promise<void> => {
    try {

        const participants = await prisma.participants.findMany();
        res.status(200).json(participants);

        if(!participant){
            res.status(402).json({message: "Participant not found"});
            res.status(200).json(participant);
        }

    } catch (error) {
        console.log("Error! Participants can't be fetched...", error);
        res.status(500).json({ message: "Partcipants fetching Failed" });
    }
};

export default readParticipants;