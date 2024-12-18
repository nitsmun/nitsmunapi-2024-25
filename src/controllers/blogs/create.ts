import prisma from "../../../prisma/index.js";
import { Request, Response } from "express";

const create = async (req : Request, res : Response) : Promise<void> => {
    try {
        const { name, url, thumbnail } = req.body;
        const task = await prisma.blogs.create({
            data: {
                name, 
                url, 
                thumbnail
            }
        });
        res.status(200).send({ message: "Blog uploaded successfully!!" });
    }
    catch (err) {
        res.status(500).send({ message: (err as Error).message });
    }
}

export default create;