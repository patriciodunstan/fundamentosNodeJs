## Fundamentos NodeJs
#### _Event Queue_

Contiene todos los eventos que se generan por nuestro código _(Funciones, peticiones, etc)_, estos eventos quedan en una cola que van pasando uno a uno al Event Loop.
#### _Event Loop_

Se encarga de resolver los eventos ultra rápidos que llegan desde el _Event Queue_. En caso de no poder resolverse rápido, enviá el evento al _Thread Pool_.
#### _Thread Pool_

Se encarga de gestionar los eventos de forma asincrona. Una vez termnado lo devuelve al _Event Loop_. El cual vera si lo pasa a _Event Queue_.
