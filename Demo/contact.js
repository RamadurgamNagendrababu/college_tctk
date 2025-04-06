document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stops the page from refreshing
    alert("Your message has been sent. Thank you for contacting us!");

    // Optional: Clear form fields
    form.reset();
  });
});
