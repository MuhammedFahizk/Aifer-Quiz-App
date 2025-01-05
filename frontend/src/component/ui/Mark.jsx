import { useDispatch, useSelector } from "react-redux";
import Div from "../common/Div";
import { setQuestNum } from "../../Redux/feathers/quest";

const Mark = ({ data }) => {
  const dispatch = useDispatch();
  const { questNum: currentQuestNum, results } = useSelector((state) => state.quest);
console.log(results);

  // Find the result object for the current question's serialNo
  const currentResult = results.find((result) => result.serialNo === data.serialNo);

  // Determine the background color based on the status
  const getStatusColor = () => {
    switch (currentResult?.status) {
      case "correct":
        return "bg-green-500"; 
      case "error":
        return "bg-red-500"; 
        // Red for incorrect answers
      default:
        return currentQuestNum === data.serialNo ? "bg-blue-500" : "bg-gray-300"; // Blue for selected, gray for default
    }
  };

  const handleMark = () => {
    dispatch(setQuestNum(data.serialNo));
  };

  return (
    <Div
      className={`${getStatusColor()} rounded-full cursor-pointer flex justify-center items-center w-10 h-10 transition-all duration-300 ease-in-out hover:bg-opacity-80 active:bg-opacity-90`}
      onClick={handleMark}
      aria-label={`Select question ${data.serialNo}`}
    >
      <span
        className={`text-white font-semibold ${
          currentQuestNum === data.serialNo ? "text-xl" : "text-sm"
        }`}
      >
        {data.serialNo}
      </span>
    </Div>
  );
};

export default Mark;
