import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

try {
    const uri = process.env.MONGODB_URI;
    console.log(uri);
    
    await mongoose.connect(uri);

    console.log('DB connected successfully! ');
} catch (err) {
    console.log('Connection to DB failed!');
    console.log(err.message);
}

app.use(express.json());
app.use(cors());
app.use(auth);

app.use(routes);

app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'))
