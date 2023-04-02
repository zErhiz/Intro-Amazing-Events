//section 1
const carta1 = document.getElementById(`section-11`);

const eventosAmazing = eventoDatos.eventos;

let eventosPasados = [];

for (const evento of eventosAmazing) {
  if (evento.date < eventoDatos.fechaActual) {
    eventosPasados.push(evento);
    console.log(evento);
  }
}

let crearArticle = "";
for (let i = 0; i < 3; i++) {
  crearArticle += crearMasArticle(eventosPasados[i]);
}

carta1.innerHTML = crearArticle;

function crearMasArticle(eventoAmazing) {
  return `<div class="card bg-dark" style="width: 18rem">
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
const carta2 = document.getElementById(`section-222`);

for (const evento of eventosAmazing) {
  if (evento.date < eventoDatos.fechaActual) {
    eventosPasados.push(evento);
    console.log(evento);
  }
}

let crearArticle2 = "";
for (let i = 3; i < 6; i++) {
  crearArticle2 += crearMasArticle(eventosPasados[i]);
}

carta2.innerHTML = crearArticle2;
//section 3
const carta3 = document.getElementById(`section-33`);

for (const evento of eventosAmazing) {
  if (evento.date < eventoDatos.fechaActual) {
    eventosPasados.push(evento);
    console.log(evento);
  }
}

let crearArticle3 = "";
for (let i = 6; i < 9; i++) {
  crearArticle3 += crearMasArticle(eventosPasados[i]);
}

carta3.innerHTML = crearArticle3;
