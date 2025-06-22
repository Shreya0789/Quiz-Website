function register() {
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  localStorage.setItem(email, pass);
  alert("Registration successful");
}
function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  const storedPass = localStorage.getItem(email);
  if (storedPass === pass) {
    alert("Login successful");
    localStorage.setItem("user", email);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}