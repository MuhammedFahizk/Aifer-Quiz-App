import { Router } from "express";
const router = Router();
import quizRoute from './quiz.js'

router.use("/",quizRoute)

export default router;