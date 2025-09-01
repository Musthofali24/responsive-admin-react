import { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./ui/Content";
import Main from "./ui/Main";
import Profile from "./Profile/Profile";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

  return (
    <div className="font-quickSand">
      <Header
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
      />

      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Main>
        <Content>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="h-56 bg-white"></div>
            <div className="h-56 bg-white"></div>
            <div className="h-56 bg-white"></div>
            <div className="h-56 bg-white"></div>
          </div>
        </Content>
      </Main>
    </div>
  );
}

export default App;
