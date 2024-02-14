import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const registerForEvent = async(eventId, userId) => {
  try {
    const result = await axios.post(`${baseUrl}/${eventId}/register`, { userId });
    return result.data.message;
  } catch (err) {
    console.error(err);
  };
};