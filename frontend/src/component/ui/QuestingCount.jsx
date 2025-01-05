import Div from "../common/Div";
import Mark from "./Mark";
import Text from "../common/Text"; // Assuming Text component for text elements

export const QuestingCount = ({ count, questions, currentQuestion }) => {
  return (
    <Div className="col-span-2 bg-[#F5F5F5] rounded-lg p-5 shadow-lg">
      {/* Section Title */}
      <Text tag="h3" className="text-xl font-semibold text-gray-800 mb-4">
        Total Questions: {count}
      </Text>

      {/* Question Status Grid */}
      <Div className="grid  md:grid-cols-5 gap-4  ">
        {questions.map((question, index) => {
          const isActive = currentQuestion === index + 1;
          const isAnswered = question.isAnswered; // Assuming there's a field for this

          return (
            <Mark
              key={index}
              data={question}
              isActive={isActive}
              isAnswered={isAnswered}
            />
          );
        })}
      </Div>
    </Div>
  );
};
