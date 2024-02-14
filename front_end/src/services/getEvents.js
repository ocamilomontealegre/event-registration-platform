import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const getEvents = async() => {
  try {
    const result = await axios.get(baseUrl);
    return result.data.events;
  } catch (err) {
    console.error(err);
  }
};