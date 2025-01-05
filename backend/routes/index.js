import { Router } from "express";
const router = Router();
import quizRoute from './quiz.controller.js'

router.use("/",quizRoute)

export default router;