import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { sendSimpleError } from "../utils/errors.js";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export interface AuthRequest<P = {}, ResBody = {}, ReqBody = {}, ReqQuery = {}>
  extends Request<P, ResBody, ReqBody, ReqQuery> {
  userId?: number;
}

export function authenticateToken(req: AuthRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return sendSimpleError(res, 401, "Missing token");

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: number };
    req.userId = payload.userId;
    next();
  } catch (err) {
    return sendSimpleError(res, 403, "Invalid token");
  }
}
