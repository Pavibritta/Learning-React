import "./index.css";

// Create main container
export default function createElement(rootEl) {
  rootEl.innerHTML = "";
  const parentEl = document.createElement("div");
  parentEl.classList.add(
    "card",
    "bg-white",
    "rounded",
    "shadow",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "mt-20",
    "gap-6",
    "mx-auto",
    "max-w-3xl",
    "p-4",
  );

  // Heading
  const headingEl1 = document.createElement("h1");
  headingEl1.classList.add("font-bold", "text-3xl", "text-blue-500");
  headingEl1.textContent = "Developer Profile from js dom";
  parentEl.appendChild(headingEl1);

  // Heading
  const headingEl = document.createElement("h1");
  headingEl.classList.add("font-bold", "text-3xl", "text-blue-500");
  headingEl.textContent = "Developer Profile";
  parentEl.appendChild(headingEl);

  // Basic Info Section
  const basicInfoSection = document.createElement("section");
  basicInfoSection.classList.add(
    "bg-gray-100",
    "w-full",
    "p-4",
    "rounded",
    "shadow",
    "mt-6",
  );

  const basicHeading = document.createElement("h2");
  basicHeading.classList.add(
    "font-semibold",
    "text-2xl",
    "text-blue-500",
    "mb-3",
  );
  basicHeading.textContent = "Basic Info";

  const namePara = document.createElement("p");
  namePara.innerHTML = `<strong class="font-bold text-blue-600">Name: </strong>Pavithra`;

  const rolePara = document.createElement("p");
  rolePara.innerHTML = `<strong class="font-bold text-blue-600">Role: </strong>Frontend Developer`;

  basicInfoSection.appendChild(basicHeading);
  basicInfoSection.appendChild(namePara);
  basicInfoSection.appendChild(rolePara);
  parentEl.appendChild(basicInfoSection);

  // ---------- Skills Section ----------
  const skillsSection = document.createElement("section");
  skillsSection.classList.add(
    "bg-white",
    "w-full",
    "p-4",
    "rounded",
    "shadow",
    "mt-6",
  );

  const skillsHeading = document.createElement("h2");
  skillsHeading.classList.add(
    "font-semibold",
    "text-2xl",
    "text-blue-500",
    "mb-3",
  );
  skillsHeading.textContent = "Skills";

  const ulEl = document.createElement("ul");
  ulEl.classList.add("flex", "flex-wrap", "gap-3");

  const techSkills = ["HTML", "CSS", "JavaScript", "React"];
  techSkills.forEach((skill) => {
    const liEl = document.createElement("li");
    liEl.textContent = skill;
    liEl.classList.add("px-4", "py-1", "text-white", "rounded");

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
  projectSection.classList.add(
    "bg-white",
    "w-full",
    "p-4",
    "rounded",
    "shadow",
    "mt-6",
  );

  const projectHeading = document.createElement("h2");
  projectHeading.classList.add(
    "font-semibold",
    "text-2xl",
    "text-blue-500",
    "mb-4",
  );
  projectHeading.textContent = "Projects";

  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("flex", "flex-col", "gap-5");

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
    projDiv.classList.add("bg-gray-100", "p-4", "rounded", "shadow");

    const projTitle = document.createElement("h3");
    projTitle.classList.add(
      "font-semibold",
      "text-xl",
      "text-blue-500",
      "mb-2",
    );
    projTitle.textContent = proj.title;

    const projDesc = document.createElement("p");
    projDesc.classList.add("text-gray-800", "mb-2");
    projDesc.textContent = proj.desc;

    const projStatus = document.createElement("span");
    projStatus.classList.add(
      "px-3",
      "py-1",
      "rounded",
      "text-white",
      "shadow",
      proj.statusColor,
    );
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
