// Importing required modules
import express, { json } from 'express'; // Importing Express and json middleware for parsing JSON bodies
import cors from 'cors'; // Importing CORS middleware for enabling Cross-Origin Resource Sharing
import routes from './src/routes/routes.js'; // Importing routes from the routes file

// Creating an instance of the Express application
const app = express();

// Enable CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Parse JSON request bodies
app.use(json());

// Use defined endpoints by mounting the routes middleware
app.use(routes);

// Exporting the Express application instance as default
export default app;