import React from "react";
import Topbar from "../components/Topbar/Topbar";

const Main = ({ children, isSidebarOpen }) => {
  return (
    <div>
      {/* Topbar */}
      <Topbar isSidebarOpen={isSidebarOpen} />

      {/* Content */}
      <div
        className={`text-gray-500 bg-gray-100 px-4 pt-16 mt-16 sm:mt-12 xs
                    transition-all duration-300 dark:bg-black dark:text-gray-400
                    min-h-[calc(100vh-56px)]
                    ${isSidebarOpen ? "md:ml-64 ml-16" : "ml-16"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Main;
