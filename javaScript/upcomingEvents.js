//section 1 
const carta1 = document.getElementById(`section-11`);

const eventosAmazing = eventoDatos.eventos;

let eventosFuturos = [];

for (const evento of eventosAmazing) {
    if (evento.date >= eventoDatos.fechaActual) {
        eventosFuturos.push(evento);
        console.log(evento)
    }
}

let crearArticle = "";
for (let i = 0; i < 3; i++) {
    crearArticle += crearMasArticle(eventosFuturos[i]);
}

carta1.innerHTML = crearArticle;

function crearMasArticle(eventoAmazing) {
    return  `<div class="card bg-dark" style="width: 18rem">
    <img src="${eventoAmazing.image}" class="cartafoto p-2" />
    <div class="card-body">
    <div class=cartatitulo>
        <h5 class="card-title">${eventoAmazing.name}</h5>
        <p class="card-text">
           ${eventoAmazing.description}
        </p>
        </div>  
        <div class="cardpriceandbutton">
            <p>price: ${eventoAmazing.price}</p>
            <a href="./pages/details.html" class="btn btn-primary">Details</a>
        </div>
        
    </div>
   </div>`;
}

//section 2 
const carta2 = document.getElementById(`section-22`);





for (const evento of eventosAmazing) {
    if (evento.date > eventoDatos.fechaActual) {
        eventosFuturos.push(evento);
        console.log(evento)
    }
}

let crearArticle2 = "";
for (let i = 3; i < 5; i++) {
    crearArticle2 += crearMasArticle(eventosFuturos[i]);
}

carta2.innerHTML = crearArticle2;
