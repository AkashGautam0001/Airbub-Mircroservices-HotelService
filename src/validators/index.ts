import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config.js";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      logger.info(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: error,
      });
    }
  };
};

export const validateQueryParams = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log(req.body);
      next();
    } catch (error) {
      res.status(400).json({
        message: "Invalid request body",
        success: false,
        error: error,
      });
    }
  };
};
