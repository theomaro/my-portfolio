const skills = {
  backend: ["Python", "Django", "MySQL", "REST APIs"],
  frontend: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
  tools: ["Git & GitHub", "Responsive Design"],
};

const projects = [
  {
    title: "TeachDocs — Smart Teaching & Lesson Planning Toolkit",
    description:
      "A workflow tool helping teachers turn curriculum into effective classroom practice.",

    tech: [
      { name: "Python", label: `<i class="devicon-python-plain colored"></i>` },
      { name: "Django", label: `<i class="devicon-django-plain"></i>` },
      {
        name: "Django REST",
        label: `<i class="devicon-djangorest-plain colored"></i>`,
      },
      { name: "MySQL", label: `<i class="devicon-mysql-plain"></i>` },
      {
        name: "TypeScript",
        label: `<i class="devicon-typescript-plain colored"></i>`,
      },
      {
        name: "React",
        label: `<i class="devicon-react-original colored"></i>`,
      },
      {
        name: "React Router",
        label: `<i class="devicon-reactrouter-plain colored"></i>`,
      },
    ],

    github: "https://github.com/theomaro/plan-teach-smart-kit",
    demo: "#",

    image: "./images/projects/teaching-docs.png",

    featured: true,
  },

  {
    title: "ResumeX",
    description:
      "A modern web application that allows users to build, customize, and export professional resumes tailored to the Tanzanian job market and education system.",

    tech: [
      {
        name: "React",
        label: `<i class="devicon-react-original colored"></i>`,
      },
      {
        name: "Vite",
        label: `<i class="devicon-vitejs-plain colored"></i>`,
      },
      {
        name: "React Router",
        label: `<i class="devicon-reactrouter-plain colored"></i>`,
      },
      {
        name: "TailwindCSS",
        label: `<i class="devicon-tailwindcss-original"></i>`,
      },
      {
        name: "TypeScript",
        label: `<i class="devicon-typescript-plain colored"></i>`,
      },
    ],

    github: "https://github.com/theomaro/resume-builder-ui",
    demo: "https://resume-builder-ui-jet.vercel.app/",

    image: "./images/projects/resume.png",

    featured: true,
  },

  {
    title: "Spot.io",

    description:
      "A web-based job listing application built with Django and MySQL, allowing users to browse and manage job opportunities through a clean and responsive interface.",

    tech: [
      { name: "Python", label: `<i class="devicon-python-plain colored"></i>` },
      { name: "Django", label: `<i class="devicon-django-plain"></i>` },
      { name: "MySQL", label: `<i class="devicon-mysql-plain"></i>` },
      { name: "HTML5", label: `<i class="devicon-html5-plain colored"></i>` },
      { name: "CSS3", label: `<i class="devicon-css3-plain colored"></i>` },
      {
        name: "JavaScript",
        label: `<i class="devicon-javascript-plain colored"></i>`,
      },
    ],

    github: "https://github.com/theomaro/job-listings",
    demo: "#",

    image: "./images/projects/jobs-listings.png",

    featured: false,
  },

  {
    title: "Manage Landing Page",

    description:
      "A responsive landing page challenge from Frontend Mentor focused on layout structuring, responsive design, and reusable UI sections.",

    tech: [
      { name: "HTML5", label: `<i class="devicon-html5-plain colored"></i>` },
      {
        name: "TailwindCSS",
        label: `<i class="devicon-tailwindcss-original colored"></i>`,
      },
      {
        name: "TypeScript",
        label: `<i class="devicon-typescript-plain colored"></i>`,
      },
    ],

    github: "https://github.com/theomaro/manage-landing-page/",
    demo: "https://theomaro.github.io/manage-landing-page/",

    image: "./images/projects/manage.png",

    featured: false,
  },

  {
    title: "Bookmark Landing Page",

    description:
      "A responsive product landing page built as a Frontend Mentor challenge with interactive UI sections and responsive layouts.",

    tech: [
      { name: "HTML5", label: `<i class="devicon-html5-plain colored"></i>` },
      {
        name: "TailwindCSS",
        label: `<i class="devicon-tailwindcss-original colored"></i>`,
      },
      {
        name: "TypeScript",
        label: `<i class="devicon-typescript-plain colored"></i>`,
      },
    ],

    github: "https://github.com/theomaro/bookmark-landing-page/",
    demo: "https://the-bookmark-landing-page.netlify.app/",

    image: "./images/projects/bookmark.png",

    featured: false,
  },
];

const educations = [
  {
    title: "Postigraduate Diploma in Computer Science",
    institution: "University of Dodoma",
    date: "2024 - 2025",
  },
  {
    title: "BSc. Education",
    institution: "Sokoine University of Agriculture",
    date: "2013 - 2016",
  },
];

