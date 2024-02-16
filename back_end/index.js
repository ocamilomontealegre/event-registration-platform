// Importing the say function from the cowsay package
import { say } from 'cowsay';
// Importing the Express application instance from app.js
import app from './app.js';
// Importing the PORT constant from the config.js file
import { PORT } from './src/utils/config.js';

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Display a message in the console using cowsay to indicate that the server is running
  console.log(say({
    text: `Server listening on port http://localhost:${PORT}`, // Message indicating the server is running on a specific port
    w: 40, // Width of the speech bubble
    T: 'U ' // Style of the cow (U for Unicorn)
  }));
});