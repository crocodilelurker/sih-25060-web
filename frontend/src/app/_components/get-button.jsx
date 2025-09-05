import React from "react";

const GetButton = ({ text }) => {
  return (
    <button
      type="submit"
      className="relative z-10 flex justify-center items-center gap-2 px-4 py-2  text-lg font-semibold text-gray-800 bg-gray-50 border-2 border-gray-50 rounded-full shadow-xl overflow-hidden group
                 backdrop-blur-md "
    >
      <span className="py-2">{text}</span>
      <svg
        className="w-8 h-8 p-2 border border-gray-700 rounded-full rotate-45 transition-all duration-300 ease-linear group-hover:rotate-90 group-hover:bg-gray-50 group-hover:border-none"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800 "
        />
      </svg>

      {/* Animated green background */}
      <span className="absolute inset-0 w-full h-full bg-emerald-500 rounded-full -z-10 translate-x-[-100%] scale-75 transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:scale-125"></span>
    </button>
  );
};

export default GetButton;
