import React from "react";

const Main = ({ children }) => {
  return (
    <div className="text-gray-500 bg-gray-100 p-4 sm:ml-64 flex gap-2 flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-900 dark:text-gray-400 min-h-[calc(100vh-56px)]">
      {children}
    </div>
  );
};

export default Main;
