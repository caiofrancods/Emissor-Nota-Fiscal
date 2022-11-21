if (!localStorage.produtos) {
  var produtos = [];
  localStorage.setItem('produtos', JSON.stringify(produtos));
}

// Cadastrar Produto

function cadastrarproduto(){
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var posicao = produtos.length;
  
  var campo_nomeproduto = document.getElementById("nomeproduto");
  var campo_codigo = document.getElementById("codigo");
  var campo_preco = document.getElementById("preco");
  var campo_ncm = document.getElementById("ncm");

  var produto = new Object();
  produto.nome_produto = campo_nomeproduto.value;
  produto.codigo = Number(campo_codigo.value);
  produto.preco = Number(campo_preco.value);
  produto.ncm = campo_ncm.value;

  produtos[posicao] = produto;

  localStorage.setItem('produtos', JSON.stringify(produto));

  alert("Cadastro Realizado com Sucesso");
  campo_nomeproduto.value = "";
  campo_codigo.value = "";
  campo_preco.value = "";
  campo_ncm.value = "";
  window.location.href = "config.html";
}

// Imprimir Tabela de Produtos Cadastrados

function mostrarprodutos(){
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var tamanho = produtos.length;

  for (var i = 0; i<tamanho ;i++){
    imprimirprodutos(produtos[i]);
  }
}

function imprimirprodutos(produto){
  var tabproduto = document.getElementById("produtos");
  
  var linha_produto = tabproduto.insertRow(1);
  
  var celula1_produtos = linha_produto.insertCell(0);
  var celula2_produtos = linha_produto.insertCell(1);
  var celula3_produtos = linha_produto.insertCell(2);
  var celula4_produtos = linha_produto.insertCell(3);
  celula1_produtos.innerText = produto.nome;
  celula2_produtos.innerText = produto.codigo;
  celula3_produtos.innerText = produto.preco;
  celula4_produtos.innerText = produto.ncm;
}
