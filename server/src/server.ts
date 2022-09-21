//const express = require("express"); //Forma de importar uma dependencia sem precisar mecher em qualquer codigo e posso utilizar a dependencia

//Node liberou suporte ECMAScript Modules de forma nativa - passamos então a conseguir importar uma dependencia de forma mais "elegante ", adcionando no package.Json
//"type": "module", e salvando o arquivo que irei importar, com o tipo mjs(Module JavaScript). A partir dai consigo importar minha dependencia da seguinte forma: 

import  express from 'express'// Fica mais bonita, mas amigavel

const app = express();

app.get('/ads', (request, response) => { //Obs: Lembra do que é uma callback? 
     return response.json([
        {id: 1, name:'Anuncio 1'},
        {id: 2, name:'Anuncio 2'},
        {id: 3, name:'Anuncio 3'},         
        {id: 4, name:'Anuncio 4'},         
        {id: 5, name:'Anuncio 5'},         
        {id: 6, name:'Anuncio 6'},         
        {id: 7, name:'Anuncio 7'},         
     ])
})

app.listen(3333) //Aqui eu estou definindo a qual porta eu quero que minha aplicação rode

//quando utiliza o listen, permite que a aplicação continue ouvindo novas requisições ao enos que o usuario peça para parar. 
