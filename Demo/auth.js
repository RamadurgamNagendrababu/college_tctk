// Save signup data
document.getElementById("signupForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = { username, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup successful! Please login.");
    window.location.href = "login.html";
  });
  
  // Login validation
  document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.email === email && user.password === password) {
      alert("Login successful!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "home.html";
    } else {
      alert("Invalid credentials!");
    }
  });
  