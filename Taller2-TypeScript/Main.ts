import { Series } from './Data.js';

let tbodySeries: HTMLElement = document.getElementById("tbodySeries")!;
let card: HTMLElement = document.getElementById("card")!;
let totalTemporadas = 0; 

addSeries();
calcularPromedio(totalTemporadas, Series.length);

function addSeries():void {
    
    Series.forEach((serie) => {
    let row: HTMLElement = document.createElement("tr");

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

function calcularPromedio(total:number, cantidadSeries:number) {
    let promedio:number = total / cantidadSeries
    let row: HTMLElement = document.createElement("tr");

    row.innerHTML = `
        <td colspan="2">Promedio temporadas: ${promedio}</td>
    `;

    tbodySeries.appendChild(row);
}

const imagen = document.createElement('img');
const nombre = document.createElement('h5');
const descripcion = document.createElement('p');
const url = document.createElement('a');

function mostrarCard(serie): void {
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
