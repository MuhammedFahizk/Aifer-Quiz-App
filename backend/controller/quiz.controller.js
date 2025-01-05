import { Types } from "mongoose";
import { Quiz } from "../model/quiz.js";

/*
  1.     FETCH QUIZ'S WITH PAGINATION 
*/
export const fetchQuiz = async (req, res) => {
  try {
    console.log("Fetching quiz data...");

    const quizList = await Quiz.find()
      .select('_id title description image') // Select specific fields
      .sort({ createdAt: -1 }); // Sort by creation date, descending

    // Send the resolved data
    res.json({ success: true, quizList });
  } catch (error) {
    console.error("Fetch quiz error:", error);

    res.status(500).json({
      success: false,
      message: error.details || "Fetching quizzes failed",
      error: error.message,
    });
  }
};

/*
  2.     GET QUIZ BY ID
*/
export const getQuizById = async (req, res) => {
  try {
    const { quizId } = req.params;

    // Aggregate to only fetch serialNo and _id from questions
    const quiz = await Quiz.aggregate([
      { $match: { _id: new Types.ObjectId(quizId) } },
      { 
        $project: {
          _id: 1,
          title: 1,
          description: 1,
          image: 1,
          questions: {
            $map: {
              input: "$questions",
              as: "question",
              in: {
                serialNo: "$$question.serialNo",
                _id: "$$question._id"
              }
            }
          }
        }
      }
    ]);

    if (!quiz || quiz.length === 0) {
      return res.status(404).json({ success: false, message: "Quiz not found" });
    }

    const count = quiz[0].questions.length;
    console.log(quiz, count);

    res.json({ success: true, quiz: quiz[0], count });
  } catch (error) {
    console.error("Fetch quiz by ID error:", error);

    res.status(500).json({
      success: false,
      message: error.details || "Fetching quiz by ID failed",
      error: error.message,
    });
  }
};

/*
  2.     GET QUESTION  BY SERIAL NUMBER
*/
 
export const fetchQuestion =  async (req, res) => {
  try {
    const { quizId, questNum } = req.params;

    // Convert questNum to an integer for zero-based indexing
    const questionSerialNo = parseInt(questNum, 10); 

    // Find the quiz and the specific question based on serialNo
    const quiz = await Quiz.aggregate([
      { $match: { _id: new Types.ObjectId(quizId) } },
      {
        $project: {
          questions: {
            $filter: {
              input: "$questions",
              as: "question",
              cond: { $eq: ["$$question.serialNo", questionSerialNo] }
            }
          }
        }
      }
    ]);

    if (!quiz || quiz.length === 0 || quiz[0].questions.length === 0) {
      return res.status(404).json({ success: false, message: "Question not found" });
    }

    // Return the found question
    res.json({ success: true, question: quiz[0].questions[0] });
  } catch (error) {
    console.error("Error fetching question:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}




/*
  CHECK IF ANSWER IS CORRECT
*/
export const checkAnswer = async (req, res) => {
  try {
    const { quizId, questionId, serialNo } = req.params;
    const { userAnswer } = req.body;

    // Validate serial number as an integer
    const questionSerialNo = parseInt(serialNo, 10);

    const quiz = await Quiz.aggregate([
      { $match: { _id: new Types.ObjectId(quizId) } },
      {
        $project: {
          questions: {
            $filter: {
              input: "$questions",
              as: "question",
              cond: { $eq: ["$$question.serialNo", questionSerialNo] }
            }
          }
        }
      }
    ]);

    // Ensure that quiz and questions are found
    if (!quiz || quiz.length === 0 || quiz[0].questions.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Question not found",
      });
    }

    const question = quiz[0].questions[0];

    const answerIndex = question.options.indexOf(userAnswer);

    if (answerIndex === -1) {
      return res.status(400).json({
        success: false,
        message: "Invalid answer choice",
      });
    }

    const isCorrect = question.correctAnswer === answerIndex; 

    res.json({
      success: true,
      isCorrect,
      answer: question.correctAnswer+1,
      message: isCorrect ? "Correct answer" : "Incorrect answer",
    });
  } catch (error) {
    console.error("Error checking answer:", error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
