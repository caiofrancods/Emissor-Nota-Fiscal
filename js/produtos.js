// Cadastrar Produto

function cadastrarproduto() {
  if ($("#formularioProduto").valid()) {
    var campo_ncm = document.getElementById("ncm");
    if(campo_ncm.value == ""){
      alert("Nenhum NCM foi selecionado");
    }else{
      var produtos = JSON.parse(localStorage.getItem('produtos'));
      var userlogado = JSON.parse(localStorage.getItem('userlogado'));
      var posicao = produtos.length;
  
      var campo_nomeproduto = document.getElementById("nomeproduto");
      var campo_codigo = document.getElementById("codigo");
      var campo_preco = document.getElementById("preco");
      var aux = 0;
      for (var i = 0; i < posicao; i ++){
        if (campo_nomeproduto.value == produtos[i].nome_produto || campo_codigo.value == produtos[i].codigo){
          if (produtos[i].pos == userlogado.pos){
            if (campo_nomeproduto.value == produtos[i].nome_produto){
              aux = 1
            }else{
              if (campo_codigo.value == produtos[i].codigo){
                aux = 2
              }
            }
          }
        }
      }
      if (aux == 1){
        alert("Nome do produto já existente");
        window.location.href = "config.html";
      }    
      if (aux == 2){
        alert("Código do produto já foi cadastrado anteriormente");
        window.location.href = "config.html";
      }
  
      if (aux != 1 && aux != 2){
        var produto = new Object();
        produto.nome_produto = campo_nomeproduto.value;
        produto.codigo = Number(campo_codigo.value);
        produto.preco = Number(campo_preco.value);
        produto.ncm = campo_ncm.value;
        produto.pos = userlogado.pos;
    
        produtos[posicao] = produto;
    
        localStorage.setItem('produtos', JSON.stringify(produtos));
    
        alert("Cadastro Realizado com Sucesso");
        window.location.href = "config.html";
        campo_nomeproduto.value = "";
        campo_codigo.value = "";
        campo_preco.value = "";
        campo_ncm.value = "";
      }
    }
  }  
}

$("#formularioProduto").validate(
  {
    rules: {
      nomeproduto: {
        required: true
      },
      codigo: {
        required: true,
        min: 1
      },
      preco: {
        required: true
      }
    },
    messages: {
      nomeproduto: {
        required: "Campo obrigatório"
      },
      codigo: {
        required: "Campo obrigatório",
        min: "O código deve ser um número positivo"
      },
      preco: {
        required: "Campo obrigatório",
      }
    }
  }
);

// Imprimir Tabela de Produtos Cadastrados

function mostrarprodutos() {
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var tamanho = produtos.length;
  for (var j = 0; j < tamanho-1; j++){
    for (var i = 0; i < tamanho-1; i ++){
      var aux = [1];
      if (produtos[i].nome_produto < produtos[i+1].nome_produto){
        aux[0] = produtos[i];
        produtos[i] = produtos[i+1];
        produtos[i+1] = aux[0];
      }
    }
  }
  for (var i = 0; i < tamanho; i++) {
    if (produtos[i].pos == userlogado.pos) {
      imprimirprodutos(produtos[i]);
    }
  }
}

function imprimirprodutos(produto) {
  var tabproduto = document.getElementById("produtos");

  var linha_produto = tabproduto.insertRow(1);

  var celula1_produtos = linha_produto.insertCell(0);
  var celula2_produtos = linha_produto.insertCell(1);
  var celula3_produtos = linha_produto.insertCell(2);
  var celula4_produtos = linha_produto.insertCell(3);
  celula1_produtos.innerText = produto.nome_produto;
  celula2_produtos.innerText = produto.codigo;
  celula3_produtos.innerText = produto.preco;
  celula4_produtos.innerText = produto.ncm;
}
function apagarLinhas() {
  var tabelaAluno = document.getElementById("produtos");

  var linhas = tabelaAluno.getElementsByTagName('tr');

  var quantidade = linhas.length;
  var contador = quantidade - 1;
  while (contador >= 1) {
    tabelaAluno.deleteRow(contador);
    contador = contador - 1;
  }
}
function ordenarpreco(){
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var posicao = produtos.length;
  
  for (var j = 0; j < posicao-1; j++){
    for (var i = 0; i < posicao-1; i ++){
      var aux = [];
      if (Number(produtos[i].preco) < Number(produtos[i+1].preco)){
        aux[0] = produtos[i];
        produtos[i] = produtos[i+1];
        produtos[i+1] = aux[0];
      }
    }
  }
  apagarLinhas()
  for (var i = 0; i < posicao; i++){
    if (userlogado.pos == produtos[i].pos) {
        imprimirprodutos(produtos[i]);
      }
  }
}
function ordenarcodigo(){
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  var posicao = produtos.length;
  for (var j = 0; j < posicao-1; j++){
    for (var i = 0; i < posicao-1; i ++){
      var aux = [];
      if (Number(produtos[i].codigo) < Number(produtos[i+1].codigo)){
        aux[0] = produtos[i];
        produtos[i] = produtos[i+1];
        produtos[i+1] = aux[0];
      }
    }
  }
  apagarLinhas()
  for (var i = 0; i < posicao; i++){
    if (userlogado.pos == produtos[i].pos) {
        imprimirprodutos(produtos[i]);
      }
  }
}
function ordenarnome(){
  window.location.href = "config.html";
}