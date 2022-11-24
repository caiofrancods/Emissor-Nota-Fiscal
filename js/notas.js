// Incluir itens na lista de compras da nota
function procurarproduto() {
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  const tam = produtos.length;
  var campo_codigoproduto = document.getElementById("codigoproduto");
  var controle;
  var codigoproduto = Number(campo_codigoproduto.value);
  for (var i = 0; i < tam; i++) {
    if (produtos[i].codigo == codigoproduto) {
      controle = i
    }
  }
  if (controle == null) {
    alert("Produto não encontrado");
    campo_codigoproduto.value = "";
  } else {
    var userlogado = JSON.parse(localStorage.getItem('userlogado'));
    if (userlogado.regtrib == 0) {
      alert("É necessário configurar o regime tributário");
      campo_codigoproduto.value = "";
    } else {
      calc_impostos(controle)
      imprimiritem(produtos[controle]);

    }
  }
}
function calc_impostos(control) {
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var campo_codigo_produto = document.getElementById("codigoproduto");
  var campo_totalnota = document.getElementById("total_nota");
  var campo_icms = document.getElementById("icms");
  var campo_ipi = document.getElementById("ipi");
  var campo_piscofins = document.getElementById("piscofins");
  var valor_produto = Number(produtos[control].preco);
  var imposto_antes = Number(campo_icms.value);
  var valor_imposto = imposto_antes + (valor_produto * userlogado.regtrib);

  campo_icms.value = valor_imposto;
  campo_ipi.value = valor_imposto;
  campo_piscofins.value = valor_imposto;

  var imposto_agora = imposto_antes + (valor_imposto - imposto_antes)
  
  var total_parcial_nota = Number(campo_totalnota.value);
  var total_parcial = total_parcial_nota + valor_produto + (imposto_agora*3);
  campo_totalnota.value = total_parcial;
  campo_codigo_produto.value = "";
}

function imprimiritem(produto) {
  var tabincluir = document.getElementById("incluirprodutos");

  var linha_incluir = tabincluir.insertRow(1);

  var celula1_incluir = linha_incluir.insertCell(0);
  var celula2_incluir = linha_incluir.insertCell(1);
  var celula3_incluir = linha_incluir.insertCell(2);
  var celula4_incluir = linha_incluir.insertCell(3);

  celula1_incluir.innerText = produto.nome_produto;
  celula2_incluir.innerText = produto.codigo;
  celula3_incluir.innerText = produto.preco;
  celula4_incluir.innerText = produto.ncm;
}
function salvarnota() {
  var notas = JSON.parse(localStorage.getItem('notas'));
  var posicao = notas.length;
  var campo_nomecliente = document.getElementById("nome_cliente");
  var campo_totalnota = document.getElementById("total_nota");

  var nf = new Object();
  nf.nomecliente = campo_nomecliente.value;
  nf.numnota = posicao+1;
  nf.valortotal = campo_totalnota.value;
  nf.situacao = "Pendente";
  notas[posicao] = nf;

  localStorage.setItem('notas', JSON.stringify(notas));
  alert("Nota cadastrada com sucesso");
  window.location.href = "principal.html";
}