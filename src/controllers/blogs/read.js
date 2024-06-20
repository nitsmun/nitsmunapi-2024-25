import prisma from "../../../prisma/index.js";

const read = async (req, res) => {
    try {
        const task = await prisma.blogs.findMany();
        res.status(200).send(task);
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default read;