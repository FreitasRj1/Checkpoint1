function validar() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("password").value;
    let email = document.getElementById("email").value;
  
    if (usuario === "" || senha === "" || email === "") {
      alert('Preencha todos os campos');
    } else if (email === "") {
      alert('Por favor, insira seu email');
    } else if (senha === "") {
      alert('É obrigatório o uso de senha para cadastrar-se em nosso site');
    } else if (usuario === "") {
      alert('Preencha o campo "nome"');
    } else {
      alert('Login efetuado com sucesso');
      window.location.href = "principal.html"; // Redireciona para a página principal.html
    }
  }
  
  window.onload = function() {
    if (window.location.href.includes('principal.html')) {
      alert('Bem-vindo à nossa homepage');
    }
  }