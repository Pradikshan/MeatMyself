// Save the username and password in the signup form
const signupForm = document.querySelector("#signup-form");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
});
