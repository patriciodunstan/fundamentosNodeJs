function hola(nombre, micallaback) {
    setTimeout(function (){
        console.log('Hola, '+nombre);
        micallaback(nombre);
    }, 2000);
}
function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ', nombre);
        otroCallback();
    }, 1000);
}


hola('Carlos', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso....');
    });
});

/*hola('Carlos', function(){});
adios('carlos', function(){});*/
