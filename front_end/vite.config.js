// Importing the defineConfig function from Vite
import { defineConfig } from 'vite';
// Importing the react plugin for React support
import react from '@vitejs/plugin-react-swc';

// Exporting the Vite configuration
export default defineConfig({
  // Configuring the server settings
  server: {
    // Setting the port to the value of the PORT environment variable, or defaulting to 3004 if PORT is not defined
    port: process.env.PORT || 3004
  },
  // Configuring Vite plugins, including the react plugin for React support
  plugins: [react()]
});