const courses = [
  {
    title: "Ultimate HTML5 & CSS3 Series",
    date: "November 2024",
    skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
  },
  {
    title: "Ultimate JavaScript: Fundamentals",
    date: "July 2024",
    skills: ["JavaScript", "DOM", "ES6"],
  },
  {
    title: "Complete Python Mastery",
    date: "April 2022",
    skills: ["Python", "OOP", "Data Structures"],
  },
  {
    title: "The Ultimate Django Series",
    date: "April 2022",
    skills: ["Django", "REST APIs", "MySQL", "Backend"],
  },
];

// Skills
const skillsContainer = document.getElementById("skills-container");

Object.entries(skills).forEach(([category, items]) => {
  const skillsList = items
    .map(
      (skill) => `
        <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
          ${skill}
        </span>
      `,
    )
    .join("");

  skillsContainer.innerHTML += `
    <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition">

      <h3 class="text-lg font-semibold capitalize mb-4 text-cyan-400">
        ${category}
      </h3>

      <div class="flex flex-wrap gap-2">
        ${skillsList}
      </div>

    </div>
  `;
});

// Projects
const projectsContainer = document.getElementById("projects-container");

projects.forEach((project) => {
  const techList = project.tech
    .map(
      (tech) => `
      <div class="tech-icon group relative">
        ${tech.label}

        <span
          class="
            absolute
            left-1/2
            -translate-x-1/2
            top-12
            px-2
            py-1
            text-xs
            rounded-md
            bg-gray-800
            text-white
            opacity-0
            pointer-events-none
            transition-all
            duration-200
            group-hover:opacity-100
            group-hover:top-10
            whitespace-nowrap
            shadow-lg
            border
            border-gray-700
          "
        >
          ${tech.name}
        </span>
      </div>
    `,
    )
    .join("");

  projectsContainer.innerHTML += `
    <div class="
      bg-gray-900
      border
      ${project.featured ? "border-cyan-500/40" : "border-gray-800"}
      rounded-3xl
      overflow-hidden
      shadow-xl
      hover:border-cyan-500/50
      transition
    ">

      <!-- Project Image -->
      <img
        src="${project.image}"
        alt="${project.title}"
        class="w-full h-56 object-cover object-top border-b border-gray-800"
      />

      <!-- Content -->
      <div class="p-8">

        ${
          project.featured
            ? `
              <span class="inline-block mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                Featured Project
              </span>
            `
            : ""
        }

        <h3 class="text-2xl font-semibold mb-4">
          ${project.title}
        </h3>

        <p class="text-gray-300 leading-relaxed mb-6">
          ${project.description}
        </p>

        <!-- Technologies -->
        <div class="flex flex-wrap gap-5 mb-8 items-center">
          ${techList}
        </div>

        <!-- Links -->
        <div class="flex items-center gap-6">

          <a
            href="${project.github}"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition"
          >
            GitHub →
          </a>

          ${
            project.demo !== "#"
              ? `
                <a
                  href="${project.demo}"
                  target="_blank"
                  class="text-cyan-400 hover:text-cyan-300 transition"
                >
                  Live Demo →
                </a>
              `
              : ""
          }

        </div>

      </div>

    </div>
  `;
});

// Education
const educationContainer = document.getElementById("education-container");

educations.forEach((edu) => {
  educationContainer.innerHTML += `
    <div
      class="
        relative
        bg-gray-900
        border
        border-gray-800
        rounded-3xl
        p-6
        hover:border-cyan-500/30
        transition
        overflow-hidden
      "
    >

      <!-- Accent Line -->
      <div class="absolute left-0 top-0 h-full w-1 bg-cyan-500/70"></div>

      <div class="pl-4">

        <div class="flex items-start justify-between gap-4 flex-wrap">

          <div>
            <h3 class="text-xl font-semibold text-white mb-1">
              ${edu.title}
            </h3>

            <p class="text-gray-400">
              ${edu.institution}
            </p>
          </div>

          <span
            class="
              text-sm
              text-cyan-400
              bg-cyan-500/10
              px-3
              py-1
              rounded-full
              whitespace-nowrap
            "
          >
            ${edu.date}
          </span>

        </div>

      </div>

    </div>
  `;
});

// Courses
const coursesContainer = document.getElementById("courses-container");

courses.forEach((course) => {
  coursesContainer.innerHTML += `
    <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition">

      <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        
        <div>
          <h3 class="font-semibold text-lg">${course.title}</h3>

          <div class="flex flex-wrap gap-2 mt-3">
            ${course.skills
              .map(
                (skill) => `
                  <span class="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-lg">
                    ${skill}
                  </span>
                `,
              )
              .join("")}
          </div>
        </div>

        <span class="text-gray-500 text-sm whitespace-nowrap">
          ${course.date}
        </span>

      </div>

    </div>
  `;
});
