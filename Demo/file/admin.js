function showSection(id) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => section.classList.remove("active"));
  
    document.getElementById(id).classList.add("active");
  }
  