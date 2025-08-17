// Show Register/Login
function showLogin() {
  document.getElementById("register").style.display = "none";
  document.getElementById("login").style.display = "block";
}
function showRegister() {
  document.getElementById("login").style.display = "none";
  document.getElementById("register").style.display = "block";
}

// Register
function register() {
  let name = document.getElementById("reg-name").value;
  let email = document.getElementById("reg-email").value;
  let password = document.getElementById("reg-password").value;

  if(name && email && password) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("userBalance", 0);

    alert("Registration successful! Please login.");
    showLogin();
  } else {
    alert("Please fill all fields.");
  }
}

// Login
function login() {
  let email = document.getElementById("login-email").value;
  let password = document.getElementById("login-password").value;

  let storedEmail = localStorage.getItem("userEmail");
  let storedPassword = localStorage.getItem("userPassword");

  if(email === storedEmail && password === storedPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("user-name").innerText = localStorage.getItem("userName");
    document.getElementById("user-email").innerText = storedEmail;
    document.getElementById("user-balance").innerText = localStorage.getItem("userBalance");
  } else {
    alert("Invalid email or password.");
  }
}

// Logout
function logout() {
  document.getElementById("dashboard").style.display = "none";
  showLogin();
}

// Admin login
function adminLogin() {
  let user = document.getElementById("admin-user").value;
  let pass = document.getElementById("admin-pass").value;

  if(user === "admin" && pass === "12345") {  // change credentials here
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    alert("Wrong admin credentials!");
  }
}
function adminLogout() {
  document.getElementById("admin-panel").style.display = "none";
  document.getElementById("admin-login").style.display = "block";
}
