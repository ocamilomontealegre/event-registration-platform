// Importing registerAssistant function from the registerAssistant.js file in the services directory
import { registerAssistant } from '../services/registerAssistant.js';
// Importing registerSchema from the schemas.js file in the validations directory
import { registerSchema } from '../validations/schemas.js';
// Importing validateProperties function from the validations.js file in the validations directory
import { validateProperties } from '../validations/validations.js';
// Importing logInfo function from the logger.js file in the utils directory
import { logInfo } from '../utils/logger.js';
// Importing response function from the responseManager.js file in the utils directory
import { response } from '../utils/responseManager.js';

// Function to register an assistant for an event
export const registerForEvent = (req, res) => {
  // Extracting eventId from request parameters
  const { eventId } = req.params;
  // Extracting userId from request body
  const { userId } = req.body;

  // Validating eventId and userId using registerSchema
  const validationResult = validateProperties(registerSchema, { eventId, userId });
  // If validation fails, sending an error response
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'registerForEvent', statusCode: validationResult.statusCode }, { message: validationResult.message });

  try {
    // Registering assistant for the event
    const result = registerAssistant(Number(eventId), userId);
    // Logging information about the request and the result of registration
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result));

    // Sending a success response with the registration result
    response(res, { type: 'success', name: 'eventData', statusCode: 200 }, result);
  } catch (error) {
    // If an error occurs during the process, sending a 500 error response with the error message
    response(res, { type: 'error', name: 'registerForEvent', statusCode: 500 }, { message: error.message });
  }
};