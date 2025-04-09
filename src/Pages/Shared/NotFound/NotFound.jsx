import React from "react";
import { Link } from "react-router-dom";
import fourZeroFour from "../../../assets/images/404.gif";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Image Section */}
      <img
        src={fourZeroFour}
        alt="Not Found"
        className="mb-6 w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4"
      />

      {/* Heading Section */}
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        404 - Page Not Found
      </h1>

      {/* Button Section */}
      <Link to="/">
        {" "}
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-lg hover:bg-blue-600 transition duration-300">
          Return to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
