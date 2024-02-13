import { database } from "./database.js";

// Find event
export const findEvent = (eventId) => {
  return database.find(event => event.id === eventId);
};

// Find userId
export const findUser = (userList, userId) => {
  return userList.find(user => user === userId);
}