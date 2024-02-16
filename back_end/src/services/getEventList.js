// Importing the database object from the database.js file in the utils directory
import { database } from '../utils/database.js';

// Function to get a list of events
export const getEventList = () => {
  try {
    // Attempt to return a list of events from the database
    // Assuming database is an array of events
    return { events: [ ...database ] };
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};