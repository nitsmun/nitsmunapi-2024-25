import prisma from "../../../prisma/index.js";
import { Request, Response } from "express";

const read = async (req : Request, res : Response) : Promise<void> => {
    try {
        const task = await prisma.blogs.findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        );
        res.status(200).send(task);
    }
    catch (err) {
        res.status(500).send({ message: (err as Error).message});
    }
}

export default read;