//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
const dataStudioGhibli = data
let cardContainer =document.getElementById("card-container")
let optionFilms =
//forma de mostar el nombrede un personaje, primero ingreso a peliculas, people,  nombre
//console.log(data.films[6].people[4].name);


const buttonPeliculas = document.getElementById("movies")
buttonPeliculas.addEventListener("click",showMovies)

function showMovies(){
    dataStudioGhibli.films.forEach((film) => {
        optionFilms = `
        <div name= "films" id=${film.title}>
        <p>${film.title}</p>
        <img src=${film.poster}>
        </div> `
       
        cardContainer.innerHTML += optionFilms
   
})
}