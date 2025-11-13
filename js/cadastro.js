const registerForm = document.getElementById('registerForm');
const registerError = document.getElementById('registerError');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const password = document.getElementById('newPassword').value.trim();

  if (!username || !email || !password) {
    registerError.textContent = "Preencha todos os campos.";
    return;
  }

  // Simula cadastro
  localStorage.setItem("user", JSON.stringify({ username, email, password }));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html"; // redireciona para login
});
