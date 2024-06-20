import prisma from "../../../prisma/index.js";

const del = async (req, res) => {
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
        res.status(500).send({ message: err });
    }
}

export default del;