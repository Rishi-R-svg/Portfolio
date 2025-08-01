import { useState } from "react";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import "./App.css";

import { createContext } from "react";
import Skills from "./components/Skills";

import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
// import Home from './components/Skills'

const RouterPath = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/projects",
    element: (
      <div>
        <Navbar />
        <Projects />
      </div>
    ),
  },
  {
    path: "/skills",
    element: (
      <div>
        <Navbar />
         <Skills/>
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/Contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
]);

const ChangeContext = createContext();

function App() {
  let [isimgtrue, setbool] = useState(true);

  return (
    <ChangeContext.Provider value={{ isimgtrue,setbool}}>
      <div
        className="app"
        style={{ backgroundColor: isimgtrue ? "black" : "white" }}
      >
        <RouterProvider router={RouterPath} />
      </div>
    </ChangeContext.Provider>
  );
}

export default App;
export { ChangeContext };
