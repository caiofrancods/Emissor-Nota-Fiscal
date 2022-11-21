function sair() {
  localStorage.removeItem('userlogado');
  window.location.href = "index.html";
}
function veriflog() {
  if (!localStorage.userlogado) {
    alert("Faça login primeiro");
    window.location.href = "index.html";
  }
}