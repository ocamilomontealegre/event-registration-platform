import express, { json } from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';

const app = express();

// Enable CORS
app.use(cors());

// Parse request body
app.use(json());

// Use defined endpoints
app.use(routes);

export default app;