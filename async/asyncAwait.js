async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function (){
            console.log('Hola, '+nombre);
            resolve(nombre);
        }, 2000);
    });
    
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla...');
            //resolve(nombre);
            resolve('Hay un error');
        }, 1000);
    })
    
}

function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios ', nombre);
            resolve();
        }, 1000);
    });
}
async function main (){
let nombre = await hola('Carlos');
 await hablar();
 hablar();
 hablar();
 await adios(nombre);
console.log('Terminamos el proceso')
}

console.log('Empezamos el proceso');
main();
//console.log('Terminamos el proceso');
console.log('Segundo proceso')