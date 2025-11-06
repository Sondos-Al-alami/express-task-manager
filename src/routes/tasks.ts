import express from "express";
import { addTaskHandler, deleteTaskHandler, getTaskByIdHandler, getTasksHandler, updateTaskHandler } from "../controllers/tasks.js";
import { authenticateToken } from "../middleware/auth.js";
import { validate, validateParams } from "../middleware/validation.js";
import { createTaskSchema, updateTaskSchema, taskIdParamSchema } from "../validations/tasks.js";

const router = express.Router();

router.use(authenticateToken);

router.post("/", validate(createTaskSchema), addTaskHandler as express.RequestHandler);
router.get("/", getTasksHandler as express.RequestHandler);
router.get("/:id", validateParams(taskIdParamSchema), getTaskByIdHandler as unknown as express.RequestHandler);
router.put("/:id", validateParams(taskIdParamSchema), validate(updateTaskSchema), updateTaskHandler as unknown as express.RequestHandler);
router.delete("/:id", validateParams(taskIdParamSchema), deleteTaskHandler as unknown as express.RequestHandler);

export default router;
 