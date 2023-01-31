const senha = document.getElementById('senha');
const confirmarsenha = document.getElementById('confirmarsenha');

function QtdSenha(senha){
    const onInputKeyDown = (event) => {
        let valorDigitado = senha.value;

        event.preventDefault();

        if (valorDigitado.length < 8){
            alert('Informe uma senha com no mínimo 8 caracteres');
        }else{
            document.submit();
        }
    }
}

QtdSenha(senha)
function validarSenha(){
    if (senha != confirmarsenha){
        alert("Senhas Diferentes! /n Por favor, digite as duas senhas iguais")
    }else{
        document.submit();
    }
}