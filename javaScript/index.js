//section 1 
const carta1 = document.getElementById(`section-11`)

const eventosAmazing = eventoDatos.eventos
const eventoAmazing = eventosAmazing[0]

let crearArticle = ``
for (let i = 0; i < 14; i++) {
    crearArticle += crearMasArticle(eventosAmazing[i]);
  }


carta1.innerHTML = crearArticle

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
            <a href="./pages/details.html?nombre=${eventoAmazing.name}" class="btn btn-primary">Details</a>
        </div>
        
    </div>
   </div>`
}
//hacer funcionar barra de busqueda
const barraDeBusquedaValor = document.getElementById('search-input');

barraDeBusquedaValor.addEventListener('input', () => {
  const  busquedaValor = barraDeBusquedaValor.value.toLowerCase();
  const  eventosFiltradosBusqueda = eventoDatos.eventos.filter((evento) => {
    return evento.name.toLowerCase().includes(busquedaValor) || evento.description.toLowerCase().includes(busquedaValor);
  });
  const carta1 = document.getElementById('section-11');
  carta1.innerHTML = '';
  for (let i = 0; i <  eventosFiltradosBusqueda.length; i++) {
    carta1.innerHTML += crearMasArticle( eventosFiltradosBusqueda[i]);
  }
});

//checkboxes
const checkboxContenedor = document.getElementById(`checkboxes`);
const myset = new Set();
let crearCheckboxes = ``;
for (let i = 0; i < eventosAmazing.length; i++) {
  const checkboxCategoria = eventosAmazing[i].category;
  if (!myset.has(checkboxCategoria)) {
    myset.add(checkboxCategoria);
    crearCheckboxes += crearCheckbox(checkboxCategoria);
}
}
checkboxContenedor.innerHTML = crearCheckboxes;

function crearCheckbox(checkboxCategoria) {
  return `
    <label>
      <input type="checkbox" name="opciones" value="${checkboxCategoria}" />
      ${checkboxCategoria}
    </label>`;
}
console.log(crearCheckbox)

//hacer que funcionen los checkbox
const checkboxes = document.querySelectorAll('input[type=checkbox][name=opciones]');


checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', () => {
    
    const categoriasSeleccionadas = [];
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        categoriasSeleccionadas.push(checkbox.value);
      }
    });

 
    let eventosFiltradosCheckbox;
    if (categoriasSeleccionadas.length === 0) {
      eventosFiltradosCheckbox = eventoDatos.eventos;
    } else {
      eventosFiltradosCheckbox = eventoDatos.eventos.filter((evento) => {
        return categoriasSeleccionadas.includes(evento.category);
      });
    }

    
    const carta1 = document.getElementById('section-11');
    carta1.innerHTML = '';
    for (let i = 0; i < eventosFiltradosCheckbox.length; i++) {
      carta1.innerHTML += crearMasArticle(eventosFiltradosCheckbox[i]);
    }
  });
});
//hacer que actuen cruzados
const actualizarEventosFiltrados = () => {
  const busquedaValor = barraDeBusquedaValor.value.toLowerCase();
  const categoriasSeleccionadas = Array.from(checkboxes)
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.value);
  let eventosFiltrados = eventoDatos.eventos;
  if (busquedaValor) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return evento.name.toLowerCase().includes(busquedaValor) || evento.description.toLowerCase().includes(busquedaValor);
    });
  }
  if (categoriasSeleccionadas.length) {
    eventosFiltrados = eventosFiltrados.filter((evento) => {
      return categoriasSeleccionadas.includes(evento.category);
    });
  }
  const carta1 = document.getElementById('section-11');
  if (eventosFiltrados.length > 0) {
    carta1.innerHTML = '';
    for (let i = 0; i < eventosFiltrados.length; i++) {
      carta1.innerHTML += crearMasArticle(eventosFiltrados[i]);
    }
  } else {
    carta1.innerHTML = '<h2 class ="NoCards">Oops! No events were found with that name. Maybe you wanted to search for another one? 😕</h2>';
  }
};

barraDeBusquedaValor.addEventListener('input', actualizarEventosFiltrados);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', actualizarEventosFiltrados);
});

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
