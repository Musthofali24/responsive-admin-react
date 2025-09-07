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
import Vehicle from "./pages/Vehicle";
import Alerts from "./pages/Alerts";

function App() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set sidebar open/close hanya sekali saat mount (berdasarkan lebar layar)
  useEffect(() => {
    const savedSidebar = localStorage.getItem("sidebarOpen");
    if (savedSidebar !== null) {
      setIsSidebarOpen(savedSidebar === "true");
    } else {
      // default: cek ukuran layar
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    }
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("darkMode", newMode);
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      const newState = !prev;
      localStorage.setItem("sidebarOpen", newState);
      return newState;
    });
  };

  const validPaths = [
    "/",
    "/tracking",
    "/missions",
    "/data",
    "/logs",
    "/settings",
    "/vehicle",
    "/alerts",
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
    <div className="--font-openSans flex bg-white dark:bg-primary">
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
              <Route path="/" element={<Dashboard darkMode={darkMode} />} />
              <Route
                path="/tracking"
                element={<Tracking darkMode={darkMode} />}
              />
              <Route
                path="/missions"
                element={<Missions darkMode={darkMode} />}
              />
              <Route path="/data" element={<Data darkMode={darkMode} />} />
              <Route path="/logs" element={<Log darkMode={darkMode} />} />
              <Route
                path="/settings"
                element={<Settings darkMode={darkMode} />}
              />
              <Route
                path="/vehicle"
                element={<Vehicle darkMode={darkMode} />}
              />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="*" element={<NotFound />} />
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
