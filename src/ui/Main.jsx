import React from "react";

const Main = ({ children, isSidebarOpen }) => {
  return (
    <div
      className={`text-gray-500 bg-gray-100 px-4 pt-5 flex gap-2 flex-col lg:flex-row transition-all duration-300 mt-15 dark:bg-black dark:text-gray-400 min-h-[calc(100vh-56px)] ${
        isSidebarOpen ? "md:ml-64" : "ml-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Main;
