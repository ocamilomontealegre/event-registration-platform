import { eventIdSchema } from '../validations/schemas.js';
import { validateProperties } from '../validations/validations.js';
import { getEventData } from '../services/getEventData.js'; 
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

export const getEventById = (req, res) => {
  const { eventId } = req.params;

  const validationResult = validateProperties(eventIdSchema, { eventId });
  if(validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'getEventById', statusCode: validationResult.statusCode }, { message: validationResult.message } );

  try {
    const eventData = getEventData(Number(eventId));
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, eventData );

    if(!eventData) 
      return response(res, { type: 'error', name: 'getEventById', statusCode: 404 }, { message: 'Event not found' } );

    response(res, { type: 'success', name: 'eventData', statusCode: 200 }, eventData );
  } catch (err) {
    response( res, { type: 'error', name: 'getEventById', statusCode: 500 }, { message: err.message } );
  }
};