import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error.js";
import { StatusCodes } from "http-status-codes";

export const appErrorHandler = (err: AppError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.statusCode).json({
    success: false,
    message: err.message
  });
};

export const genericErrorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err.message
  });
};
