import React from 'react';
import Div from '../component/common/Div';
import QuizCard from '../component/ui/QuizCard';

const Tests = () => {
  const quizzes = [
    {
      id: 1,
      title: 'General Knowledge',
      description: 'Test your knowledge about the world around you.',
      image: 'https://via.placeholder.com/400x200?text=General+Knowledge',
    },
    {
      id: 2,
      title: 'Science Quiz',
      description: 'Explore the wonders of science and technology.',
      image: 'https://via.placeholder.com/400x200?text=Science+Quiz',
    },
    {
      id: 3,
      title: 'History Quiz',
      description: 'Dive into the past with this historical quiz.',
      image: 'https://via.placeholder.com/400x200?text=History+Quiz',
    },
    {
        id: 4,
        title: 'History Quiz',
        description: 'Dive into the past with this historical quiz.',
        image: 'https://via.placeholder.com/400x200?text=History+Quiz',
      },
      {
        id: 1,
        title: 'General Knowledge',
        description: 'Test your knowledge about the world around you.',
        image: 'https://via.placeholder.com/400x200?text=General+Knowledge',
      },
      {
        id: 2,
        title: 'Science Quiz',
        description: 'Explore the wonders of science and technology.',
        image: 'https://via.placeholder.com/400x200?text=Science+Quiz',
      },
      {
        id: 3,
        title: 'History Quiz',
        description: 'Dive into the past with this historical quiz.',
        image: 'https://via.placeholder.com/400x200?text=History+Quiz',
      },
      {
          id: 4,
          title: 'History Quiz',
          description: 'Dive into the past with this historical quiz.',
          image: 'https://via.placeholder.com/400x200?text=History+Quiz',
        },
  ];

  return (
    <Div>
      <h1 className="text-3xl font-bold text-center text-gray-800 mt-8">Available Quizzes</h1>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {quizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            title={quiz.title}
            description={quiz.description}
            image={quiz.image}
            id={quiz.id}
          />
        ))}
      </div>
    </Div>
  );
};

export default Tests;
