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
function iniciar() {
  if (!localStorage.user) {
    var user = [];
    localStorage.setItem('user', JSON.stringify(user));
  }
  if (!localStorage.userlogado) {
    var userlogado = "";
    localStorage.setItem('userlogado', JSON.stringify(userlogado));
  }
  if (!localStorage.notas) {
    var notas = [];
    localStorage.setItem('notas', JSON.stringify(notas));
  }
  if (!localStorage.produtos) {
    var produtos = [];
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }
}
