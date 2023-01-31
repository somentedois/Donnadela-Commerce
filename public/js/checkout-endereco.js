const cep = document.querySelector('#cep');
const endereco = document.getElementById('endereco');
const bairro = document.getElementById('bairro');
const estado = document.getElementById('estado');
const cidade = document.getElementById('cidade');

function onInputCepKeyup(){

    // Verificar se a quanticaracteres digitos no campo == 9
    if(cep.value.length === 9){
        carregaInfoDoCepAsync(cep.value);
    }

}

function imprimirResultado(resultado){
    console.log(resultado);
}
// =========================================
function carregaInfoDoCep(cep){
    // Carrega info de uma url remota
    let url = `https://viacep.com.br/ws/08373340/json/`;
    let promessaDeResponse = fetch(url);

    promessaDeResponse
    .then(
        (response) => {
            let promessaDeResultado = response.json();
            promessaDeResultado.then(imprimirResultado);
            console.log(promessaDeResultado);
        }
    )
}

async function carregaInfoDoCepAsync(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(url);
    let resultado = await response.json();
    console.log(resultado);

    endereco.value=(resultado.logradouro);
    bairro.value=(resultado.bairro);
    cidade.value=(resultado.localidade);
    estado.value=(resultado.uf);
}
// =========================================
// Associação de eventos e handlers
cep.addEventListener('keyup', onInputCepKeyup);
