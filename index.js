import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const usuarios = [];
const posts = [];


app.post("/sign-up", (req, res) => {
    if (!req.body.username || !req.body.avatar) {
        res.status(400).send("Todos os campos são obrigatórios");
        return alert("Todos os campos são obrigatórios");
    }

    usuarios.push(req.body);
    res.status(201).send("Ok");
})

app.post("/tweets", (req, res) => {
    if (!req.body.username || !req.body.tweet) {
        res.status(400).send("Todos os campos são obrigatórios");
        return alert("Todos os campos são obrigatórios");
    }

    const usuario = usuarios.find((user) => user.username === req.body.username)

    const novoPost ={
        username: req.body.username,
		avatar: usuario.avatar,
		tweet: req.body.tweet
    }

    posts.push(novoPost);
    res.status(201).send("Ok");
})

app.get("/tweets", (req, res) => {

    res.send(posts);
})

app.listen(5000);