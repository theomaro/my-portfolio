const skills = [
  "Python",
  "Django",
  "JavaScript",
  "React",
  "HTML5",
  "CSS3",
  "MySQL",
  "Git & GitHub",
];

const courses = [
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

  {
    title: "Ultimate JavaScript: Fundamentals",
    date: "July 2024",
    skills: ["JavaScript", "DOM", "ES6"],
  },

  {
    title: "Ultimate HTML5 & CSS3 Series",
    date: "November 2024",
    skills: ["HTML5", "CSS3", "Responsive Design", "Accessibility"],
  },
];

// Skills
const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 class="text-lg font-semibold">${skill}</h3>
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
