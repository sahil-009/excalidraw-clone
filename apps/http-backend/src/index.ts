import express from 'express';
import jwt from 'jsonwebtoken'; 

const app =express();

app.post("/signup ", (req, res) => {

})

app.post("/signin", (req, res) => {
    const userId =1;
    const token = jwt.sign({ userId
    }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });

 })

 app.post("/room", middleware(req, res) => {

 })

 app.listen(3000)