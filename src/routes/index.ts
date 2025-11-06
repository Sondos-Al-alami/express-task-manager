import express from 'express';
import authRouter from './auth.js';
import tasksRouter from './tasks.js';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ 
    message: 'Welcome to Express API',
    version: '1.0.0',
  });
});

router.use('/auth', authRouter);
router.use('/tasks', tasksRouter);

export default router;
