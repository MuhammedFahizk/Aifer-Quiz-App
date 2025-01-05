import { useSelector } from "react-redux";
import Div from "../common/Div";
import Text from "../common/Text";

const Result = () => {
  const { results } = useSelector((state) => state.quest); // Fetch results from Redux state

  // Count correct answers and total questions
  const correctCount = results.filter(result => result.status === "correct").length;
  const totalCount = results.length;

  // Check if all questions have been answered
  const allQuestionsAnswered = results.every(result => result.status !== "default");

  return (
    <Div className="flex flex-col items-center justify-center bg-primary  p-6 w-full max-w-sm mx-auto rounded-lg shadow-md">
      <Text className="text-2xl font-bold text-white mb-4">Your Score</Text>
      <Div className="flex items-center justify-center bg-gray-800 p-4 rounded-full w-28 h-28 shadow-lg">
        <Text className="text-3xl font-semibold text-green-400">
          {correctCount} / {totalCount}
        </Text>
      </Div>
      {allQuestionsAnswered && (
        <Div className="mt-4 bg-gray-800 p-3 rounded-lg">
          <Text className="text-sm text-secondary  text-center font-medium">
            🎉 You've completed all questions! 🎉
          </Text>
        </Div>
      )}
    </Div>
  );
};

export default Result;
