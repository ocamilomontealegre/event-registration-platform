import { getEventList } from '../services/getEventList.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js'

export const getEvents = (req, res) => {
  try {
    const events = getEventList();
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(events) );

    response(res, { type: 'success', name: 'getEvents', statusCode: 200 }, events );
  } catch (err) {
    response(res, { type: 'error', name: 'getEvents', statusCode: 500 }, { message: err.message } )
  };
};