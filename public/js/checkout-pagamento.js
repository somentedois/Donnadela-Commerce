const numeroCartao = document.getElementById('numero-cartao');

function numeroCartaoCredito(input) {
    const onInputKeyDown = (event) => {
        let numeroDigitado = input.value;
        let numeroPressionado = event.key;
        event.preventDefault();
        let regex = /[0-9]/;
        let ehNumerico = regex.test(numeroPressionado);
        if (ehNumerico && numeroDigitado.length < 19) { // <===  acho que aqui você deva querer se referir a numeroDigitado.length, não?
            if (
                numeroDigitado.length == 4 ||
                numeroDigitado.length == 9 ||
                numeroDigitado.length == 14
            ) {
                input.value += " " + numeroPressionado;
            } else {
                input.value += numeroPressionado;
            }
        }
    }
    input.addEventListener('keydown', onInputKeyDown)
}

numeroCartaoCredito(numeroCartao);


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



