import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
  name: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(100, "Name must be less than 100 characters")
    .optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(1, "Password is required"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;

