import prisma from "../../../prisma/index.js";

const create = async (req, res) => {
    try {
        const { name, url, thumbnail } = req.body;
        const task = await prisma.blogs.create({
            data: {
                name, url, thumbnail
            }
        });
        res.status(200).send({ message: "Blog uploaded successfully!!" });
    }
    catch (err) {
        res.status(500).send({ message: err });
    }
}

export default create;