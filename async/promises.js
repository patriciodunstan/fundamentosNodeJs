function hola(nombre) {
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
            reject('Hay un error');
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

// ---
console.log('Iniciando proceso')
hola('Carlos')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.error('Ha habido un error: ');
        console.error(error);
    })

function conversacion(nombre, veces, callBack) {
    if (veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callBack)
        })
    }else {
        adios(nombre, callBack);
    }
}

/*console.log('Iniciando proceso...');
hola('Carlos', function(nombre) {
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});

/*hola('Carlos', function(nombre) {
    hablar(function() {
        adios(nombre, function() {
            console.log('Terminando proceso....');
        });
    });
        
});*/