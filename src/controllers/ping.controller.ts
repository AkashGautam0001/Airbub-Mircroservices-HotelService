import { NextFunction, Request, Response } from "express";
import { InternalServerError } from "../utils/errors/app.error.js";
import logger from "../config/logger.config.js";
import { StatusCodes } from "http-status-codes";

export const pingHandler = async (_req: Request, res: Response, _next: NextFunction): Promise<void> => {
  try {
    logger.info("pong");
    res.status(StatusCodes.OK).json({ message: "pong" });
  } catch (error) {
    throw new InternalServerError("Something went wrong");
  }
};

// Builder desgin pattern
// https://refactoring.guru/design-patterns/builder

// happy path
