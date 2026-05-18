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

// Skills;
const skillsContainer = document.getElementById("skills-container");

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-blue-500 transition">
      <h3 class="text-lg font-semibold">${skill}</h3>
    </div>
  `;
});
