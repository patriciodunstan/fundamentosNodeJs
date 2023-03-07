const http = require('http');

http.createServer(router).listen(3000);

function router (req, res) {
    console.log('nueva peticion!');
    console.log(req.url);

    switch (req.url){
        case '/hola':
            res.write('hola, que tal');
            res.end();
            break;

        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }

  /*  res.writeHead(201, {'Content-Type' : 'text/plain'});

    //Escribir respuesta al usuario
    res.write('hola, ya se sar HTTP de NodeJs');


    res.end();*/
}


console.log("escuchando http en el puerto 3000")