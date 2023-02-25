console.log('Hola Mundo');

let i = 0
setInterval(function(){
    console.log('Sigo activo')
    i++;
    if(i === 5) {
        console.log('Forzamos error')
        var a = 3 + z;
    }
}, 1000);