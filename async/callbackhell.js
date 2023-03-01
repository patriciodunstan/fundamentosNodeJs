function hola(nombre, micallaback) {
    setTimeout(function (){
        console.log('Hola, '+nombre);
        micallaback(nombre);
    }, 2000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callBack) {
    if (veces > 0) {
        hablar(function(){
            conversacion(nombre, --veces, callBack)
        })
    }else {
        adios(nombre, callBack);
    }
}

console.log('Iniciando proceso...');
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