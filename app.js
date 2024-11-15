const peliculas = require("./peliculas")

const catalogo = {
    listaPeliculas: function () {
        peliculas.forEach (peli => { //forEach genera el bucle para cada objeto dentro del array
            console.log(`Título: ${peli.id}`)
            console.log(`Calificación: ${peli.rating}`)
            console.log(`Premios: ${peli.awards}`)
            console.log(`Duración: ${peli.length} minutos`)
            console.log(`Precio: $${peli.price}`)
            console.log(`Género: ${peli.genre}`)
            console.log('---------------------------')
        })
    }
}
catalogo.listaPeliculas();

const fs = require("fs")
const mensajeRandom = fs.readFileSync("mensaje.txt", "utf-8")
console.log(mensajeRandom)



