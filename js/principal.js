///////// Página Principal ////////

function filtrar_notas() {
  var notas = JSON.parse(localStorage.getItem('notas'));
  var campo_filtro = document.getElementById('filtro');
  var posicao = notas.length;
  filtro = campo_filtro.value;
  apagarLinhas();
  if (filtro == "Pendentes") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Pendente") {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "Enviadas") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Enviada") {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "Canceladas") {
    for (var i = 0; i < posicao; i++) {
      if (notas[i].situacao == "Cancelada") {
        imprimirnota(notas[i]);
      }
    }
  }
  if (filtro == "tudo") {
    for (var i = 0; i < posicao; i++) {
      imprimirnota(notas[i]);
    }
  }
}
function mostrarnotas() {
  var notas = JSON.parse(localStorage.getItem('notas'));
  var posicao = notas.length;
  for (var i = 0; i < posicao; i++) {
    imprimirnota(notas[i])
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

  celula1_notas.innerText = notas.numnota;
  celula2_notas.innerText = notas.nomecliente;
  celula3_notas.innerText = notas.valortotal;
  celula4_notas.innerText = notas.situacao;
}

function mudarsituacao() {
  var notas = JSON.parse(localStorage.getItem("notas"));
  var campo_situacao = document.getElementById("situacao_mudar");
  var campo_numero = document.getElementById("numnota");
  var situacao_escolhida = campo_situacao.value;
  var numero_nota = Number(campo_numero.value);
  var tam_notas = notas.length;
  var controle = 0;
  for (var i = 0; i < tam_notas; i++) {
    if (numero_nota == notas[i].numnota) {
      controle = 1;
      if (situacao_escolhida != notas[i].situacao) {
        if (situacao_escolhida == "enviar") {
          if (notas[i].situacao == "Cancelada") {
            alert("Notas canceladas não podem ser alteradas")
          } else {
            notas[i].situacao = "Enviada";
            alert("Nota enviada com sucesso!");
            window.location.href = "principal.html";
          }
        } else {
          if (situacao_escolhida == "cancelar") {
            notas[i].situacao = "Cancelada";
            alert("Nota cancelada com sucesso");
            window.location.href = "principal.html";
          }
        }
      } else {
        alert("A situação escolhida já é a situação atual da nota");
      }
    }
  }
  if (controle == 0) {
    alert("Nota não encontrada");
  }
  campo_numero.value = "";
  localStorage.setItem('notas', JSON.stringify(notas));
}


