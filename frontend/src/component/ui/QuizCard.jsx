import React from 'react';
import Div from '../common/Div';
import { Link, useNavigate } from 'react-router-dom';

const QuizCard = ({ title, description, image ,id}) => {
    const navigate = useNavigate()
  return (
    <Link
    to={`/quiz/${id}`}
    >
    <Div  className="bg-white  relative  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <Div className="p-4 relative bg-secondary -mt-4 rounded-t-lg">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </Div>
    </Div>
    </Link>
  );
};

export default QuizCard;
