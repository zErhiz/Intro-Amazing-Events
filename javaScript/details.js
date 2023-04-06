console.log([document])
const detallesCarta = document.getElementById(`titulocontainer`)
const contenedorImg = document.getElementById(`contenedorimg`)

let urlParams = location.search
console.log(urlParams)
let params = new URLSearchParams(urlParams)
console.log (new URLSearchParams)
let nombre = params.get("nombre");
console.log(nombre)

const eventosAmazing = eventoDatos.eventos


let eventoEncontrado = eventosAmazing.find(eventoAmazing => eventoAmazing.name == nombre)
console.log(eventoEncontrado)

function pintarDescripcionDeEventos(eventoAmazing)
{
    let eventosImpresos =""
    eventosImpresos =` <div class="letras"><h2 class="titulo22">${eventoAmazing.name}</h2>
    <h4 class="titulo33">Description:${eventoAmazing.description}</h4>
    <h4>Date: ${eventoAmazing.date}</h4>
    <h4>Category: ${eventoAmazing.category}</h4>
    <h4>Place: ${eventoAmazing.place}</h4>
    <h4>Capacity: ${eventoAmazing.capacity}</h4>
    <h4>Estimate: ${eventoAmazing.assistance}</h4>
    <h4>Price: ${eventoAmazing.price}</h4> </div>`
    
    detallesCarta.innerHTML = eventosImpresos
}
pintarDescripcionDeEventos(eventoEncontrado) 

function pintarImagenEventos(eventoAmazing)
{
    let eventoImagenImpreso =""
    eventoImagenImpreso =`<div class="imagen-fondo" style="background-image: url(${eventoAmazing.image})"></div>`
    
    contenedorImg.innerHTML = eventoImagenImpreso
}
pintarImagenEventos(eventoEncontrado) 

