import winston from "winston";
import { getCorreclationId } from "../utils/helpers/request.helpers.js";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD hh:mm:ss A" }),
    winston.format.json(),
    winston.format.printf(({ level, message, timestamp, ...data }) => {
      const output = {
        level,
        message,
        timestamp,
        correlationId: getCorreclationId(),
        data,
      };
      return JSON.stringify(output);
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs/error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "logs/app.log" }),
    new DailyRotateFile({
      filename: "logs/%DATE%-app.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "20m",
      maxFiles: "14d",
    }),
  ],
});

export default logger;
