import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const searchEvent = async(eventId) => {
  try {
    const result = await axios.get(`${baseUrl}/${eventId}`);
    return result.data;
  } catch (err) {
    console.error(err)
  };
};