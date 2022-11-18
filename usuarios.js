if (!localStorage.user) {
  var user = [];
  localStorage.setItem('user', JSON.stringify(user));
}
///////// Cadastro ////////

function cadastro() {
  var user = JSON.parse(localStorage.getItem('user'));
  var posicao = user.length;

  var campo_nomefantasia = document.getElementById("nomefantasia");
  var campo_cnpj = document.getElementById("cnpj");
  var campo_email_contato = document.getElementById("emailcontato");
  var campo_senha_cadastro = document.getElementById("senhacadastro");

  var usuario = new Object();
  usuario.nome = campo_nomefantasia.value;
  usuario.cnpj = Number(campo_cnpj.value);
  usuario.email = campo_email_contato.value;
  usuario.senha = campo_senha_cadastro.value;

  user[posicao] = usuario;

  localStorage.setItem('user', JSON.stringify(user));

  alert("Cadastro Realizado com Sucesso");
  campo_nomefantasia.value = "";
  campo_cnpj.value = "";
  campo_email_contato.value = "";
  campo_senha_cadastro.value = "";
  window.location.href = "index.html";
}

///////// Login ////////

function login() {
  if (!localStorage.userlogado) {
    var userlogado = "";
    localStorage.setItem('userlogado', JSON.stringify(userlogado));
  }
  var user = JSON.parse(localStorage.getItem('user'));
  var userlog = JSON.parse(localStorage.getItem('userlogado'));

  var posicao = user.length;
  var campo_email = document.getElementById('inputEmail');
  var campo_senha = document.getElementById('inputPassword');
  var email = campo_email.value;
  var senha = campo_senha.value;
  var verif = 0;
  for (var i = 0; i < posicao; i++) {
    if ((user[i].email == email) && (user[i].senha == senha)) {
      userlog = user[i];
      verif = 1;
      window.location.href = "principal.html";
      localStorage.setItem('userlogado', JSON.stringify(userlog));
    }
  }

  if (verif == 0) {
    alert("Usuário Não Encontrado");
    campo_email.value = "";
    campo_senha.value = "";
  }
}
///////// Minha Conta ///////

function verdados() {
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_nomefantasia_ver = document.getElementById("nomefantasia_ver");
  var campo_cnpj_ver = document.getElementById("cnpjver");
  var campo_email_contato_ver = document.getElementById("email_contato_ver");

  campo_nomefantasia_ver.value = userlogado.nome;
  campo_cnpj_ver.value = userlogado.cnpj;
  campo_email_contato_ver.value = userlogado.email;
}

function alterardados(){
  var user = JSON.parse(localStorage.getItem('user'));
  var posicao = user.length;
  
  var campo_nomefantasia_alterar = document.getElementById("nomefantasia_alterar");
  var campo_cnpj_alterar = document.getElementById("cnpj_alterar");
  var campo_email_contato_alterar = document.getElementById("email_contato_alterar");

  var usuario = new Object();
  usuario.nome = campo_nomefantasia_alterar.value;
  usuario.cnpj = Number(campo_cnpj_alterar.value);
  usuario.email = campo_email_contato_alterar.value;

  user[posicao] = usuario;

  localStorage.setItem('user', JSON.stringify(user));

  alert("Alterações Realizadas com Sucesso");
  campo_nomefantasia.value = "";
  campo_cnpj.value = "";
  campo_email_contato.value = "";
  campo_senha_cadastro.value = "";
  window.location.href = "minhaconta.html";  
}