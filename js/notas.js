if (!localStorage.notas) {
  var notas = [];
  localStorage.setItem('notas', JSON.stringify(notas));
}
// Incluir itens na lista de compras da nota

function procurarproduto(){
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  const tam = produtos.length;
  var campo_codigoproduto = document.getElementById("codigoproduto");
  var controle = -1;
  var codigoproduto = Number(campo_codigoproduto.value);
  for(var i = 0; i<tam; i++){
    if(produtos[i].codigo == codigoproduto){
      controle = i;
    }
  }
  if (controle == -1){
    alert("Produto não encontrado");
  }else{
    var user =  JSON.parse(localStorage.getItem('user'));
    var pedido =  JSON.parse(localStorage.getItem('pedido'));
    var campo_totalnota = document.getElementById("total_nota");
    var total_parcial_nota = campo_totalnota.value
    var campo_icms = document.getElementById("icms");
    var campo_ipi = document.getElementById("ipi");
    var campo_piscofins = document.getElementById("piscofins");

    var valor_imposto = campo_icms.value;
    var imposto_antes = valor_imposto;
    valor_imposto = valor_imposto + (produto[i].preco*user.regtrib);

    campo_icms.value = valor_imposto;
    campo_ipi.value = valor_imposto;
    campo_piscofins.value = valor_imposto;

    
    imprimiritem(produto[i].nome,produto[i].codigo, produto[i].preco, produto[i].ncm);
    
    total_parcial_nota = (total_parcial_nota-(imposto_antes*3))+produto[i].preco+valor_imposto;
    campo_totalnota.value = total_parcial_nota;
    campo_codigo.value = "";
  }
}

function imprimiritem(nome, codigo, preco, ncm){
  var tabincluir = document.getElementById("incluirprodutos");

  var linha_incluir = tabincluir.insertRow(1);

  var celula1_incluir = linha_incluir.insertCell(0);
  var celula2_incluir = linha_incluir.insertCell(1);
  var celula3_incluir = linha_incluir.insertCell(2);
  var celula4_incluir = linha_incluir.insertCell(3);

  celula1_incluir.innerText = nome;
  celula2_incluir.innerText = codigo;
  celula3_incluir.innerText = preco;
  celula4_incluir.innerText = ncm;
}
function salvarnota(){
  var notas = JSON.parse(localStorage.getItem('notas'));
  var posicao = notas.length;
  var campo_nomecliente = document.getElementById("nome_cliente");
  
  var nf = new Object();
  nf.nomecliente = campo_nomecliente.value;
  nf.numnota = posicao;
  nf.valortotal = campo_totalnota.value;
  nf.situacao = "Pendente";
  notas[posicao] = nf;

  localStorage.setItem('notas', JSON.stringify(notas));
  alert("Nota cadastrada com sucesso");
  window.location.href = "principal.html";
}