// General method for validating properties against a schema
export const validateProperties = (schema, data) => {
  // Validate the data against the provided schema
  const result = schema.validate(data, { abortEarly: true });

  // If there are validation errors
  if (result.error) {
    // Return an object with the error message, error code, and status code
    return {
      message: result.error.message, // Error message
      errorCode: 1, // Error code indicating validation failure
      statusCode: 400 // HTTP status code indicating bad request
    };
  } else {
    // If there are no validation errors, return an object with only the success/error code
    return { errorCode: 0 }; // Success/error code indicating successful validation
  }
};