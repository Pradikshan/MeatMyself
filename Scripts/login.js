
// Validate the user's access in the login form
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector("#name").value;
  const password = document.querySelector("#password").value;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");
    window.location.href="category.html"
  } else {
    alert("Login failed! Please check your username and password.");
  }
});
