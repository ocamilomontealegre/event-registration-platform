import { registerAssistant } from '../services/registerAssistant.js';
import { registerSchema } from '../validations/schemas.js';
import { validateProperties } from '../validations/validations.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js'


export const registerForEvent = (req, res) => {
  const { eventId } = req.params;
  const { userId } = req.body;

  const validationResult = validateProperties(registerSchema, { eventId, userId });
  if(validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'registerForEvent', statusCode: validationResult.statusCode }, { message: validationResult.message } );  

  try {
    const result = registerAssistant(Number(eventId), userId);
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result) );

    response(res, { type: 'success', name: 'eventData', statusCode: 200 }, result );
  } catch (error) {
    response(res, { type: 'error', name: 'registerForEvent', statusCode: 500 }, { message: err.message } )
  };
};