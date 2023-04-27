//import { example } from './data.js';
//import data from './data/lol/lol.js';

import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

const dataStudioGhibli = data;
const homeScreen=document.getElementById("root");

let cardContainer = document.getElementById("card-container");
let cardCharacter = document.getElementById("card-character");
let cardFilmsDirector = document.getElementById("card-films-director")
let optionFilms;
let optionCharcter;
let optionFimsDirector;


//forma de mostar el nombrede un personaje, primero ingreso a peliculas, people,  nombre
//console.log(data.films[6].people[4].name);

const buttonPeliculas = document.getElementById("movies")
const imageMovies= document.getElementById("image-movies")

//Aquí splm agarramos el select que tiene el id myselect
const seleccionador = document.getElementById("select-director");
//Aqui se llamamos la funcion cuando el usuario de click
seleccionador.addEventListener("change", showFilmsDirector)


buttonPeliculas.addEventListener("click",showMovies)
imageMovies.addEventListener("click", showMovies)
document.getElementById("card-container").addEventListener("click", showMovieInfo);

seleccionador.style.display="none"


//funcion para mostrar las peliculas
function showMovies(){
    homeScreen.style.display="none"
    seleccionador.style.display="block"
    //Aquí creamos variables para los directores unicos
    const directoresUnicos = [];
   
    dataStudioGhibli.films.forEach((film) => {
    //se muestra las peliculas, se convina HTML en el JS con las comillas invesrtidas
    //se pone mismo id a los 3 elementos, titulo, imagen, div para identificar el evento del click 
        optionFilms = `
        <div name="films" id="${film.title}">
        <p class="title-card" id="${film.title}">${film.title}</p>
        <img class="card" src="${film.poster}" id="${film.title}">
        </div>
        `
    //Aqui preguntamos si nuestra variable directores unicos tiene el director
    //Si no lo tiene, le agregamos el director
    //se utiliza la función include
        if (!directoresUnicos.includes(film.director)) {
            directoresUnicos.push(film.director);
            //Aquí creamos el elemento llamado opcion y llamamos option
            const option = document.createElement("option");
            option.value = film.director;
            option.text = film.director;
            //Aquí hacemos un openchild que abre un elemnto hijo a un elemto padre que es un select- es parecido a lo del inner.HTML
            seleccionador.appendChild(option);
        }
        cardContainer.innerHTML += optionFilms
    })
}



//se crea funcion para mostrar los personajes de la pelicula seleccionada
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



//se crea la funcion para quemuestre las peliculas del director
function showFilmsDirector(event){
    let filmsDirectorSlected = []
    cardContainer.style.display="none"
    console.log(event.target.value)

    //se recorren todas las peliculas para obetner las peliculas director seleccionado
    for (let i = 0; i < dataStudioGhibli.films.length; i++) {

    //se compara que el director de la pelicula en la iteracion con el director que el usuario selecciono
        if (dataStudioGhibli.films[i].director == event.target.value){
            //guarda en un array las peliculas del director
            filmsDirectorSlected.push(dataStudioGhibli.films[i])
        }
       // console.log(dataStudioGhibli.films[i].director)
    }
        
    filmsDirectorSlected.forEach((film) =>{
        optionFimsDirector += `
        <div name="films" id="${film.title}">
        <p class="title-films">${film.title}</p>
        <img class="card-films" src="${film.poster}">
        <p>${film.description}</p?
        </div>
        `

        cardFilmsDirector.innerHTML = optionFimsDirector
       
    })

    
}
    

