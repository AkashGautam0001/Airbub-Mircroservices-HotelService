import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors/app.error.js";

export const genericErrorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.status(err.statusCode).json({ message: err.message });
};

// export const appErrorHandler = (
//   err: AppError,
//   _req: Request,
//   res: Response
// ) => {
//   res.status(err.statusCode).json({ message: err.message });
// };
