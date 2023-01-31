const numeroCartao = document.getElementById('numero-cartao');

function numeroCartaoCredito(numeroCartao) {
    const onInputKeyDown = (event) => {

        let numeroDigitado = numeroCartao.value;
        let numeroPressionado = event.key;

        event.preventDefault();

        let regex = /[0-9]/;
        let ehNumerico = regex.test(numeroPressionado);

        if (ehNumerico && numeroDigitado.length < 16) {
            alert('Informe o número do cartão com 16 dígitos')
        } else {
            document.submit();
        }
    }
    input.addEventListenner('keydown', onInputKeyDown)
}




const codigoSeguranca = document.getElementById('codigo-seguranca')
function numeroCodigoSeguranca(codigoSeguranca) {
    const onInputKeyDown = (event) => {
        let numeroDigitado = codigoSeguranca.value;
        let numeroPressionado = event.key;

        event.preventDefault();

        let regex = /[0-9]/;
        let ehNumerico = regex.test(numeroPressionado);

        if (ehNumerico && numeroDigitado.length != 3) {
            alert('Informe o código de segurança com 3 dígitos')
        } document.submit();
    }
    input.addEventListenner('keydown', onInputKeyDown)
}



