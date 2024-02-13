import { response } from '../utils/responseManager.js';

// Check API state
export const checkApiHealth = (req, res) => {
  response(res, { type: 'success', name: 'addBook', statusCode: 200 }, { message: 'Great News! The API is now live' } );
}