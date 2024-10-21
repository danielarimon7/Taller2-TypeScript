import { Series } from './Data.js';

let tbodySeries = document.getElementById("tbodySeries");
let card = document.getElementById("card");
let totalTemporadas = 0;

addSeries();
calcularPromedio(totalTemporadas, Series.length);

function addSeries() {
    
    Series.forEach((serie) => {
    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>
    `;
    row.addEventListener("click", () => {
        mostrarCard(serie);
      });   
    tbodySeries.appendChild(row); 
    totalTemporadas += serie.temporadas;
    });
}

function calcularPromedio(total, cantidadSeries) {
    let promedio = total / cantidadSeries
    let row = document.createElement("tr");

    row.innerHTML = `
        <td colspan="2">Promedio temporadas: ${promedio.toPrecision(1)}</td>
    `;

    tbodySeries.appendChild(row);
}

const imagen = document.createElement('img');
const nombre = document.createElement('h5');
const descripcion = document.createElement('p');
const url = document.createElement('a');

function mostrarCard(serie) {
    imagen.classList.add('card-img-top');
    imagen.src = serie.imagen;
    imagen.alt = "Image";

    nombre.innerText = serie.nombre;

    descripcion.innerText = serie.descripcion;

    url.target = '_blank';
    url.href = serie.url;
    url.textContent = serie.url;


    if (card) {
    card.innerHTML = ''; 
    card.appendChild(imagen);
    card.appendChild(nombre);
    card.appendChild(descripcion);
    card.appendChild(url);
  }
}