$(document).ready(function() {
  $('#cpf_cliente').mask('000.000.000-00');
  $('#telefone_cliente').mask('(00) 00000-0000');
});

// Incluir itens na lista de compras da nota
function procurarproduto() {
  var produtos = JSON.parse(localStorage.getItem('produtos'));
  var userlogado = JSON.parse(localStorage.getItem('userlogado'));
  const tam = produtos.length;
  var campo_codigoproduto = document.getElementById("codigoproduto");
  var controle;
  var codigoproduto = Number(campo_codigoproduto.value);
  for (var i = 0; i < tam; i++) {
    if (produtos[i].codigo == codigoproduto && produtos[i].pos == userlogado.pos) {
      controle = i
    }
  }
  if (controle == null) {
    alert("Produto não encontrado");
    campo_codigoproduto.value = "";
  } else {
    if (userlogado.regtrib == 0) {
      alert("É necessário configurar o regime tributário");
      campo_codigoproduto.value = "";
    } else {
      calc_impostos(controle)
      imprimiritem(produtos[controle]);
      var controle_incluir = JSON.parse(localStorage.getItem('controle_incluir'));
      controle_incluir = 1;
      localStorage.setItem('controle_incluir', JSON.stringify(controle_incluir));

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

  campo_icms.value = valor_imposto.toFixed(2);
  campo_ipi.value = valor_imposto.toFixed(2);
  campo_piscofins.value = valor_imposto.toFixed(2);

  var imposto_agora = imposto_antes + (valor_imposto - imposto_antes)

  var total_parcial_nota = Number(campo_totalnota.value);
  var total_parcial = total_parcial_nota + valor_produto + (imposto_agora * 3);
  campo_totalnota.value = total_parcial.toFixed(2);
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
  if ($("#formularioIncluir").valid()) {
    var controle_incluir = JSON.parse(localStorage.getItem('controle_incluir'));
    if(controle_incluir == 0){
      alert("É necessário incluir um produto para salvar a nota");
    }else{
      var notas = JSON.parse(localStorage.getItem('notas'));
      var userlogado = JSON.parse(localStorage.getItem('userlogado'));
      var posicao = notas.length;
      var campo_nomecliente = document.getElementById("nome_cliente");
      var campo_totalnota = document.getElementById("total_nota");
      var notasaux = [];
      var k = 0;
      for (var i = 0; i<posicao; i++){
        if (notas[i].pos == userlogado.pos){
          notasaux[k] = notas[i]
          k = k+1
        }
      }
      var tam = notasaux.length;
      var nf = new Object();
      nf.nomecliente = campo_nomecliente.value;
      nf.numnota = tam+1;
      nf.valortotal = campo_totalnota.value;
      nf.situacao = "Pendente";
      nf.pos = userlogado.pos;
      notas[posicao] = nf;
      controle_incluir = 0;
      localStorage.setItem('controle_incluir', JSON.stringify(controle_incluir));
      localStorage.setItem('notas', JSON.stringify(notas));
      alert("Nota cadastrada com sucesso");
      window.location.href = "principal.html";
    }
  }
}

$('#formularioIncluir').validate(
  {
    rules: {
      nome_cliente: {
        required: true
      },
      cpf_cliente: {
        required: true,
        minlength: 14
      },
      telefone_cliente: {
        required: true,
        minlength: 15
      },
      codigoproduto: {
        required: false
      }
    },
    messages: {
      nome_cliente: {
        required: "Campo obrigatório",
      },
      cpf_cliente: {
        required: "Campo obrigatório",
        minlength: "Insira um CPF válido"
      },
      telefone_cliente: {
        required: "Campo obrigatório",
        minlength: "Insira um telefone válido"
      }
    }
  }
);
