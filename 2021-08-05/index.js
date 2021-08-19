const fetch = require("node-fetch");

// Una Promesa es un objeto en Javascript que vincula codigo 
// que produce un resultado (y puede demorar) 
// con codigo que quiere consumir el resultado

// 3 estados - pendiente, resuelto, rechazado - pending, resolved, rejected

// Vamos a revisar
// * fetch
// * Promise then catch
// * new Promise (setTimeout, callbacks)
// * Promise all 

// Ejemplo 1 Consume una Promesa, fetch vuelva una Promesa

fetch('https://api.discogs.com/releases/249504').then((response) => {
  console.log(`Response status ${response.status}`);
  
  // nota: la promesa con fetch va a resolver tambien con estatus 404 y 500
  // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
  // return response.json(); // con este linea vamos a volver otro promesa 
                          // y podemos usar el otro then() abajo
})
// .then((jsonData) => {
//   console.log("Video links:",);
//   console.log(jsonData.videos.map((video) => video.uri ));
// })
.catch(() => {
  console.log(`An error occured`)
}).finally(() => console.log('si la promesa esta resuelta o rechazada, no importa. \nvas a ver este mensaje cuando termine.'));

/* 

// Ejemplo 2 usamos Promise.all para hacer algo cuando un grupo de promesas termina

const f1 = () => fetch('https://api.discogs.com/releases/249504');
const f2 = () => fetch('https://api.discogs.com/artists/1/releases');
const f3 = () => fetch('https://api.discogs.com/artists/100/releases');

Promise.all([ f1(), f2(), f3()]).then((allResp) => {
  console.log(allResp, 'este seria el array de respuestas');
});
*/

/* 

// Ejemplo 3 crear nueva Promesa

const pidoHamburguesas = (cantidad) => {
  // 1. new Promise, que recibe un callback con 2 params que seran las funciones
  // que vamos a llamar cuando resuelve o rechaza la promesa
  return new Promise((resolve, reject) => {

    // 2. envolver el codigo que puede ser asincrono (no necesaramente) en este callback

    const limite = 10;
    if (cantidad > limite) {
      reject("10 es nuestra limte! Menos por favor"); // rechazamos cuando piden mucho
    } else {
      // estoy usando setTimeout aqui para demorar el codigo, simular asincronia https://www.w3schools.com/jsref/met_win_settimeout.asp
      setTimeout(() => {
        const arrHamb = [];
        for (let i = 0; i < cantidad; i++) {
          arrHamb.push('🍔');
        }
        resolve(arrHamb); // resolvemos cuando preparadas
      }, 1000 * cantidad);
    }
  }) 
}

pidoHamburguesas(11).then((miPedido) => {
  console.log("listo", miPedido)
}).catch((mensajeError) => {
  console.log(mensajeError);
}).finally(() => console.log("Ya tienes tu respuesta o entrega!"));

*/
