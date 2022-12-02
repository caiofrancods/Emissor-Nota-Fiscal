function mostrarrelatorios(){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var tam = notas.length;
  var notasaux = [];
  var k = 0;
  for (var i = 0; i < tam; i++){
    if (notas[i].pos == userlogado.pos && notas[i].situacao == "Enviada"){
      notasaux[k] = notas[i];
      k = k+1;
    }
  }
  var posicao = notasaux.length
  
  // Quantidade de Vendas
  var campo_quant_vendas = document.getElementById("quant_vendas");
  campo_quant_vendas.value = posicao;
  if(posicao == 0){
    alert("Não há notas enviadas registradas");
  }
  // Valor Total das Vendas
  var campo_totalvendido = document.getElementById("total_vendido");  
  var soma_vendas = 0;
  for (var i = 0; i < posicao; i++){
    soma_vendas = soma_vendas + Number(notasaux[i].valortotal); 
  } 
  campo_totalvendido.value = soma_vendas.toFixed(2);

  // Imposto Total Pago
  var imposto = 0;
  var imposto_total = 0;
  var campo_imposto = document.getElementById("imposto_total"); 
  for (var i = 0; i < posicao; i++){
    imposto = 3*(userlogado.regtrib*Number(notasaux[i].valortotal));
    imposto_total = imposto_total + imposto; 
  } 
  campo_imposto.value = imposto_total.toFixed(2);

  //Maior Compra da Loja
  var campo_maiorcompra = document.getElementById("maior_compra");
  var maior = 0;
  for (var i = 0; i < posicao; i++){
     if (Number(notasaux[i].valortotal) > maior){
       maior = Number(notasaux[i].valortotal);
     }
  }
  campo_maiorcompra.value = maior.toFixed(2);

  // Menor compra da Loja
  var campo_menorcompra = document.getElementById("menorcompra");
  var menor = Number(notasaux[0].valortotal);
  for (var i = 1; i < posicao; i++){
     if (Number(notasaux[i].valortotal) < menor){
       menor = Number(notasaux[i].valortotal);
     }
  }
  campo_menorcompra.value = menor.toFixed(2);

  //Ticket Médio das Notas
  var campo_ticket = document.getElementById("ticket_medio");
  campo_ticket.value = (soma_vendas/posicao).toFixed(2);
}


