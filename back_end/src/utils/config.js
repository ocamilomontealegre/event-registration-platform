// Importing and configuring the dotenv package to load environment variables from a .env file
import 'dotenv/config';

// Exporting a constant PORT whose value is retrieved from the environment variable process.env.PORT
export const PORT = process.env.PORT || 3002;