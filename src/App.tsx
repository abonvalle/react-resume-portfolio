import i18next from "i18next";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { LanguageOption, LanguageSelector } from "./components";
import { ProjectsPage } from "./pages";
import AboutPage from "./pages/about.page";
function App() {
  const [currentLang, setCurrentLang] = useState(i18next.language);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const langs: LanguageOption[] = [
    { code: "en", name: "🇬🇧" },
    { code: "fr", name: "🇫🇷" },
  ];
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={
        "wrapper prose-lg " + (isDarkMode ? "prose-dark" : "prose-light")
      }
    >
      <div className="content">
        <Router>
          <nav className="flex justify-between items-center text-lg mb-8 pt-8">
            <div className="flex gap-2">
              <NavLink to="/" end>
                A propos
              </NavLink>
              <NavLink to="/projects" end>
                Projets
              </NavLink>
            </div>
            <div className="flex justify-center items-center gap-2">
              <button
                className="cursor-pointer"
                onClick={() => toggleDarkMode()}
              >
                {isDarkMode ? <Sun /> : <Moon />}
              </button>
              <LanguageSelector
                options={langs}
                currentLang={currentLang}
                onChange={(lang) => setCurrentLang(lang)}
              />
            </div>
          </nav>
          <Routes>
            <Route path="/" Component={AboutPage} />
            <Route path="/projects" Component={ProjectsPage} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
