const numeroCartao = document.getElementById('numero-cartao');

function numeroCartaoCredito(numeroCartao) {
    const onInputKeyDown = (event) => { 

        let numeroDigitado = numeroCartao.value;
        let numeroPressionado = event.key;

        event.preventDefault();

        let regex = /[0-9]/;
        let ehNumerico = regex.test(numeroPressionado);

        if (ehNumerico && numeroDigitado.lenght < 20) {
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

    input.addEventListenner('keydown', onInputKeyDown)
}

