function sair() {
  localStorage.removeItem('userlogado');
  window.location.href = "index.html";
}

function veriflog() {
  if (!localStorage.userlogado) {
    alert("Faça login primeiro");
    window.location.href = "index.html";
  }else{
    var userlogado = JSON.parse(localStorage.getItem('userlogado'));
    if (userlogado == "Deslogado"){
      alert("Faça login primeiro");
      window.location.href = "index.html";
    }
  }
}
function iniciar() {
  if (!localStorage.user) {
    var user = [];
    localStorage.setItem('user', JSON.stringify(user));
  }
  if (!localStorage.userlogado) {
    var userlogado = "Deslogado";
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
  if (!localStorage.controle_incluir) {
    var controle_incluir = 0;
    localStorage.setItem('controle_incluir', JSON.stringify(controle_incluir));
  }
  if (!localStorage.frequente) {
    var frequente = [];
    localStorage.setItem('frequente', JSON.stringify(frequente));
  }
}