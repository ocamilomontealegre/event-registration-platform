import { findEvent, findUser } from '../utils/functions.js';

export const registerAssistant = (eventId, userId) => {
  try {
    const event = findEvent(eventId);
    if(event.registrations.length >= event.capacity)
      return { message: 'Event"s capacity is reached' };

    const user = findUser(event.registrations, userId);
    if(user)
      return { message: `User ${userId} is already registered for the event` };

    event.registrations.push(userId);
    return { message: `User ${userId} successfully registered for the event` }
  } catch (err) {
    return { message: err.message };
  };
};