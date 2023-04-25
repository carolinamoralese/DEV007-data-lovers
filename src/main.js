//import { example } from './data.js';
//import data from './data/lol/lol.js';

import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dataStudioGhibli = data;
const homeScreen=document.getElementById("root");

let cardContainer = document.getElementById("card-container");
let cardCharacter = document.getElementById("card-character")
let optionFilms;
let optionCharcter;

//forma de mostar el nombrede un personaje, primero ingreso a peliculas, people,  nombre
//console.log(data.films[6].people[4].name);

const buttonPeliculas = document.getElementById("movies")
const imageMovies= document.getElementById("image-movies")
//Aquí splm agarramos el select que tiene el id myselect
const seleccionador = document.getElementById("myselect");

buttonPeliculas.addEventListener("click",showMovies)
imageMovies.addEventListener("click", showMovies)
document.getElementById("card-container").addEventListener("click", showMovieInfo);

seleccionador.style.display="none"

function showMovies(){
    homeScreen.style.display="none"
    seleccionador.style.display="block"
    //Aquí creamos variables para los directores unicos
    const directoresUnicos = [];
   
    dataStudioGhibli.films.forEach((film) => {
    //se pne mismo id a los 3 elementos, titulo, imagen, div para identificar el evento del click 
        optionFilms = `
        <div name="films" id="${film.title}">
        <p class="title-card" id="${film.title}">${film.title}</p>
        <img class="card" src="${film.poster}" id="${film.title}">
        </div>
        `
    //Aqui preguntamos si nuestra variable dircunicos tiene el director
    //Si no lo tiene, le agregamos el director
    //se utiliza la función include
        if (!directoresUnicos.includes(film.director)) {
            directoresUnicos.push(film.director);
            //AQuí creamos el elemento llamado opcion y llamamos option
            const option = document.createElement("option");
            option.value = film.director;
            option.text = film.director;
            //Aquí hacemos un openchild que abre un elemnto hijo a un elemto padre que es un select
            seleccionador.appendChild(option);
        }
        cardContainer.innerHTML += optionFilms
    })
}

function showMovieInfo(event){
  
cardContainer.style.display="none"
seleccionador.style.display="none"


//variable que guarda la pelicula con todos los atributos
    let filmSelected

//se recorren todas las peliculas para obtener la pelicula seleccionada
    for (let i = 0; i < dataStudioGhibli.films.length; i++) {
//compara que el nombre de la pelicula de la iteracion(i) y la que el usuario selecciona sea igual 
        if(dataStudioGhibli.films[i].title == event.target.id){
            filmSelected = dataStudioGhibli.films[i]
        }
        
    }
//muestra los personajes correspondientes a la pelicula
   filmSelected.people.forEach((character) =>{
        optionCharcter = `
        <div name= "character"  id=${character.name}>
        <p class="title-card">${character.name}</p>
        <img class="card" src =${character.img} >
        </div>
        
        `
        cardCharacter.innerHTML += optionCharcter
    })
    
}