import { logInfo } from "./logger.js";

export const response = (res, service, message) => {
  logInfo(`${service.name} |`, `${service.type} |`, `statusCode: ${service.statusCode} |`, JSON.stringify(message));
  return res.status(service.statusCode).send(message);
};