import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-darkBg text-gray-900 dark:text-white min-h-screen transition-colors">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;