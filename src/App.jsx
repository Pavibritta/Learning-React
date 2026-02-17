import { useState, useRef, useEffect } from "react";
import createElement from "./createElement.js";
import "./App.css";

function App() {
  const domRef = useRef(null);
  useEffect(() => {
    createElement(domRef.current);
  }, []);
  return (
    <>
      <div className="card">
        <h1 className="heading">From jsx file</h1>
        <h1 className="heading">Developer Profile</h1>

        {/* Basic Info */}
        <section className="sections">
          <h2 className="heading">Basic Info</h2>
          <p>
            <strong>Name: </strong> Pavithra
          </p>
          <p>
            <strong>Role: </strong> Frontend Developer
          </p>
        </section>

        {/* Skills */}
        <section className="sections">
          <h2 className="heading">Skills</h2>
          <ul className="list">
            <li className="list-items bg-purple-500">HTML</li>
            <li className="list-items bg-blue-500">CSS</li>
            <li className="list-items bg-green-500">JavaScript</li>
            <li className="list-items bg-yellow-500">React</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="sections">
          <h2 className="heading">Projects</h2>

          <div className="project">
            <h3 className="sub-heading">Portfolio Website</h3>
            <p className="projDesc">Personal portfolio built using React.</p>
            <span className="projStatus bg-green-500">Status: Completed</span>
          </div>

          <div className="project">
            <h3 className="sub-heading">Task Manager</h3>
            <p className="projDesc">A simple task management app.</p>
            <span className="projStatus bg-blue-500">Status: In Progress</span>
          </div>
        </section>
      </div>

      {/* js dom content*/}
      <div ref={domRef}></div>
    </>
  );
}

export default App;
