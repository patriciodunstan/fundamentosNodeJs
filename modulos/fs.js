const fs = require('fs');

function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) =>{
        console.log(data);
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err){
        if(err){
            console.log('no he podio escribirlo', err);
        }else {
            console.log('Se ha escrito correctamente');
        }
    })
}
function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

//escribir(__dirname + '/archivo.txt', 'soy un archivo nuevo', console.log);
//leer(__dirname + '/modulos/archivo.txt', console.log)
borrar(__dirname + '/fs.js', console.log);