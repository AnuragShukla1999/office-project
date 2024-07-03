import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dbConnection from './database/db.js';
import cookieParser from 'cookie-parser';
import UserRouter from './route/route.js';

import cors from 'cors';

dotenv.config();


dbConnection();


const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
});


app.use('/api', UserRouter);

app.get("/hi", (req, res) => {
    res.send('Hello');
});