// General method for validating properties
export const validateProperties = (schema, data) => {
  const result = schema.validate(data, { abortEarly: true });

  return (result.error)
    ? { message: result.error.message, errorCode: 1, statusCode: 400 }
    : { errorCode: 0 }
};