// Importing the database array from the database.js file
import { database } from "./database.js";

// Function to find an event by its ID
export const findEvent = (eventId) => {
  // Using the Array.find() method to search for an event with the specified eventId
  return database.find(event => event.id === eventId);
};

// Function to find a user by their ID in a list of users
export const findUser = (userList, userId) => {
  // Using the Array.find() method to search for a user with the specified userId in the userList
  return userList.find(user => user === userId);
};