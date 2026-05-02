import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
  res.send('Job Portal API is running...');
});

mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/jobportal')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log('MongoDB connection error:', error.message));
