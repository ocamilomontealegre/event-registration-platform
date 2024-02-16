// Importing the findEvent function from the functions.js file in the utils directory
import { findEvent } from '../utils/functions.js';

// Function to get event data by ID
export const getEventData = (eventId) => {
  try {
    // Attempt to find the event data using the provided eventId
    const result = findEvent(eventId);
    // Return the result
    return result;
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};