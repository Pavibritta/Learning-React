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
      card
    `,
    },
    // children elements
    React.createElement("h1", { className: "heading" }, "From React dom"),
    // children elements
    React.createElement("h1", { className: "heading" }, "Developer Profile"),

    React.createElement(
      "section",
      {
        className: `sections`,
      },
      React.createElement("h2", { className: `heading` }, "Basic Info"),

      React.createElement(
        "p",
        null,
        React.createElement("strong", { className: `heading` }, "Name: "),
        "Pavithra",
      ),
      React.createElement(
        "p",
        { className: `mt-1` },
        React.createElement("strong", { className: `heading` }, "Role: "),
        "Frontend Developer",
      ),
    ),
    React.createElement(
      "section",
      {
        className: `sections`,
      },
      React.createElement("h2", { className: `heading` }, "Skills"),
      React.createElement(
        "ul",
        { className: `list` },
        skills.map((skill) =>
          React.createElement(
            "li",
            { className: `${skill.color} list-items` },
            `${skill.name}`,
          ),
        ),
      ),
    ),
    React.createElement(
      "section",
      { className: `sections` },
      React.createElement("h2", { className: `heading` }, "Projects"),
      projects.map((project) =>
        React.createElement(
          "div",
          { className: `project` },
          React.createElement(
            "h3",
            {
              className: `sub-heading`,
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
  );
};

createRoot(document.getElementById("root")).render(React.createElement(AppEl));
console.log(React.createElement(AppEl));

export default AppEl;
