function cadastro() {
  if($("#formularioCadastro").valid()) {
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
      usuario.cnpj = campo_cnpj.value;
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
}
$(document).ready(function() {
  $('#cnpj').mask('00.000.000/0000-00');
});

$("#formularioCadastro").validate(
	{
		rules:{
			nomefantasia:{
				required:true
			},
			cnpj:{
				required:true	
			},
      emailcontato:{
        required:true
      },
      senhacadastro:{
        required:true,
        minlength: 8
      }
		}, 
		messages:{
			nomefantasia:{
				required:"Campo obrigatório"
			},
			cnpj:{
				required:"Campo obrigatório"
			},
      emailcontato:{
        required:"Campo obrigatório"
      },
      senhacadastro:{
        required:"Campo obrigatório",
        minlength: "Mínimo de 8 caracteres"
      }
		}
	}
);
///////// Login ////////

function login() {
  if($("#formularioLogin").valid()) {
    var user = JSON.parse(localStorage.getItem('user'));
    var userlog = JSON.parse(localStorage.getItem('userlogado'));

    var posicao = user.length;
    var campo_email = document.getElementById('email');
    var campo_senha = document.getElementById('senha');
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
}
$("#formularioLogin").validate(
	{
		rules:{
			email:{
				required:true
			},
			senha:{
				required:true	
			}
		}, 
		messages:{
			email:{
				required:"Campo obrigatório"
			},
			senha:{
				required:"Campo obrigatório"
			}
		}
	}
);

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
  var campo_senha_alterar = document.getElementById("senha_alterar");
  var campo_email_contato_alterar = document.getElementById("email_contato_alterar");
  campo_nomefantasia_alterar.value = userlogado.nome;
  campo_senha_alterar.value = userlogado.senha;
  campo_email_contato_alterar.value = userlogado.email;
}

function alterardados() {
  if($("#formularioAlterar").valid()) {
    var user = JSON.parse(localStorage.getItem('user'));
    var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  
    var campo_nomefantasia_alterar = document.getElementById("nomefantasia_alterar");
    var campo_senha_alterar = document.getElementById("senha_alterar");
    var campo_email_contato_alterar = document.getElementById("email_contato_alterar");
  
    var usuario = new Object();
    usuario.nome = campo_nomefantasia_alterar.value;
    usuario.senha = Number(campo_senha_alterar.value);
    usuario.email = campo_email_contato_alterar.value;
  
    usuario.cnpj = userlogado.cnpj;
    usuario.pos = userlogado.pos;
    usuario.regtrib = userlogado.regtrib;
  
    user[userlogado.pos] = usuario;
  
    userlogado.nome = campo_nomefantasia_alterar.value;
    userlogado.senha = Number(campo_senha_alterar.value);
    userlogado.email = campo_email_contato_alterar.value;
    
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('userlogado', JSON.stringify(userlogado));
  
    alert("Alterações Realizadas com Sucesso");
    window.location.href = "minhaconta.html";
  }
}
$("#formularioAlterar").validate(
	{
		rules:{
			nomefantasia_alterar:{
				required:true
			},
			senha_alterar:{
				required:true,
        minlength: 8
			},
      email_contato_alterar:{
        required:true
      }
		}, 
		messages:{
			nomefantasia_alterar:{
				required:"Campo obrigatório"
			},
			senha_alterar:{
				required:"Campo obrigatório",
        minlength: "Mínimo de 8 caracteres"
			},
      email_contato_alterar:{
        required:"Campo obrigatório"
      }
		}
	}
);

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
  if(regime == ""){
    alert("Nenhuma opção foi selecionada");
  }else{
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
}