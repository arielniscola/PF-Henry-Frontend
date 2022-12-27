import { complexs } from "../data/complexsExample";
import ComplexCard from "./ComplexCard";
import { useState } from "react";

const ComplexList = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextIndex = () => {
    if (currentIndex === complexs.length - 1) {
      return 0;
    } else {
      return currentIndex + 1;
    }
  };
  
  const prevIndex = () => {
    if (currentIndex === 0) {
      return complexs.length - 1;
    } else {
      return currentIndex - 1;
    }
  };


  return (
    <div>
    <h1 className="text-center text-4xl">Featured</h1>
    <div className="flex flex-col items-center justify-center w-full h-72 bg-gray-100">
    <ComplexCard complexDetails={complexs[currentIndex]} />
    <div className="flex flex-row items-center justify-center space-x-12 w-full h-1/6">
    <button
          className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
          onClick={() => setCurrentIndex(prevIndex)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      <button
              className="flex items-center justify-center w-10 h-10 text-white bg-gray-800 rounded-full shadow-md hover:bg-gray-700 focus:outline-none"
              onClick={() => setCurrentIndex(nextIndex)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
    </div>
    </div>
    </div>
  );





};

export default ComplexList;

