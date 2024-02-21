const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//MiddleWare//
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173/'],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "UPDATE"],
    credentials: true,
}))


app.get('/', (req, res)=>{
    res.send('Server Running Smoothly');
})

app.listen(port, ()=>{
    console.log(`Server Running on Port ${port}`);
})