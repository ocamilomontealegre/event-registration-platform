// Importing eventIdSchema from the schemas.js file in the validations directory
import { eventIdSchema } from '../validations/schemas.js';
// Importing validateProperties function from the validations.js file in the validations directory
import { validateProperties } from '../validations/validations.js';
// Importing getEventData function from the getEventData.js file in the services directory
import { getEventData } from '../services/getEventData.js'; 
// Importing logInfo function from the logger.js file in the utils directory
import { logInfo } from '../utils/logger.js';
// Importing response function from the responseManager.js file in the utils directory
import { response } from '../utils/responseManager.js';

// Function to get event data by ID
export const getEventById = (req, res) => {
  // Extracting eventId from request parameters
  const { eventId } = req.params;

  // Validating eventId using eventIdSchema
  const validationResult = validateProperties(eventIdSchema, { eventId });
  // If validation fails, sending an error response
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'getEventById', statusCode: validationResult.statusCode }, { message: validationResult.message });

  try {
    // Fetching event data based on the provided eventId
    const eventData = getEventData(Number(eventId));
    // Logging information about the request and retrieved eventData
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, eventData);

    // If eventData is not found, sending a 404 error response
    if (!eventData) 
      return response(res, { type: 'error', name: 'getEventById', statusCode: 404 }, { message: 'Event not found' });

    // If eventData is found, sending a success response with the eventData
    response(res, { type: 'success', name: 'eventData', statusCode: 200 }, eventData);
  } catch (err) {
    // If an error occurs during the process, sending a 500 error response with the error message
    response(res, { type: 'error', name: 'getEventById', statusCode: 500 }, { message: err.message });
  }
};