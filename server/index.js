





import express from 'express';
import mongoose, { Mongoose } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';



dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes); //routes

app.get('/', (req, res) => {
    res.send('API is working!');

});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => cpnsole.console.error('MongoDB error:', err));



