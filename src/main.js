//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';
const dataStudioGhibli = data
const homeScreen=document.getElementById("root")
let cardContainer =document.getElementById("card-container")
let optionFilms =

//forma de mostar el nombrede un personaje, primero ingreso a peliculas, people,  nombre
console.log(data.films[6].people[4].name);


const buttonPeliculas = document.getElementById("movies")
const imageMovies= document.getElementById("image-movies")
buttonPeliculas.addEventListener("click",showMovies)
imageMovies.addEventListener("click", showMovies)


function showMovies(){
    homeScreen.style.display="none"
    dataStudioGhibli.films.forEach((film) => {
        optionFilms = `
        <div name= "films"  id=${film.title}>
        <p class="title-card">${film.title}</p>
        <img class="card" src =${film.poster} >
        </div> 
        `
       
        cardContainer.innerHTML += optionFilms
   
})
}