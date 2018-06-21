'use strict';

exports.handler = (event, context, callback) => {

    let id =  (event.pathParameters || {}).product || false;
    switch(event.httpMethod){

        case "GET":

            if(id) {
                callback(null, {body: "Produto: " + id});
                return;  
            } 

            callback(null, {body: "Nenhum produto cadastrado."});
            break;

        case "POST":            
            callback(null, {body: "Criar um novo produto."}); 
            break;

        case "PUT": 
            callback(null, {body: "Atualizar o produto: " + id});
            break;

        case "DELETE": 
            callback(null, {body:"Deletar o produto: " + id});
            break;

        default:
            // Send HTTP 501: Not Implemented
            console.log("Error: methodo http não suportado (" + event.httpMethod + ")");
            callback(null, { statusCode: 501 })

    }

}