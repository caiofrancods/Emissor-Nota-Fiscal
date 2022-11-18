///////// Configurações ////////
//Popup
function abrirpopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('baixoconfig').style.display = 'none';
}
function fecharpopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('baixoconfig').style.display = 'block';
}
// Salvar configuração de regime tributário
/*
function salvartrib(){
  var campo_regime = document.getElementById("regime");
  var regime = campo_regime.value;
  if (regime == "simplesnacional"){
    
  }else{
    if (regime == "lucropresumido"){
      
    }
  }
}
*/
// Cadastrar Produto
/*
function cadastrarproduto(){
  var campo_nomeproduto = document.getElementById("nomeproduto");
  var campo_codigo = document.getElementById("codigo");
  var campo_preco = document.getElementById("preco");
  var campo_ncm = document.getElementById("ncm");

  var nome_produto = campo_nomeproduto.value;
  var codigo = Number(campo_codigo.value);
  var preco = Number(campo_preco.value);
  var ncm = Number(campo_ncm.value);
   
  campo_nomeproduto = "";
  campo_codigo = "";
  campo_preco = "";
  campo_ncm = "";
}
*/
// Imprimir Tabela de Produtos Cadastrados
/*
function imprimirprodutos(){
  var tabprodutos = document.getElementById("produtos");

  var linha_produtos = tabprodutos.insertRow(1);

  var celula1_produtos = linha_produtos.insertCell(0);
  var celula2_produtos = linha_produtos.insertCell(1);
  var celula3_produtos = linha_produtos.insertCell(2);
  var celula4_produtos = linha_produtos.insertCell(3);

  celula1_produtos.innerText = ;
  celula2_produtos.innerText = ;
  celula3_produtos.innerText = ;
  celula4_produtos.innerText = ;
}
*/
///////// Incluir Nota ////////
// Incluir itens na lista de compras da nota
/*
function imprimiritens(){
  var tabincluir = document.getElementById("incluirprodutos");

  var linha_incluir = tabincluir.insertRow(1);

  var celula1_incluir = linha_incluir.insertCell(0);
  var celula2_incluir = linha_incluir.insertCell(1);
  var celula3_incluir = linha_incluir.insertCell(2);
  var celula4_incluir = linha_incluir.insertCell(3);

  celula1_incluir.innerText = ;
  celula2_incluir.innerText = ;
  celula3_incluir.innerText = ;
  celula4_incluir.innerText = ;
}
*/