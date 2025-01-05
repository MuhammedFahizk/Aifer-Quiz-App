import React from "react";
import Div from "../component/common/Div";
import Text from "../component/common/Text";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Div className="min-h-fit bg-primary-light flex flex-col justify-center items-center py-6">
      <Div className="text-center px-6 py-4 max-w-lg mx-auto  rounded-lg shadow-xl">
        <Text tag="h1" className="text-3xl font-semibold text-white mb-4">
          Welcome to Quiz World!
        </Text>
        <Text className="text-base text-secondary mb-6">
          Test your knowledge and challenge yourself with our quizzes.
        </Text>

        {/* Image Section */}
        <Div className="mb-6 mx-auto w-full">
          <img
            src="https://cdn.pixabay.com/photo/2022/02/02/10/56/questions-6988157_1280.png"
            alt="Quiz"
            className="rounded-lg shadow-md w-[250px] mx-auto"
          />
        </Div>

        {/* Buttons Section */}
        <Div className="flex justify-center gap-6">
          <Link
            to="/test"
            className="px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-light transition"
          >
            Start Quiz
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-secondary text-white rounded-lg shadow-md hover:bg-primary transition"
          >
            About Us
          </Link>
        </Div>
      </Div>
    </Div>
  );
};

export default Home;
