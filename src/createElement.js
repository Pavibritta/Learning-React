import "./index.css";
import "./App.css";

// Create main container
export default function createElement(rootEl) {
  rootEl.innerHTML = "";
  const parentEl = document.createElement("div");
  parentEl.style.backgroundColor = "white";
  parentEl.classList.add("card");

  // Heading
  const headingEl1 = document.createElement("h1");
  headingEl1.classList.add("heading");
  headingEl1.textContent = "Developer Profile from js dom";
  parentEl.appendChild(headingEl1);

  // Heading
  const headingEl = document.createElement("h1");
  headingEl.classList.add("heading");
  headingEl.textContent = "Developer Profile";
  parentEl.appendChild(headingEl);

  // Basic Info Section
  const basicInfoSection = document.createElement("section");
  basicInfoSection.classList.add("sections");

  const basicHeading = document.createElement("h2");
  basicHeading.classList.add("heading");
  basicHeading.textContent = "Basic Info";

  const namePara = document.createElement("p");
  namePara.innerHTML = `<strong class="heading">Name: </strong>Pavithra`;

  const rolePara = document.createElement("p");
  rolePara.innerHTML = `<strong class="heading">Role: </strong>Frontend Developer`;

  basicInfoSection.appendChild(basicHeading);
  basicInfoSection.appendChild(namePara);
  basicInfoSection.appendChild(rolePara);
  parentEl.appendChild(basicInfoSection);

  //Skills Section
  const skillsSection = document.createElement("section");
  skillsSection.classList.add("sections");

  const skillsHeading = document.createElement("h2");
  skillsHeading.classList.add("heading");
  skillsHeading.textContent = "Skills";

  const ulEl = document.createElement("ul");
  ulEl.classList.add("list");

  const techSkills = ["HTML", "CSS", "JavaScript", "React"];
  techSkills.forEach((skill) => {
    const liEl = document.createElement("li");
    liEl.textContent = skill;
    liEl.classList.add("list-items");

    // Assign background colors
    const bgColors = {
      HTML: "bg-purple-500",
      CSS: "bg-blue-500",
      JavaScript: "bg-green-500",
      React: "bg-yellow-500",
    };
    liEl.classList.add(bgColors[skill]);
    ulEl.appendChild(liEl);
  });

  skillsSection.appendChild(skillsHeading);
  skillsSection.appendChild(ulEl);
  parentEl.appendChild(skillsSection);

  // Projects Section
  const projectSection = document.createElement("section");
  projectSection.classList.add("sections");

  const projectHeading = document.createElement("h2");
  projectHeading.classList.add("heading");
  projectHeading.textContent = "Projects";

  const projectsContainer = document.createElement("div");
  // projectsContainer.classList.add("project");

  // Project Data Array
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
      status: "In Progress",
      statusColor: "bg-blue-500",
    },
  ];

  projects.forEach((proj) => {
    const projDiv = document.createElement("div");
    projDiv.classList.add("project");

    const projTitle = document.createElement("h3");
    projTitle.classList.add("sub-heading");
    projTitle.textContent = proj.title;

    const projDesc = document.createElement("p");
    projDesc.classList.add("projDesc");
    projDesc.textContent = proj.desc;

    const projStatus = document.createElement("span");
    projStatus.classList.add("projStatus", proj.statusColor);
    projStatus.textContent = proj.status;

    projDiv.appendChild(projTitle);
    projDiv.appendChild(projDesc);
    projDiv.appendChild(projStatus);
    projectsContainer.appendChild(projDiv);
  });

  projectSection.appendChild(projectHeading);
  projectSection.appendChild(projectsContainer);
  parentEl.appendChild(projectSection);

  // Append everything to root
  rootEl.appendChild(parentEl);
}
