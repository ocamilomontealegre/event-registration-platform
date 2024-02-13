import express, { json } from 'express';
import cors from 'cors';
const app = express();

// Enable CORS
app.use(cors());

// Parse request body
app.use(json());

export default app;