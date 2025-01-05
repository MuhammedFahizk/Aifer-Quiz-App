import { model, Schema } from "mongoose";

const questionSchema = new Schema(
  {
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: Number, required: true },
    explanation: { type: String, required: true },
    serialNo: {
      type: Number,
      required: true,
    },
  },
  { _id: true }
);

const quizSchema = new Schema({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
});

export const Quiz = model("Quiz", quizSchema, "tests");
