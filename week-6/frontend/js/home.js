document.addEventListener("DOMContentLoaded", () => {
  const name = sessionStorage.getItem("userName");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (!name) {
    window.location.href = "login.html";
    return;
  }

  welcomeMessage.textContent = `Welcome, ${name}!`;
  document.getElementById("year").textContent = new Date().getFullYear();

  document.getElementById("logoutLink").addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.removeItem("userName");
    window.location.href = "login.html";
  });
});
