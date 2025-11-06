import type { Response, NextFunction } from "express";
import type { AuthRequest } from "../middleware/auth.js";
import type { CreateTaskInput, UpdateTaskInput, TaskIdParam } from "../validations/tasks.js";
import prisma from "../prisma.js";
import { sendSimpleError } from "../utils/errors.js";

const addTaskHandler = async (
  req: AuthRequest<{}, {}, CreateTaskInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId!;
    const { title, description } = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description: description || null,
        userId,
      },
    });
    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
};

const getTasksHandler = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.userId!;
    const tasks = await prisma.task.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
    res.json(tasks);
  } catch (err) {
    next(err);
  }
};

const getTaskByIdHandler = async (
  req: AuthRequest<TaskIdParam>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId!;
    const { id } = req.params as TaskIdParam;
    const task = await prisma.task.findFirst({
      where: { id, userId },
    });
    if (!task) return sendSimpleError(res, 404, "Task not found");
    res.json(task);
  } catch (err) {
    next(err);
  }
};

const updateTaskHandler = async (
  req: AuthRequest<TaskIdParam, {}, UpdateTaskInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId!;
    const { id } = req.params as TaskIdParam;
    const { title, description, status } = req.body;

    // ensure task belongs to user
    const existing = await prisma.task.findFirst({ where: { id, userId } });
    if (!existing) return sendSimpleError(res, 404, "Task not found");

    const updateData: { title?: string; description?: string | null; status?: "TODO" | "IN_PROGRESS" | "DONE" } = {};
    if (title !== undefined) updateData.title = title;
    if (description !== undefined) updateData.description = description || null;
    if (status !== undefined) updateData.status = status;

    const updated = await prisma.task.update({
      where: { id },
      data: updateData,
    });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

const deleteTaskHandler = async (
  req: AuthRequest<TaskIdParam>,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.userId!;
    const { id } = req.params as TaskIdParam;

    const existing = await prisma.task.findFirst({ where: { id, userId } });
    if (!existing) return sendSimpleError(res, 404, "Task not found");

    await prisma.task.delete({ where: { id } });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

export { addTaskHandler, getTasksHandler, getTaskByIdHandler, updateTaskHandler, deleteTaskHandler };
