import type { Request, Response, NextFunction } from "express";
import { Prisma } from "@prisma/client";
import { sendError } from "../utils/errors.js";

export const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!(err instanceof Error)) {
    return sendError(
      res,
      500,
      "Internal server error",
      [{ message: "An unknown error occurred" }]
    );
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return sendError(
      res,
      400,
      "Validation error",
      [{ message: "Invalid data provided" }]
    );
  }

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

