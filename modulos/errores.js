function otraFuncion() {
    return serompe()
}

function serompe () {
    return 3+z;
}
try {
   // otraFuncion()
   seRompeAsincrona(function (err){
    console.error(err.message);
   });
} catch(err){
    console.log('vaya, algo se ha roto ....');
    console.error(err.message);
    console.log('pero no pasa nada, lo hemos capturado');
}

function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3+z;
        } catch (err) {
            console.error('error enmi funcion asincrona');
            cb(err);
        }
    })
}

//console.log('esto de aqui esta a fnal')