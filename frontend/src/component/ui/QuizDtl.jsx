import { useDispatch, useSelector } from "react-redux";
import Div from "../common/Div";
import Text from "../common/Text";
import { setQuestNum } from "../../Redux/feathers/quest";
import Option from "./Option";
import Explanation from "./Explanation";

const QuizDtl = ({ question, totalQuestions }) => {
  const dispatch = useDispatch();
  const currentQuestNum = useSelector((state) => state.quest.questNum);
  const { results } = useSelector((state) => state.quest);

  // Handlers for Previous and Next buttons
  const handlePrev = () => {
    if (currentQuestNum > 1) {
      dispatch(setQuestNum(currentQuestNum - 1));
    }
  };

  const handleNext = () => {
    if (currentQuestNum < totalQuestions) {
      dispatch(setQuestNum(currentQuestNum + 1));
    }
  };

  // Find the result for the current question
  const currentResult = results.find(
    (result) => result.serialNo === question.serialNo
  );

  return (
    <Div className="col-span-5 space-y-2 p-5 border rounded-lg shadow-lg bg-white">
      {/* Question Title */}
      <Text tag="h2" className="text-xl font-semibold text-gray-800">
        Question {question?.serialNo}: {question?.question || "Loading..."}
      </Text>

      {/* Options */}
      <Div className="space-y-1">
        {question?.options &&
          question.options.map((option, index) => {
            const isSelected = currentResult?.answer === option;
            const isCorrect =
              currentResult?.answer === option &&
              currentResult.status === "correct";
            const isIncorrect =
              currentResult?.answer === option &&
              currentResult.status === "incorrect";

            return (
              <Option
                question={question}
                key={index}
                index={index}
                option={option}
                isSelected={isSelected}
                isCorrect={isCorrect}
                isIncorrect={isIncorrect}
              />
            );
          })}
      </Div>

      {/* Display the current answer status */}
      {currentResult?.answer && (
        <Text
          className={`text-lg font-medium ${
            currentResult.status === "correct"
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {currentResult.status && (
            <Div className="mt-2">
              <Text className="text-lg font-medium">
                {currentResult.status === "correct" ? (
                  <span className="text-green-600">
                    Correct answer! {currentResult.answer}
                  </span>
                ) : (
                  <>
                    <span className="text-red-600">Incorrect answer. </span>
                    <span className="text-gray-800">
                      The correct answer was: {currentResult.answer}
                    </span>
                  </>
                )}
              </Text>
            </Div>
          )}
        </Text>
      )}

      <Div className="flex justify-end gap-2 items-center mt-1">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentQuestNum === 1}
          className={`px-4 py-2 rounded-md font-medium shadow-md ${
            currentQuestNum === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={currentQuestNum === totalQuestions}
          className={`px-4 py-2 rounded-md font-medium shadow-md ${
            currentQuestNum === totalQuestions
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next {currentQuestNum}/{totalQuestions}
        </button>
      </Div>
      <Div className={"bg-white shadow-inner p-2 rounded-lg"}>
        <Explanation explanation={question.explanation}/>
      </Div>
    </Div>
  );
};

export default QuizDtl;
