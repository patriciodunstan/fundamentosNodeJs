### Global

En node el objeto global que contiene metodos y propiedades basicas que usamos Node; ej(setTimeOut)

global es el equivalente de this en el navegador

en node this es un alias de global

~~~
this === global//true
~~~

algunos metodos que se incluyen en el global objecto son:

*setTimeOut: se encarga de llamar a otra función despues de un periodo de tiempo.
*setInterval: llama a otra función cada intervalo de tiempo.
*setImmediate: equivalente a setTimeOut pero con tiempo 0.
*cleatTimeOut: detiene el setTimeOut.
*clearInterval: detiene un setInterval.