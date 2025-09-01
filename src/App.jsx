import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./ui/Content";
import Main from "./ui/Main";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Tracking from "./pages/Tracking";
import Missions from "./pages/Missions";
import Data from "./pages/Data";
import Log from "./pages/Log";
import Settings from "./pages/Settings";
import NotFound from "./pages/error/404";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set sidebar open/close hanya sekali saat mount (berdasarkan lebar layar)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const validPaths = [
    "/",
    "/tracking",
    "/missions",
    "/data",
    "/logs",
    "/settings",
  ];

  const isNotFound = !validPaths.includes(location.pathname);

  if (isNotFound) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
        <NotFound />
      </div>
    );
  }

  return (
    <div className="font-quickSand flex bg-white dark:bg-black">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
        />
        <Main isSidebarOpen={isSidebarOpen}>
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/missions" element={<Missions />} />
              <Route path="/data" element={<Data />} />
              <Route path="/logs" element={<Log />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
        </Main>
      </div>
    </div>
  );
}

const AppWithRouter = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWithRouter;
