// 1 - Importar o express
const express = require('express');
const path = require('path');


// 2 - Criar o servidor
const servidor =express();

// Define a poasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))

// 3 - Definir de uma rota neste servidor
// endereço, método, função callback (a ação que o servidor vai realizar quando re)
servidor.get('/', (req,res)=>{
    console.log("Chegou um requisição!");
    //return res.send("Vou te mandar uma lista de usuarios!");
    return res.sendFile(__dirname + "/views/index.html");
    
});

servidor.get('/carrinho', (req,res)=>{
   return res.sendFile(__dirname + "/views/carrinho.html");
});

servidor.get('/cadastro', (req,res)=>{
    return res.sendFile(__dirname + "/views/cadastro.html");
 });

servidor.get('/login', (req,res)=>{
    return res.sendFile(__dirname + "/views/login.html");
 });

servidor.get('/pagina-do-produto', (req,res)=>{
   return res.sendFile(__dirname + "/views/pagina-produtos.html");
});

servidor.get('/checkout-endereco', (req,res)=>{
   return res.sendFile(__dirname + "/views/checkout-endereco.html");
});

servidor.get('/checkout-pagamento', (req,res)=>{
   return res.sendFile(__dirname + "/views/checkout-pagamento.html");
});

servidor.get('/finalizar-pagamento', (req,res)=>{
   return res.sendFile(__dirname + "/views/finalizar-pagamento.html");
});

servidor.get('/confirmacao-compra', (req,res)=>{
   return res.sendFile(__dirname + "/views/confirmacao-compra.html");
});





// 4 - Por o servidor no modo "aguardando requisições"
servidor.listen(3000);