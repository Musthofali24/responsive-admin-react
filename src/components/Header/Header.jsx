import { FaMoon, FaSun, FaRegUser, FaRegBell, FaBell } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import userDefault from "../../assets/user01.png";

const Header = ({ darkMode, toggleDarkMode, toggleSidebar }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const userMenuRef = useRef(null);
  const notificationsRef = useRef(null);

  const handleUserClick = () => {
    setIsUserMenuOpen((prev) => !prev);
    setIsNotificationsOpen(false);
  };

  const handleNotificationsClick = () => {
    setIsNotificationsOpen((prev) => !prev);
    setIsUserMenuOpen(false);
  };

  // Tutup menu kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
      if (
        notificationsRef.current &&
        !notificationsRef.current.contains(event.target)
      ) {
        setIsNotificationsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsUserMenuOpen(false);
      setIsNotificationsOpen(false);
    };

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsUserMenuOpen(false);
        setIsNotificationsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-black dark:border-gray-700">
      <div className="px-2 py-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <a href="#" className="flex ms-2 md:me-24">
              <MdDirectionsBoatFilled className="h-8 me-3 text-xl text-blue-600" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white hidden sm:block">
                SeaPortal
              </span>
            </a>
            <button
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer"
              onClick={toggleSidebar}
            >
              <HiOutlineMenuAlt2 className="text-2xl" />
            </button>
          </div>
          <div className="flex items-center gap-4 relative">
            <button
              className="dark:bg-slate-50 dark:text-slate-700 rounded-full p-2 transition-al duration-300 cursor-pointer"
              onClick={toggleDarkMode}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button ref={notificationsRef} onClick={handleNotificationsClick}>
              {isNotificationsOpen ? (
                <FaBell className="text-xl dark:text-white cursor-pointer duration-300" />
              ) : (
                <FaRegBell className="text-xl dark:text-white cursor-pointer duration-300" />
              )}
              <div className=""></div>
            </button>
            {isNotificationsOpen && (
              <div
                className={`absolute right-12 top-12 mt-2 w-50 lg:w-75 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 p-3 transition-all duration-300 ${
                  isNotificationsOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {/* isi dengan notifikasi */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 cursor-pointer dark:text-white font-semibold rounded px-2 py-1">
                    <a href="">No new notifications</a>
                  </li>
                </ul>
              </div>
            )}
            <button
              ref={userMenuRef}
              className="dark:bg-slate-50 dark:text-slate-700 rounded-full transition-all duration-300 cursor-pointer"
              onClick={handleUserClick}
            >
              <img src={userDefault} alt="" className="w-8 rounded-full" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 top-12 mt-2 w-40 bg-white dark:bg-black rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 p-3">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white font-semibold rounded px-2 py-1">
                    <FaRegUser />
                    <a href="">Profile</a>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white font-semibold rounded px-2 py-1">
                    <a href="">Settings</a>
                  </li>
                  <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white font-semibold rounded px-2 py-1">
                    <a href="">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
