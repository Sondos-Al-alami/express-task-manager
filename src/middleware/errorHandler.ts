import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { sendError } from "../utils/errors.js";

/**
 * Global error handling middleware
 * Catches all errors and returns standardized error responses
 */
export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Ensure we have an Error object
  if (!(err instanceof Error)) {
    return sendError(
      res,
      500,
      "Internal server error",
      [{ message: "An unknown error occurred" }]
    );
  }

  // Prisma validation errors
  if (err instanceof Prisma.PrismaClientValidationError) {
    return sendError(
      res,
      400,
      "Validation error",
      [{ message: "Invalid data provided" }]
    );
  }

  // Default to 500 Internal Server Error
  const statusCode = 500;
  const message = process.env.NODE_ENV === "production"
    ? "Internal server error"
    : err.message;

  return sendError(
    res,
    statusCode,
    "Internal server error",
    [{ message }]
  );
};

/**
 * 404 Not Found handler
 * Must be placed after all routes but before error handler
 */
export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  sendError(
    res,
    404,
    "Route not found",
    [{ message: `Cannot ${req.method} ${req.path}` }]
  );
};

