if(!localStorage.usuarios){
	var usuarios = [];
	localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function cadastrar() {
    if($("#formularioLoginCadastro").valid()) {
        //recupera o vetor na memória secundária
        var usuarios = JSON.parse( localStorage.getItem('usuarios') );
        //length é comprimento do vetor, ou seja, a quantidade de objetos armazenados
        var posicao = usuarios.length; 

        var campoNome = document.getElementById("nome");
        var campoEmail = document.getElementById("email");
        var campoSenha = document.getElementById("senha");

        var usuario = new Object();
        usuario.nome = campoNome.value;
        usuario.email = campoEmail.value;
        usuario.senha = campoSenha.value;

        usuarios[posicao] = usuario;

        //armazena o vetor na memória secundária
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Cadastro realizado com sucesso');	
    }
}

$("#formularioLoginCadastro").validate(
	{
		rules:{
			nome:{
				required:true 
			},
			email:{
				required:true
			},
			senha:{
				required:true	
			}					
		}, 
		messages:{
			nome:{
				required:"Campo obrigatório",
			},
			email:{
				required:"Campo obrigatório"
			},
			senha:{
				required:"Campo obrigatório"
			}						   
		}
	}
);
