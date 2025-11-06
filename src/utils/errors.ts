import type { Response } from "express";

export interface ErrorDetail {
  field?: string;
  message: string;
}

export interface ErrorResponse {
  error: string;
  details?: ErrorDetail[];
}

export const sendError = (
  res: Response,
  statusCode: number,
  error: string,
  details?: ErrorDetail[]
): Response => {
  const response: ErrorResponse = { error };
  if (details && details.length > 0) {
    response.details = details;
  }
  return res.status(statusCode).json(response);
};

export const sendSimpleError = (
  res: Response,
  statusCode: number,
  message: string
): Response => {
  return sendError(res, statusCode, message, [{ message }]);
};

