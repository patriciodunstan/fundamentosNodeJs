const os = require('os');

//console.log(os.arch());
//console.log(os.platform()); sistema que estamos usando


//console.log(os.cpus()); cantidad de cores e informcion 

//console.log(os.constants); informacacion con cantidad de errores y demas


/*const SIZE = 1024;
function kb(bytes) { return bytes / SIZE}
function mb(bytes) { return kb(bytes) / SIZE}
function gb(bytes) { return mb(bytes) / SIZE}

console.log(os.freemem()); //muestra a cantidad de memori libre en bytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));*/

//console.log(os.homedir());
//console.log(os.tmpdir());

//console.log(os.hostname());

console.log(os.networkInterfaces());
