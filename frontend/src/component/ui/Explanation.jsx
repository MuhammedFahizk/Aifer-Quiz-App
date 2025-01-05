import React, { useState } from 'react';

const Explanation = ({ explanation }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleToggle}
        className="text-blue-600 font-medium hover:text-blue-800 focus:outline-none"
      >
        {isVisible ? 'Hide Explanation' : 'Show Explanation'}
      </button>
      
      {isVisible && (
        <div className="mt-3 p-4 bg-gray-100 rounded-lg shadow-sm">
          <p className="text-gray-700 text-sm">{explanation}</p>
        </div>
      )}
    </div>
  );
};

export default Explanation;
