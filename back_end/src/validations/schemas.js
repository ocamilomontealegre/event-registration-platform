import Joi from 'joi';

export const eventIdSchema = Joi.object({
  eventId: Joi.number().greater(0).required()
});

export const registerSchema = Joi.object({
  eventId: Joi.number().greater(0).required(),
  userId: Joi.string().required()
});