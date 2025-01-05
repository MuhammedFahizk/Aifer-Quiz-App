import express from "express";
const router = express.Router();
import quizController from '../controller/Index.js';

/**
 * @route POST /api/tests
 * @description Fetch a quiz
 * @access Public
 * @param {Object} req - Express request object containing quiz data
 * @param {Object} res - Express response object for sending responses
 * @returns {Object} - Response object containing quiz data or error details
 */
router.post('/tests', quizController.fetchQuiz);

/**
 * @route GET /api/getQuizById/:quizId
 * @description Get a quiz by its ID
 * @access Public
 * @param {string} quizId - The ID of the quiz to retrieve
 * @param {Object} req - Express request object containing parameters
 * @param {Object} res - Express response object for sending responses
 * @returns {Object} - Response object containing quiz details or error message
 */
router.get('/getQuizById/:quizId', quizController.getQuizById);

/**
 * @route GET /api/fetchQuestion/:quizId/:questNum
 * @description Fetch a question by quiz ID and question number
 * @access Public
 * @param {string} quizId - The ID of the quiz
 * @param {number} questNum - The number of the question in the quiz
 * @param {Object} req - Express request object containing parameters
 * @param {Object} res - Express response object for sending responses
 * @returns {Object} - Response object containing the question data or error message
 */
router.get('/fetchQuestion/:quizId/:questNum', quizController.fetchQuestion);

/**
 * @route POST /api/checkAnswer/:quizId/:questionId/:serialNo
 * @description Check if the answer is correct for a given question in the quiz
 * @access Public
 * @param {string} quizId - The ID of the quiz
 * @param {string} questionId - The ID of the question
 * @param {string} serialNo - The serial number of the question
 * @param {Object} req - Express request object containing answer data
 * @param {Object} res - Express response object for sending responses
 * @returns {Object} - Response object with result or error details
 */
router.post('/checkAnswer/:quizId/:questionId/:serialNo', quizController.checkAnswer);

export default router;
