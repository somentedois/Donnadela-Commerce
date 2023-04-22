const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const form = document.getElementById('form');

function onFormSubmit(evento){
  evento.preventDefault();
  console.log("Tentou enviar o formulário");
  let camposErrados = [];
  if(!qtdSenha()) {
    camposErrados.push("senha");
  } 
  if(!qtdConfimacaoSenha()) {
    camposErrados.push("confirmarSenha");
  }
  if(camposErrados.length == 0){
    form.submit();
  } else {
    camposErrados.forEach();
  }
  console.log("não foi dessa vez!")
}

function mostrarErro(idInput, mensagemErro) {
  const span = document.querySelector(`#${idInput} + span`);
  span.innerHTML = mensagemErro;
  span.style.visibility = "visible";
}

// Validação de quantidade de senha
function qtdSenha(){
  // if (senha.value.length < 8) {
  //   senha.setCustomValidity("Informe uma senha com no mínimo 8 caracteres");
  // } else {
  //   senha.setCustomValidity('');
  // }
  return senha.value.length >= 8;
}

function qtdConfimacaoSenha() {
  // if (confirmarSenha.value.length < 8) {
  //   confirmarSenha.setCustomValidity("Informe uma senha com no mínimo 8 caracteres");
  // } else {
  //   confirmarSenha.setCustomValidity('');
  // }
  return confirmarSenha.value.length >= 8;
}


form.onsubmit = onFormSubmit;


// Validação dos campos iguais de senha
function validaSenha() {
    if(senha.value !== confirmarSenha.value) {
      confirmarSenha.setCustomValidity("Senhas diferentes! \nPor favor, digite as duas senhas iguais");
    } else {
      confirmarSenha.setCustomValidity('');
    }
}


// Validação caracteres

// const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])$/;

// function caracterSenha() {
//   if (regex.test(senha)) {
//     senha.setCustomValidity("A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!");
//   } else {
//     senha.setCustomValidity('');
//   }
  
//   if (regex.test(confirmarSenha)) {
//     confirmarSenha.setCustomValidity("A senha deve conter no mínimo 1 caracteres em maiúsculo, 1 números e 1 caractere especial!");
//   } else {
//     confirmarSenha.setCustomValidity('');
//   }
// }

// senha.onchange = caracterSenha;
// confirmarSenha.onchange = caracterSenha;
// senha.onkeyup = caracterSenha;
// confirmarSenha.onkeyup = caracterSenha;



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