import { z } from "zod";

export const TaskStatusEnum = z.enum(["TODO", "IN_PROGRESS", "DONE"]);

export const createTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(200, "Title must be less than 200 characters"),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string()
    .min(1, "Title must be at least 1 character")
    .max(200, "Title must be less than 200 characters")
    .optional(),
  description: z
    .string()
    .max(1000, "Description must be less than 1000 characters")
    .optional(),
  status: TaskStatusEnum.optional(),
});

export const taskIdParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID must be a valid number")
    .transform((val) => parseInt(val, 10)),
});

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type UpdateTaskInput = z.infer<typeof updateTaskSchema>;
export type TaskIdParam = z.infer<typeof taskIdParamSchema>;

