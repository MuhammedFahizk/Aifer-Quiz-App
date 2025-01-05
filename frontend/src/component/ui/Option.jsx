import { useSelector, useDispatch } from "react-redux";
import Div from "../common/Div";
import Text from "../common/Text";
import { checkAnswer } from "../../services/getApi";
import { setQuestNum, updateResult } from "../../Redux/feathers/quest";

const Option = ({ option, index, question }) => {
  const { quizID } = useSelector((state) => state.quest); 
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.quest);
  
  // Find the result for the current question serialNo
  const currentResult = results.find((result) => result.serialNo === question.serialNo);

  const handleOptionClick = async (selectedOption) => {
    try {
      const result = await checkAnswer(quizID, question._id, question.serialNo, selectedOption);
      const status = result.isCorrect ? "correct" : "incorrect"; 
      dispatch(updateResult({ serialNo: question.serialNo, status, answer:result.answer  })); 
      console.log(currentResult);
      
      // Move to the next question
    //   dispatch(setQuestNum(question.serialNo + 1)); 
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  // Disable the option if the status is not "default"
  const isDisabled = currentResult?.status !== "default";
  const isCorrect = currentResult?.status === "correct";
  const isIncorrect = currentResult?.status === "incorrect";

  return (
    <button 
      className={`w-full text-start p-3 rounded-md cursor-pointer transition duration-200 
      ${isCorrect ? 'bg-green-400  hover:bg-green-600' : 
        isIncorrect ? 'bg-red-600 hover:bg-red-600' : 
        'bg-gray-200 hover:bg-gray-300'}
      ${isDisabled ? 'opacity-50 cursor-not-allowed text-black' : 'text-black'}`}
      onClick={() => !isDisabled && handleOptionClick(option)} 
      disabled={isDisabled} 
      aria-label={`Select option ${index + 1}`}
    >
      <Div className="flex items-center justify-between">
        <Text tag="span" className={`text-gray-700 font-medium ${isDisabled ? 'text-black' : 'text-black'}`}>
          {index + 1}. {option}
        </Text>
        {isCorrect && <Text tag="span" className="text-white">✔️</Text>}
        {isIncorrect && <Text tag="span" className="text-white">❌</Text>}
      </Div>
      
    </button>
  );
};

export default Option;
