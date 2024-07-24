import "./App.css";
import {
  MainPage,
  Skills,
  Contact,
  AboutMe,
  NavBar,
  Projects,
} from "./Components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "./Components/Loader/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const handlePageLoad = () => setLoading(false);
    
    if (document.readyState === 'complete') {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <MainPage />
        </>
      ),
    },
    {
      path: "about",
      element: (
        <>
          <NavBar />
          <AboutMe />
        </>
      ),
    },
    {
      path: "contact",
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
    {
      path: "skills",
      element: (
        <>
          <NavBar />
          <Skills />
        </>
      ),
    },
    {
      path: "projects",
      element: (
        <>
          <NavBar />
          <Projects />
        </>
      ),
    },
  ]);

  return (
    <div className={`${isDarkMode ? "dark" : "light"}`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <label htmlFor="NavCheck" id="bars">
            <FontAwesomeIcon icon={faBars} />
          </label>
          <input type="checkbox" name="Nav" id="NavCheck" />

          <div className="Mode">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} />
              <span className="slider"></span>
            </label>
          </div>
          <RouterProvider router={router} />
        </>
      )}
    </div>
  );
}

export default App;
