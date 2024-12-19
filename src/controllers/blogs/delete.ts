import prisma from "../../../prisma/index.js";
import { Request, Response } from "express";

const del = async (req : Request, res : Response) : Promise<void> => {
    try {
        const { id } = req.params;
        const task = await prisma.blogs.delete({
            where: {
                id
            }
        });
        res.status(200).send(task);
    }
    catch (err) {
        res.status(500).send({ message: (err as Error).message });
    }
}

export default del;