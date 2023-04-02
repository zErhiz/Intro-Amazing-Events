//section 1 
const carta1 = document.getElementById(`section-11`)

const eventosAmazing = eventoDatos.eventos
const eventoAmazing = eventosAmazing[0]

let crearArticle = ``
for (let i = 0; i < 3; i++) {
    crearArticle += crearMasArticle(eventosAmazing[i]);
  }


carta1.innerHTML = crearArticle

function crearMasArticle(eventoAmazing) {
    return  `<div class="card bg-dark " style="width: 18rem">
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
   </div>`
}

//section 2
const carta2 = document.getElementById(`section-222`);
let crearArticle2 = ``;
for (let i = 3; i < 6; i++) {
  crearArticle2 += crearMasArticle(eventosAmazing[i]);
}

carta2.innerHTML = crearArticle2;
//section 3
const carta3 = document.getElementById(`section-33`);
let crearArticle3 = ``;
for (let i = 6; i < 9; i++) {
  crearArticle3 += crearMasArticle(eventosAmazing[i]);
}

carta3.innerHTML = crearArticle3;
//section 4
const carta4 = document.getElementById(`section-44`);
let crearArticle4 = ``;
for (let i = 9; i < 12; i++) {
  crearArticle4 += crearMasArticle(eventosAmazing[i]);
}

carta4.innerHTML = crearArticle4;

//section 5 
const carta5 = document.getElementById(`section-55`);
let crearArticle5 = ``;
for (let i = 12; i < 14; i++) {
  crearArticle5 += crearMasArticle(eventosAmazing[i]);
}

carta5.innerHTML = crearArticle5;
//tener el contenedor
//tener los datos
//crear el article
// agregar el article a la vista

// imagen = image
// tituloh5 = name
// parrafo p = description
// price p = price


/* <div class = "section-1" id="section-11">
<div class="card" style="width: 18rem">
    <img src="./assets/img/Feria de comidas7.jpg" class="card-img-top w-100 p-2" alt="festival of food" />
    <div class="card-body">
        <h5 class="card-title">Festival of the collectivities</h5>
        <p class="card-text">
            Enjoy your favorite dishes from different countries in a unique
            event for the whole family.
        </p>
        <div class="cardpriceandbutton">
            <p>price: 5</p>
            <a href="./pages/details.html" class="btn btn-primary">Details</a>
        </div>
    </div>
</div>

</div> */
