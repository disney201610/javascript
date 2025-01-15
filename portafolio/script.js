// Cambiar tema oscuro/claro
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  themeToggle.textContent = body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

// Generar proyectos dinámicamente
const projectsContainer = document.getElementById("projects-container");
const projects = [
  {
    title: "Proyecto 1",
    description: "Este es un proyecto sobre desarrollo web.",
  },
  { title: "Proyecto 2", description: "Una aplicación móvil innovadora." },
  { title: "Proyecto 3", description: "Un sistema de gestión empresarial." },
];

projects.forEach((project) => {
  const projectCard = document.createElement("div");
  projectCard.className = "project-card";
  projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
  projectsContainer.appendChild(projectCard);
});

// Validar y enviar formulario
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  feedback.style.display = "block";
  feedback.textContent = `Gracias ${name}, tu mensaje ha sido enviado correctamente.`;
  feedback.style.color = "green";

  form.reset();
}); 
