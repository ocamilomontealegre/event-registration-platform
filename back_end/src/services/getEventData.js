import { findEvent } from '../utils/functions.js';

export const getEventData = (eventId) => {
  try {
    const result = findEvent(eventId);
    return result;
  } catch (err) {
    return { message: err.message };
  }
};