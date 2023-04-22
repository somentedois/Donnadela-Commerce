const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const form = document.getElementById('form');

// Validação dos campos de Senha

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if(senha.value.length < 8) {
    mostrarErro(senha.id, 'A senha deve ter no mínimo 8 caracteres')
  } 
  if(confirmarSenha.value.length < 8) {
    mostrarErro(confirmarSenha.id, 'A senha deve ter no mínimo 8 caracteres')
  }

  if(senha.value !== confirmarSenha.value) {
    mostrarErro(confirmarSenha.id, 'As senhas devem ser iguais!');
  } else {
    form.submit();
    console.log('enviou o form')
  }

});

function mostrarErro(idInput, mensagemErro) {
  const span = document.querySelector(`#${idInput} + span`);
  span.innerHTML = mensagemErro;
  span.style.visibility = "visible";
  span.style.color = "red";
  span.style.fontSize = 11 + "px";
  span.style.display = "contents";
}

senha.addEventListener('keyup', () => {
  if(senha.value.length >= 8) {
    const span = document.querySelector(`#${senha.id} + span`);
    span.style.visibility = "hidden";
    span.style.display = "none";
  }
});

confirmarSenha.addEventListener('keyup', () => {
  if(confirmarSenha.value.length >= 8) {
    const span = document.querySelector(`#${confirmarSenha.id} + span`);
    span.style.visibility = "hidden";
    span.style.display = "none";
  }
});

// Máscara de formatação do Telefone

const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}

