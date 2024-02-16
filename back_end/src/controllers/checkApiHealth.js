// Importing response function from responseManager.js file in utils directory
import { response } from '../utils/responseManager.js';

// Function to check API health
export const checkApiHealth = (req, res) => {
  // Calling response function to send a response to the client
  // The response includes a success type, name of the operation (addBook), and status code 200
  // Additionally, a message indicating the API is live is sent
  response(res, { type: 'success', name: 'addBook', statusCode: 200 }, { message: 'Great News! The API is now live' } );
};