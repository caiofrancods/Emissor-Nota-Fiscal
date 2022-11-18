function veriflog() {
  if (!localStorage.userlogado) {
    alert("Faça login primeiro");
    window.location.href = "index.html";
  }
}