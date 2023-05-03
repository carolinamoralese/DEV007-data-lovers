import { filtrarPorAnyo, searchName } from './data.js'

import data from './data/ghibli/ghibli.js';


//aqui se crea la variable que guarda toda la data
const dataStudioGhibli = data.films;
console.log(dataStudioGhibli);


//aqui se crea la variable que contiene todas las peliculas
const cardContainer = document.getElementById("card-container");


//Aquí solo agarramos el select que tiene el id myselect
const seleccionador = document.getElementById("select-director");
const selectYear = document.getElementById("select-year");
//se oculta la lista donde se selecciona el director para que no aparezca en la pantalla de inicio


const inputBuscar = document.getElementById("search");


//aqui se crea variable que agarra el ID (del boton de peliculas y a imagen de peliculas)
// y se ponen evento al click para que ejecute la funcion se show movies, que es la que muestra todas las peliculas, ambas ejecutan la misma funcion

showMovies(dataStudioGhibli);
showSelect(dataStudioGhibli);


//funcion para mostrar las peliculas cuando el usario da click al boton o la imagen 
function showMovies(pelis) {
    cardContainer.innerHTML = "";
    //Aqui se oculta la patalla principal que muestra la imagen de los personaje y el boton de peliculas
    // homeScreen.style.display="none";

    pelis.forEach((film) => {

        //se muestra las peliculas, se combina HTML en el JS con las comillas invesrtidas
        //se pone el mismo id a los 3 elementos, titulo, imagen, div para identificar el evento del click 
        const optionFilms = document.createElement("div");
        optionFilms.innerHTML +=
        `<p class="title-card" id="${film.title}">${film.title}</p>
        <img class="card" src="${film.poster}" id="${film.id}">`

        cardContainer.appendChild(optionFilms)

        //Aqui se crea funcion para mostrar los personajes de la pelicula seleccionada
        //Aqui se agarra el Id de card container que es donde se estan mostrando las peliculas
        //y se le pone evento al click cuando el usuario seleccione una pelicula y se ejecute la funcion de mostrar los personaje de la pelicula
        optionFilms.addEventListener("click", () =>{
            console.log("click")
            showCharacter(film.id);
        });

    })
}

//funcion para mostrar las peliculas cuando el usario da click al boton o la imagen 
function showSelect(pelis) {

    //Aqui se oculta la patalla principal que muestra la imagen de los personaje y el boton de peliculas
    // homeScreen.style.display="none";

    //Aqui mostramos la lista desplegabl de los directores
    seleccionador.style.display = "block";
    selectYear.style.display = "block";

    //Aquí creamos variables para los directores unicos
    const directoresUnicos = [];
    const filmYear = [];

    pelis.forEach((film) => {
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

        console.log(directoresUnicos)

        //Aqui preguntamos si nuestra variable directores unicos tiene el director
        //Si no lo tiene, le agregamos el director
        //se utiliza la función include
        if (!filmYear.includes(film.release_date)) {
            filmYear.push(film.release_date);
            //Aquí creamos el elemento llamado opcion y llamamos option
            const option = document.createElement("option");
            option.value = film.release_date;
            option.text = film.release_date;
            //Aquí hacemos un openchild que abre un elemnto hijo a un elemto padre que es un select- es parecido a lo del inner.HTML
            selectYear.appendChild(option);
        }
        console.log(filmYear)


    })
}


function showCharacter(id) {

    //Aqui se oculta las el contenedor de peliculas y la lista desplegable de los directores
    cardContainer.innerHTML = ""

    //Aqui se creo la variable que guarda la pelicula con todos los atributos(personajes-lugares-vehiculos)
    let filmSelected;
    console.log(id)
    //Aqui se recorren todas las peliculas para obtener la pelicula seleccionada
    for (let i = 0; i < dataStudioGhibli.length; i++) {
        //Aqui compara que el nombre de la pelicula de la iteracion(i) y la que el usuario selecciona sea igual 
        if (dataStudioGhibli[i].id == id) {//como se hace una escucha y como retengo
            filmSelected = dataStudioGhibli[i];
            
        }
    }
    console.log(filmSelected)
    //Aqui muestra los personajes correspondientes a la pelicula
    filmSelected.people.forEach((character) => {

        let optionCharcter;
        optionCharcter = `
        <div name= "character"  id=${character.name}>
        <p class="title-card">${character.name}</p>
        <img class="card" src =${character.img} >
        </div>
        `
        cardContainer.innerHTML += optionCharcter
    })
}



//Aqui llamamos la funcion cuando el usuario de click
seleccionador.addEventListener("change",(e) =>{

    const valueOp = e.target.value;
    const dataDirector = showFilmsDirector(valueOp);
    showMovies(dataDirector)
});



//Aqui se crea la funcion para quemuestre las peliculas del director
function showFilmsDirector(option) {
    let filmsDirectorSlected = [];


    //se recorren todas las peliculas para obetner las peliculas director seleccionado
    for (let i = 0; i < dataStudioGhibli.length; i++) {

        //se compara que el director de la pelicula en la iteracion con el director que el usuario selecciono
        if (dataStudioGhibli[i].director == option) {
            //guarda en un array las peliculas del director
            filmsDirectorSlected.push(dataStudioGhibli[i]);
        }
        // console.log(dataStudioGhibli.films[i].director)
    }

    //Aqui se borrar las peliculas del director cada vez que el usario le de click
    return filmsDirectorSlected;

    //Aqui se muestran las peliculas del director seleccionado
    /*filmsDirectorSlected.forEach((film) => {

        //Aqui se muestran las peliculas, se inserta en el HTML con el inner.HTML
        cardFilmsDirector.innerHTML += `
        <div name="films" id="${film.title}">
        <p class="title-films">${film.title}</p>
        <img class="card-films" src="${film.poster}">
        <p>${film.description}</p?
        </div>
        `;
    })*/

    //metodo filter

}



selectYear.addEventListener("change", (e) => {
    const valueOption = e.target.value;
    const resultFilterYear = filtrarPorAnyo(dataStudioGhibli, valueOption);

    showMovies(resultFilterYear)
});


inputBuscar.addEventListener("input", function (){
    const filterName = searchName(dataStudioGhibli,inputBuscar.value);

    console.log(filterName)
    if(filterName.length === 0){
        alert("No se encontraron resultados");
    }
    showMovies(filterName);
});




// solo mover el filtro de director, el ciclo for y cambiar por un filtre