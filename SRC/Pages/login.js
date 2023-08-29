function validar(){
let usuario = document.getElementById("name").value
let senha = document.getElementById("password").value
let email = document.getElementById('email').value




if (usuario =="" && senha =="" && email ==""){
    alert('Preencha os campos')
}

if (email ==""){
    alert('Por favor insira seu email')
} 
if (senha==""){
    alert('É obrigatorio o uso de senha para cadastrar-se em nosso site')
}else if(senha == email){
    alert('Não e permitido a senha e o email serem iguais')
}else if(usuario==""){
    alert('Preencha o campo "nome"')
}
else{
    alert('Login efetuado com sucesso')
    
}

}
if (window.Map ==('index.html')){
    alert('Bem vindo a nossa homepage')
}