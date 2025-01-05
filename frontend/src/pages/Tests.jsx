import React, { useEffect, useState } from "react";
import Div from "../component/common/Div";
import QuizCard from "../component/ui/QuizCard";
import { fetchTests } from "../services/postApi";

const Tests = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch quizzes from API
  useEffect(() => {
    const getQuizzes = async () => {
      try {
        const data = await fetchTests();
        setQuizzes(data.quizList || []);
      } catch (error) {
        console.error("Failed to fetch quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    getQuizzes();
  }, []);

  if (loading) {
    return (
      <Div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">
          Loading Quizzes...
        </h1>
      </Div>
    );
  }

  if (quizzes.length === 0) {
    return (
      <Div>
        <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">
          No Quizzes Available
        </h1>
      </Div>
    );
  }

  return (
    <Div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">
        Available Quizzes
      </h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz._id}
            title={quiz.title}
            description={quiz.description}
            image={quiz.image}
            id={quiz._id}
          />
        ))}
      </div>
    </Div>
  );
};

export default Tests;
