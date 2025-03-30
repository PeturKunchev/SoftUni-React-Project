import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes.js';
import { auth } from './middlewares/authMiddleware.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config();

try {
    const uri = process.env.MONGODB_URI;
    console.log(uri);
    
    await mongoose.connect(uri);
    console.log('DB connected successfully!');
} catch (err) {
    console.log('Connection to DB failed!');
    console.log(err.message);
}

app.use(express.json());
app.use(cors());
app.use(auth);
app.use(routes);

// ✅ Define the correct path to the built frontend
const clientBuildPath = path.join(__dirname, '../../client/BookCatalogue/dist');
console.log(`Serving frontend from: ${clientBuildPath}`);

// ✅ Serve frontend build files
app.use(express.static(clientBuildPath));

// ✅ Catch-all route to serve `index.html` for React Router
app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// ✅ Start the server
app.listen(3030, () => console.log('RESTful server is running on http://localhost:3030...'));