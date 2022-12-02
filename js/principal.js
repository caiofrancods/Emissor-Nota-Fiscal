///////// Página Principal ////////

function filtrar_notas() {
  var notas = JSON.parse(localStorage.getItem('notas'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_filtro = document.getElementById('filtro');
  var posicao = notas.length;
  filtro = campo_filtro.value;
  apagarLinhas();
  if (filtro == "Pendentes") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Pendente" && userlogado.pos == notas[i].pos) {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "Enviadas") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Enviada" && userlogado.pos == notas[i].pos) {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "Canceladas") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Cancelada" && userlogado.pos == notas[i].pos) {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "tudo") {
    for (var i = 0; i < posicao; i++){
      if (userlogado.pos == notas[i].pos) {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "alpha") {
    for (var j = 0; j < posicao-1; j++){
      for (var i = 0; i < posicao-1; i ++){
        var aux = [1];
        if (notas[i].nomecliente < notas[i+1].nomecliente){
          aux[0] = notas[i];
          notas[i] = notas[i+1];
          notas[i+1] = aux[0];
        }
      }
    }
    for (var i = 0; i < posicao; i++){
      if (userlogado.pos == notas[i].pos) {
        imprimirnota(notas[i]);
      }
    }
  }
}
function mostrarnotas() {
  var notas = JSON.parse(localStorage.getItem('notas'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var posicao = notas.length;
  for (var i = 0; i < posicao; i++) {
    if (notas[i].pos == userlogado.pos){
      imprimirnota(notas[i]);
    }
  }

}
function apagarLinhas() {
  var tabelaAluno = document.getElementById("notas");

  var linhas = tabelaAluno.getElementsByTagName('tr');

  var quantidade = linhas.length;
  var contador = quantidade - 1;
  while (contador >= 1) {
    tabelaAluno.deleteRow(contador);
    contador = contador - 1;
  }
}
function imprimirnota(notas) {
  var tabnotas = document.getElementById("notas");

  var linha_notas = tabnotas.insertRow(1);

  var celula1_notas = linha_notas.insertCell(0);
  var celula2_notas = linha_notas.insertCell(1);
  var celula3_notas = linha_notas.insertCell(2);
  var celula4_notas = linha_notas.insertCell(3);
  var total = Number(notas.valortotal);
  
  celula1_notas.innerText = notas.numnota;
  celula2_notas.innerText = notas.nomecliente;
  celula3_notas.innerText = total.toFixed(2);
  celula4_notas.innerText = notas.situacao;
}

function mudarsituacao() {
  if($("#formularioMudar").valid()) {
  var notas = JSON.parse(localStorage.getItem("notas"));
  var userlogado = JSON.parse(localStorage.getItem("userlogado"));
  var campo_situacao = document.getElementById("situacao_mudar");
  var campo_numero = document.getElementById("numnota");
  var situacao_escolhida = campo_situacao.value;
  var numero_nota = Number(campo_numero.value);
  var tam_notas = notas.length;
  var controle = 0;
  for (var i = 0; i < tam_notas; i++) {
    if (numero_nota == notas[i].numnota && notas[i].pos == userlogado.pos) {
      controle = 1;
      if (situacao_escolhida == "enviar") {
        if (notas[i].situacao == "Cancelada") {
          alert("Notas canceladas não podem ser alteradas")
        } else {
          if (notas[i].situacao != "Enviada") {
            notas[i].situacao = "Enviada";
            alert("Nota enviada com sucesso!");
            window.location.href = "principal.html";
          } else {
            alert("A nota já foi enviada anteriormente");
          }
        }
      } else {
        if (situacao_escolhida == "cancelar") {
          if (notas[i].situacao != "Cancelada") {
            notas[i].situacao = "Cancelada";
            alert("Nota cancelada com sucesso");
            window.location.href = "principal.html";
          } else {
            alert("A nota já foi cancelada anteriormente");
          }
        }else{
          if(situacao_escolhida == ""){
            alert("Nenhuma opção de alteração foi escolhida");
          }
        }
      }
    }
  }
  if (controle == 0) {
  alert("Nota não encontrada");
  }
  campo_numero.value = "";
  localStorage.setItem('notas', JSON.stringify(notas));
}
}
$("#formularioMudar").validate(
	{
		rules:{
			numnota:{
				required:true
			},
		}, 
		messages:{
			numnota:{
				required:"Campo obrigatório"
			}
		}
	}
);