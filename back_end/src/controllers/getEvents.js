// Importing getEventList function from the getEventList.js file in the services directory
import { getEventList } from '../services/getEventList.js';
// Importing logInfo function from the logger.js file in the utils directory
import { logInfo } from '../utils/logger.js';
// Importing response function from the responseManager.js file in the utils directory
import { response } from '../utils/responseManager.js';

// Function to get a list of events
export const getEvents = (req, res) => {
  try {
    // Fetching the list of events
    const events = getEventList();
    // Logging information about the request and the retrieved events
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(events));

    // Sending a success response with the list of events
    response(res, { type: 'success', name: 'getEvents', statusCode: 200 }, events);
  } catch (err) {
    // If an error occurs during the process, sending a 500 error response with the error message
    response(res, { type: 'error', name: 'getEvents', statusCode: 500 }, { message: err.message });
  }
};