import React from "react";
import { links, linksbottom } from "../../constant";
import LinkItem from "./LinkItem";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen pt-18 bg-white border-r border-gray-200 dark:bg-black dark:border-gray-700 transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0 w-64" : "w-16"
      }`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto relative">
        <ul className="space-y-2 font-semibold">
          {links.map((Link, index) => (
            <LinkItem isSidebarOpen={isSidebarOpen} key={index} {...Link} />
          ))}
        </ul>

        <div
          className={`absolute left-0 bottom-0 w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-black z-40 text-gray-700 dark:text-white ${
            isSidebarOpen ? "p-4" : "py-5"
          }`}
        >
          <ul className="space-y-2 font-semibold">
            {linksbottom.map((Link, index) => (
              <LinkItem isSidebarOpen={isSidebarOpen} key={index} {...Link} />
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
