const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Simulação simples (substituir por sistema real depois)
  if (username === "admin" && password === "1234") {
    window.location.href = "inicio.html"; // redireciona para a home
  } else {
    errorMessage.textContent = "Usuário ou senha inválidos";
  }
});