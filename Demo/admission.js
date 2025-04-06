document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".admission-form");
    const successMessage = document.querySelector(".success-message");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Example: Form data processing
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
  
      if (name && email) {
        successMessage.textContent = `Thank you, ${name}! Your application has been received.`;
        successMessage.style.display = "block";
        form.reset();
      } else {
        successMessage.textContent = "Please fill in all required fields.";
        successMessage.style.color = "#f44336";
        successMessage.style.display = "block";
      }
    });
  });
  