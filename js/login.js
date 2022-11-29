if(!localStorage.usuarios){
	var usuarios = [];
	localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function autenticar() {
    if($("#formularioLogin").valid()) {
        //recupera o vetor na memória secundária
        var usuarios = JSON.parse( localStorage.getItem('usuarios') );
        //length é comprimento do vetor, ou seja, a quantidade de objetos armazenados
        var posicao = usuarios.length; 
    		var autenticacao = false;
    		var usuario = new Object(); 
    
            var campoEmail = document.getElementById("email");
            var campoSenha = document.getElementById("senha");
    
    		email = campoEmail.value;
    		senha = campoSenha.value;
    
    		for(var indice = 0; indice < posicao; indice++){
    			if((usuarios[indice].email == email) && (usuarios[indice].senha == senha)){
    				autenticacao = true;
    				usuario = usuarios[indice]
    			}
    		}
           
    		if(autenticacao == true){
    			//armazena o objeto do usuário autenticado na memória secundária
    			localStorage.setItem('usuarioAutenticado', JSON.stringify(usuario));
    
    			window.location.href = "principal.html";
    		}else{
    			alert('E-mail ou senha inválidos');
    		}
    }
}

$("#formularioLogin").validate(
	{
		rules:{
			email:{
				required:true
			},
			senha:{
				required:true	
			}					
		}, 
		messages:{
			email:{
				required:"Campo obrigatório"
			},
			senha:{
				required:"Campo obrigatório"
			}						   
		}
	}
);
