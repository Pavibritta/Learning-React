import "./index.css";
import React from "https://esm.sh/react@19";
import { createRoot } from "https://esm.sh/react-dom@19/client";

 const AppEl = () => {
  const skills = [
    { name: "HTML", color: "bg-purple-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-green-500" },
    { name: "React", color: "bg-yellow-500" },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built using React.",
      status: "Completed",
      statusColor: "bg-green-500",
    },
    {
      title: "Task Manager",
      desc: "A simple task management app.",
      status: " In Progress",
      statusColor: "bg-blue-500",
    },
  ];

  return React.createElement(
    "div",
    {
      className: `
      bg-white
      rounded
      shadow
      flex
      flex-col
      justify-center
      items-center
      mt-20
      gap-6
      mx-auto
      max-w-3xl
      p-4
    `,
    },
    // children elements go here, e.g.,
    React.createElement(
      "h1",
      { className: "text-2xl font-bold text-blue-500" },
      "Developer Profile",
    ),

    React.createElement(
      "section",
      {
        className: `bg-gray-100 w-full p-4 rounded shadow mt-6`,
      },
      React.createElement(
        "h2",
        { className: `font-semibold text-2xl text-blue-500 mb-3` },
        "Basic Info",
      ),

      React.createElement(
        "p",
        null,
        React.createElement(
          "strong",
          { className: `font-bold text-blue-600` },
          "Name: ",
        ),
        "Pavithra",
      ),
      React.createElement(
        "p",
        { className: `mt-1` },
        React.createElement(
          "strong",
          { className: `font-bold text-blue-600` },
          "Role: ",
        ),
        "Frontend Developer",
      ),
      React.createElement(
        "section",
        {
          className: `bg-white w-full p-4 rounded shadow mt-6`,
        },
        React.createElement(
          "h2",
          { className: `font-semibold text-2xl text-blue-500 mb-3` },
          "Skills",
        ),
        React.createElement(
          "ul",
          { className: `flex gap-5 items-center` },
          skills.map((skill) =>
            React.createElement(
              "li",
              { className: `${skill.color} px-3 py-2 rounded text-white` },
              `${skill.name}`,
            ),
          ),
        ),
      ),
      React.createElement(
        "section",
        { className: `bg-white w-full p-4 rounded shadow mt-6 ` },
        React.createElement(
          "h2",
          { className: `font-semibold text-2xl text-blue-500 mb-4` },
          "Projects",
        ),
        projects.map((project) =>
          React.createElement(
            "div",
            { className: `bg-gray-100 p-4 rounded shadow mb-2` },
            React.createElement(
              "h3",
              {
                className: `font-semibold text-xl text-blue-500 mb-2`,
              },
              `${project.title}`,
            ),
            React.createElement(
              "p",
              { className: `text-gray-800 mb-2` },
              `${project.desc}`,
            ),
            React.createElement(
              "span",
              {
                className: `${project.statusColor} px-3 py-1 rounded text-white shadow`,
              },
              `${project.status}`,
            ),
          ),
        ),
      ),
    ),
  );
};

createRoot(document.getElementById("root")).render(React.createElement(AppEl));
console.log(React.createElement(AppEl));

export default AppEl
