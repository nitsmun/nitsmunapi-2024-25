import prisma from "../../../prisma/index.js";
import { Request, Response } from "express";

const update = async (req : Request, res : Response) : Promise<void> => {
    try {
        const { name, url, thumbnail } = req.body;
        const { id } = req.params;
        const task = await prisma.blogs.update({
            where: {
                id
            },
            data: {
                name, url, thumbnail
            }
        });
        res.status(200).send(task);
    }
    catch (err) {
        res.status(500).send({ message: (err as Error).message });
    }
}

export default update;