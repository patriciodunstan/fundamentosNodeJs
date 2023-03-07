//const process = require('process');

process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
})

process.on('exit', () => {
    console.log('Ale, el proceso termino');// despues del exit no se ejecuta nada mas.
    setTimeout(() => {
        console.log('esto no se va a ver nunca')
    }, 0);
})


/*process.on('uncaughtException', (err, origen) =>{
    console.error('vaya se os ha olvidado capturar un error');
    console.error(err);
})

functionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');*/ //caputa errores.



