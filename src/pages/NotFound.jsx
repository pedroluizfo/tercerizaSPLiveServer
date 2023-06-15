import React from "react";

const NotFound = () => {
  console.log("aqui");
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-6">404 Not Found</h1>
        <a href="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Return to Home
        </button>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
