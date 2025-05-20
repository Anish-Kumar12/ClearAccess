import express from 'express';
import dotenv from 'dotenv';
import { AppDataSource } from './config/database'; // adjust path if needed

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize DB first, then start the server
AppDataSource.initialize()
  .then(() => {
    console.log('✅ Database initialized successfully.');

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });
  })
  .catch((error:any) => {
    console.error('❌ Failed to initialize database:', error);
  });
