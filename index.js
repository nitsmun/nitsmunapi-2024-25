import express from "express";
import dotEnv from "dotenv";
import cors from "cors";
import * as controllers from "./src/controllers/index.js";


dotEnv.config();
const app = express();
app.use(express.json());
app.use(cors({ origins: [`${process.env.ADMIN}`, `${process.env.FRONTEND}`] }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.get('/', (req, res) => {
    res.status(200).send(`Server running at port ${process.env.PORT}`);
});

app.post('/blog/add', controllers.blogs.create);
app.get('/blog/read', controllers.blogs.read);
app.patch('/blog/update/:id', controllers.blogs.update);
app.delete('/blog/delete/:id', controllers.blogs.del);

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server running at port ${process.env.PORT}`);
});