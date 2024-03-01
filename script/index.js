const loginButton = document.getElementById("login-btn");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

const username = "AdminSEF123";
const password = "SeF@ctORy$$456";

loginButton.addEventListener("click", function () {
  if (username == usernameInput.value && password == passwordInput.value) {
    window.location.href = "./pages/to-do.html";
  } else {
    alert("Wrong input, please try again");
  }
});
