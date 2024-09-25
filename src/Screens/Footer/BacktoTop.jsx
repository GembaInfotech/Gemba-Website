import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={handleScrollToTop}
    >
      <span className="text-gray-500">Back To Top</span>
      <div className="flex items-center justify-center w-8 h-8 rounded-full border border-green-500 hover:border-blue-700">
        <FaArrowUp className="text-green-500 hover:text-blue-700" />
      </div>
    </div>
  );
};

export default BackToTop;
