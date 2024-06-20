import prisma from "../../../prisma/index.js";

const update = async (req, res) => {
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
        res.status(500).send({ message: err });
    }
}

export default update;