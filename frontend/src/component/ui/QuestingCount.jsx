import Div from "../common/Div";
import Mark from "./Mark";
import Text from "../common/Text";

export const QuestingCount = ({ count, questions, currentQuestion }) => {
  return (
    <Div className="col-span-2 text-secondary rounded-lg p-5 shadow-lg">
      <Text tag="h3" className="text-xl font-semibold  mb-4">
        Total Questions: {count}
      </Text>

      <Div className="grid  md:grid-cols-5 gap-4  ">
        {questions.map((question, index) => {
          const isActive = currentQuestion === index + 1;
          const isAnswered = question.isAnswered;

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
