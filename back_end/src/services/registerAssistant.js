// Importing the findEvent and findUser functions from the functions.js file in the utils directory
import { findEvent, findUser } from '../utils/functions.js';

// Function to register an assistant for an event
export const registerAssistant = (eventId, userId) => {
  try {
    // Finding the event with the provided eventId
    const event = findEvent(eventId);
    
    // Checking if the event has reached its capacity
    if (event.registrations.length >= event.capacity)
      return { message: 'Event\'s capacity is reached' };

    // Checking if the user is already registered for the event
    const user = findUser(event.registrations, userId);
    if (user)
      return { message: `User ${userId} is already registered for the event` };

    // Registering the user for the event by adding their userId to the registrations array
    event.registrations.push(userId);
    
    // Returning a success message
    return { message: `User ${userId} successfully registered for the event` };
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};