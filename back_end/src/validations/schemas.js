// Importing Joi for schema validation
import Joi from 'joi';

// Schema for validating event IDs
export const eventIdSchema = Joi.object({
  // Define eventId schema: a number greater than 0 is required
  eventId: Joi.number().greater(0).required()
});

// Schema for validating registration data
export const registerSchema = Joi.object({
  // Define schema for eventId in registration data: a number greater than 0 is required
  eventId: Joi.number().greater(0).required(),
  // Define schema for userId in registration data: a non-empty string is required
  userId: Joi.string().required()
});