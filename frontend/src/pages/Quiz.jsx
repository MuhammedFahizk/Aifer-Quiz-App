import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuizById, fetchQuestion } from "../services/getApi"; // Combined import
import Div from "../component/common/Div";
import Text from "../component/common/Text";
import { QuestingCount } from "../component/ui/QuestingCount";
import QuizDtl from "../component/ui/QuizDtl";
import { useDispatch, useSelector } from "react-redux";
import {
  initializeResults,
  setQuestNum,
  setQuizID,
} from "../Redux/feathers/quest";

const Quiz = () => {
  const { id: quizId } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quest, setQuest] = useState(null);
  const { questNum } = useSelector((state) => state.quest);
  const dispatch = useDispatch();

  // Fetch quiz data
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quizData = await getQuizById(quizId);
        setCount(quizData.count);
        dispatch(setQuestNum(1));
        dispatch(initializeResults(quizData.quiz.questions));
        dispatch(setQuizID(quizId));

        setQuiz(quizData.quiz);
      } catch (error) {
        setError("Failed to fetch quiz. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  // Fetch question data based on questNum
  useEffect(() => {
    const fetchQuestionData = async () => {
      try {
        const questionData = await fetchQuestion(quizId, questNum);
        setQuest(questionData.question);
      } catch (error) {
        setError("Failed to fetch Question. Please try again later.");
        console.error(error);
      }
    };

    if (quizId && questNum) {
      fetchQuestionData();
    }
  }, [questNum, quizId]);

  if (loading) return <Div className={"flex justify-center "}>Loading...</Div>;
  if (error) return <Div className={"flex justify-center"}>{error}</Div>;
  if (!quiz)
    return <Div className={"flex justify-center"}>Quiz not found.</Div>;

  return (
    <Div className={"flex justify-center items-center flex-col"}>
      <Text tag={"h1"} className={"text-2xl font-semibold text-white"}>
        {quiz.title}
      </Text>

      <Div
        className={
          "grid grid-cols-7 space-x-2 bg-white rounded-lg w-full px-10 p-5"
        }
      >
        {quest && (
          <QuizDtl
            question={quest}
            totalQuestions={count}
            questions={quiz.questions}
          />
        )}
        <QuestingCount count={count} questions={quiz.questions} />
      </Div>
    </Div>
  );
};

export default Quiz;
