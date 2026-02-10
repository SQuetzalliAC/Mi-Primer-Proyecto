// scripts.js

// Actualizar año en el footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {yearSpan.textContent = new Date().getFullYear();
  }
});

