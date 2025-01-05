import express from "express";
const router = express.Router();
import quizController  from '../controller/Index.js'


router.post('/tests',quizController.fetchQuiz)

router.get('/getQuizById/:quizId',quizController.getQuizById)

router.get('/fetchQuestion/:quizId/:questNum', quizController.fetchQuestion)

router.post('/checkAnswer/:quizId/:questionId/:serialNo', quizController.checkAnswer)



export default router;
