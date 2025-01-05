import { useSelector } from "react-redux";
import Div from "../common/Div";
import Text from "../common/Text";
import { checkAnswer } from "../../services/getApi";

const Option = ({ option, index, question }) => {
  const { quizID } = useSelector((state) => state.quest); // Extracting quizID from Redux state

  const handleOptionClick = async (selectedOption) => {
    try {
      const result = await checkAnswer(quizID, question._id, question.serialNo, selectedOption);
      console.log(result);

      if (result.isCorrect) {
        alert("Correct Answer!");
      } else {
        alert("Incorrect Answer!");
      }
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  return (
    <button className="w-full text-start" onClick={() => handleOptionClick(option)}>
      <Div className="p-3 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300 transition duration-200">
        <Text tag="span" className="text-gray-700 font-medium">
          {index + 1}. {option}
        </Text>
      </Div>
    </button>
  );
};

export default Option;
