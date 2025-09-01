const LinkItem = ({ href, icon: Icon, text, badge, isSidebarOpen, size }) => {
  return (
    <li>
      <a
        href={href}
        className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 gap-2 ${
          !isSidebarOpen ? "justify-center" : ""
        }`}
      >
        <Icon size={size} />
        <span className={`me-3 ${isSidebarOpen ? "flex-1" : "hidden"}`}>
          {text}
        </span>
        {badge && (
          <span
            className={`inline-flex items-center justify-center px-2 ms-3 text-sm font-medium rounded-full ${badge.color} ${badge.darkColor}`}
          >
            {badge.text}
          </span>
        )}
      </a>
    </li>
  );
};

export default LinkItem;
