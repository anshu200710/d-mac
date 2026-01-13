import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());   

await connectDB()

// api routes
app.use('/api/auth', authRoutes)

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
}); 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});