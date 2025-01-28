const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const errorDiv = document.getElementById("error");

document.getElementById("showLogin").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("loginForm").style.display = "block";
});

document.getElementById("showSignup").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("signupForm").style.display = "block";
  document.getElementById("loginForm").style.display = "none";
});
