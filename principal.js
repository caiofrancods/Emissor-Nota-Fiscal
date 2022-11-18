

///////// Página Principal ////////
function sair() {
  localStorage.removeItem('userlogado');
  window.location.href = "index.html";
}
/*
function imprimirnota(){
  var tabnotas = document.getElementById("notas");

  var linha_notas = tabnotas.insertRow(1);

  var celula1_notas = linha_notas.insertCell(0);
  var celula2_notas = linha_notas.insertCell(1);
  var celula3_notas = linha_notas.insertCell(2);
  var celula4_notas = linha_notas.insertCell(3);

  celula1_notas.innerText = ;
  celula2_notas.innerText = ;
  celula3_notas.innerText = ;
  celula4_notas.innerText = ;
}
*/

// Mudar situação da nota
/*
function mudarsituacao(){
  var campo_situacao = document.getElementById("situacao_mudar");
  var campo_numnota = document.getElementById("numnota"); //Número da nota escolhida para mudar situação
  var situacao_escolhida = campo_situacao.value;
  var numnota = Number(campo_numnota.value);
}
*/





