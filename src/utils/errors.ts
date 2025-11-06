import type { Response } from "express";

/**
 * Standard error response format matching validation errors
 */
export interface ErrorDetail {
  field?: string;
  message: string;
}

export interface ErrorResponse {
  error: string;
  details?: ErrorDetail[];
}

/**
 * Helper function to send standardized error responses
 * Matches the format used by validation middleware
 */
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

/**
 * Helper function for single error messages (simplified format)
 * Converts a simple error message to the standard format
 */
export const sendSimpleError = (
  res: Response,
  statusCode: number,
  message: string
): Response => {
  return sendError(res, statusCode, message, [{ message }]);
};

