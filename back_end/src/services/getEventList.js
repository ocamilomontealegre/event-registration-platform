import { database } from '../utils/database.js'

export const getEventList = () => {
  try {
    return { events: [ ... database ]  }
  } catch (err) {
    return { message: err.message };
  };
};