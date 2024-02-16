// Importing the logInfo function from the logger.js file
import { logInfo } from "./logger.js";

// Function to handle responses
export const response = (res, service, message) => {
  // Logging information about the service and message
  logInfo(`${service.name} |`, `${service.type} |`, `statusCode: ${service.statusCode} |`, JSON.stringify(message));
  // Sending the response with the provided status code and message
  return res.status(service.statusCode).send(message);
};