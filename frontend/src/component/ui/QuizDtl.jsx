import { useDispatch, useSelector } from "react-redux";
import Div from "../common/Div";
import Text from "../common/Text";
import { setQuestNum } from "../../Redux/feathers/quest";
import Option from "./Option";

const QuizDtl = ({ question, totalQuestions }) => {
  const dispatch = useDispatch();
  const currentQuestNum = useSelector((state) => state.quest.questNum);

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

  return (
    <Div className="col-span-5 space-y-10 p-5 border rounded-lg shadow-lg bg-white">
      {/* Question Title */}
      <Text tag="h2" className="text-xl font-semibold text-gray-800">
        Question {question?.serialNo}: {question?.question || "Loading..."}
      </Text>

      {/* Options */}
      <Div className="space-y-3">
        {question?.options &&
          question.options.map((option, index) => (
            <Option question={question} key={index} index={index} option={option} />
          ))}
      </Div>

      {/* Action Buttons */}
      <Div className="flex justify-end gap-2 items-center mt-6">
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

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentQuestNum === totalQuestions}
          className={`px-4 py-2 rounded-md font-medium shadow-md ${
            currentQuestNum === totalQuestions
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Next {
             totalQuestions
          }
        </button>
      </Div>
    </Div>
  );
};

export default QuizDtl;
