const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');


// Validação de quantidade de senha
function qtdSenha(){
  
  if (senha.value.length < 8) {
    senha.setCustomValidity("Informe uma senha com no mínimo 8 caracteres");
  } else {
    senha.setCustomValidity('');
  }
  
  if (confirmarSenha.value.length < 8) {
    confirmarSenha.setCustomValidity("Informe uma senha com no mínimo 8 caracteres");
  } else {
    confirmarSenha.setCustomValidity('');
  }
}

senha.onchange = qtdSenha;
confirmarSenha.onchange = qtdSenha;
senha.onkeyup = qtdSenha;
confirmarSenha.onkeyup = qtdSenha;


// Validação dos campos iguais de senha
function validaSenha() {
    if(senha.value !== confirmarSenha.value) {
      confirmarSenha.setCustomValidity("Senhas diferentes! \nPor favor, digite as duas senhas iguais");
    } else {
      confirmarSenha.setCustomValidity('');
    }
  }
  
senha.onchange = validaSenha;
confirmarSenha.onkeyup = validaSenha;


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