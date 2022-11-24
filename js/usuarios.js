///////// Cadastro ////////

function cadastro() {
  var user = JSON.parse(localStorage.getItem('user'));
  var posicao = user.length;

  var campo_nomefantasia = document.getElementById("nomefantasia");
  var campo_cnpj = document.getElementById("cnpj");
  var campo_email_contato = document.getElementById("emailcontato");
  var campo_senha_cadastro = document.getElementById("senhacadastro");
  var email = campo_email_contato.value;
  var cnpj = campo_cnpj.value;
  var controle = 0;
  for (var i = 0; i < posicao; i++) {
    if ((email == user[i].email) || (cnpj == user[i].cnpj)) {
      controle = 1;
    }
  }
  if (controle == 0) {
    var usuario = new Object();
    usuario.nome = campo_nomefantasia.value;
    usuario.cnpj = Number(campo_cnpj.value);
    usuario.email = campo_email_contato.value;
    usuario.senha = campo_senha_cadastro.value;
    usuario.regtrib = 0;
    usuario.pos = posicao;

    user[posicao] = usuario;

    localStorage.setItem('user', JSON.stringify(user));

    alert("Cadastro Realizado com Sucesso");
    window.location.href = "index.html";
  } else {
    alert("Este email ou CNPJ já está cadastrado!")
    campo_nomefantasia.value = "";
    campo_cnpj.value = "";
    campo_email_contato.value = "";
    campo_senha_cadastro.value = "";
  }
}

///////// Login ////////

function login() {

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
  campo_email.value = "";

  if (verif == 0) {
    alert("Usuário Não Encontrado");
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

function mostrardados() {
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_nomefantasia_alterar = document.getElementById("nomefantasia_alterar");
  var campo_cnpj_alterar = document.getElementById("cnpj_alterar");
  var campo_email_contato_alterar = document.getElementById("email_contato_alterar");
  campo_nomefantasia_alterar.value = userlogado.nome;
  campo_cnpj_alterar.value = userlogado.cnpj;
  campo_email_contato_alterar.value = userlogado.email;
}

function alterardados() {
  var user = JSON.parse(localStorage.getItem('user'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));

  var campo_nomefantasia_alterar = document.getElementById("nomefantasia_alterar");
  var campo_cnpj_alterar = document.getElementById("cnpj_alterar");
  var campo_email_contato_alterar = document.getElementById("email_contato_alterar");

  var usuario = new Object();
  usuario.nome = campo_nomefantasia_alterar.value;
  usuario.cnpj = Number(campo_cnpj_alterar.value);
  usuario.email = campo_email_contato_alterar.value;

  usuario.senha = userlogado.senha;
  usuario.pos = userlogado.pos;
  usuario.regtrib = userlogado.regtrib;

  user[userlogado.pos] = usuario;

  userlogado.nome = campo_nomefantasia_alterar.value;
  userlogado.cnpj = Number(campo_cnpj_alterar.value);
  userlogado.email = campo_email_contato_alterar.value;
  
  localStorage.setItem('user', JSON.stringify(user));
  localStorage.setItem('userlogado', JSON.stringify(userlogado));

  alert("Alterações Realizadas com Sucesso");
  window.location.href = "minhaconta.html";
}

function mostrarregime() {

  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_regimetributario = document.getElementById("regtrib");
  if (userlogado.regtrib == 0) {
    campo_regimetributario.value = "Não configurado";
  } else {
    if (userlogado.regtrib == 0.06) {
      campo_regimetributario.value = "Simples Nacional";
    } else {
      if (userlogado.regtrib == 0.04) {
        campo_regimetributario.value = "Lucro Presumido";
      }
    }
  }
}
//Popup
function abrirpopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('baixoconfig').style.display = 'none';
}
function fecharpopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('baixoconfig').style.display = 'block';
}
function trocartrib() {

  var user = JSON.parse(localStorage.getItem('user'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_regime = document.getElementById("regime");
  var campo_regimetributario = document.getElementById("regtrib");

  var regime = campo_regime.value;

  if (regime == "simplesnacional") {
    user[userlogado.pos].regtrib = 0.06;
    userlogado.regtrib = 0.06;
    campo_regimetributario.value = "Simples Nacional";
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userlogado', JSON.stringify(userlogado));
    window.location.href = "config.html";
  } else {
    if (regime == "lucropresumido") {
      user[userlogado.pos].regtrib = 0.04;
      userlogado.regtrib = 0.04;
      campo_regimetributario.value = "Lucro Presumido";
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('userlogado', JSON.stringify(userlogado));
      window.location.href = "config.html";
    }
  }
}