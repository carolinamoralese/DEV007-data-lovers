import { filtrarPorAnyo, searchName, orderMovies, getFilmById } from './data.js'

import data from './data/ghibli/ghibli.js';


//se crea la variable que guarda toda la data
const dataStudioGhibli = data.films;



//se crea la variable que contiene todas las peliculas
const cardContainer = document.getElementById("card-container");
const cardCharacters = document.getElementById("card-characters");
const cardVehicles = document.getElementById("card-vehicles");
const cardPlaces = document.getElementById("card-places");
const modal = document.getElementById("modal")
const modalInfo = document.getElementById("modal-info")
const close = document.getElementById("close")
const cardTitle = document.getElementById("card-title")


//se obtienen los elementos de las opciones de busqueda 
const seleccionador = document.getElementById("select-director");
const selectYear = document.getElementById("select-year");
const inputBuscar = document.getElementById("search");
const selectOrderMovies = document.getElementById("order-movies");


// se muestran las peliculas y las opciones para los filtros de directr y año
showMovies(dataStudioGhibli);
showSelect(dataStudioGhibli);
//modal.style.display="none"


//muestra las peliculas
function showMovies(films) {
  cardContainer.innerHTML = "";

  films.forEach((film) => {

    //se muestra las peliculas, se combina HTML en el JS con las comillas invertidas
    //se pone el mismo id a los 3 elementos, titulo, imagen, div para identificar el evento del click 
    const divFilm = document.createElement("div");
    divFilm.innerHTML =
      `<p class="title-card" id="${film.title}">${film.title}</p>
        <img class="card" src="${film.poster}" id="${film.id}">`

    cardContainer.appendChild(divFilm)


    //se le pone evento al click cuando el usuario seleccione una pelicula y se ejecute la funcion de mostrar los personaje de la pelicula
    divFilm.addEventListener("click", () => {
      showInfoFilm(film.id)
    });

  })
}

//funcion para mostrar las peliculas cuando el usario da click al boton o la imagen 
function showSelect(pelis) {

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


  })
}


function showInfoFilm(filmId) {

  cardContainer.innerHTML = ""
  cardCharacters.innerHTML = "<h2>Personajes<hr><br></h2>"

  //se crea la variable que guarda la pelicula con todos los atributos(personajes-lugares-vehiculos)
  let filmSelected = getFilmById(dataStudioGhibli, filmId)

  const divTitle = document.createElement("div")
  divTitle.innerHTML=`
    <h1 class="title-film">${filmSelected.title.toUpperCase()}<br><br></h1>
    <p class="description">${filmSelected.description}</p>
  `
  cardTitle.appendChild(divTitle)

  //Aqui muestra los personajes correspondientes a la pelicula
  filmSelected.people.forEach((character) => {

    
    const divCharacter= document.createElement("div")
    divCharacter.innerHTML = `
        <p class="title-card">${character.name}</p><br><br>
        <img class="card" src =${character.img} >
        `
    cardCharacters.appendChild(divCharacter) 
    divCharacter.addEventListener("click", () => {
      showInfoCharacter(character)
    });

  })

  

  cardPlaces.innerHTML = "<h2>Lugares<hr></h2>"
  filmSelected.locations.forEach((location) => {
    
    let optionLocation;
    optionLocation = `
      <div id="information-card>
        <div name="location" id=${location.name}>
        <p class="title-card">${location.name}</p>
        <img class="card" src=${location.img}>
        </div>
      </div>
        `

    cardPlaces.innerHTML += optionLocation
  
  })

  if (filmSelected.vehicles.length > 0) {
    cardVehicles.innerHTML = "<h2>Vehiculos<hr></h2>"

    filmSelected.vehicles.forEach((vehicle) => {
      let optionVehicle;
      optionVehicle = `
            <div name="vehicle" id=${vehicle.name}>
            <p class="title-card">${vehicle.name}</p>
            <img class="card" src=${vehicle.img}>
            </div>
            `
      cardVehicles.innerHTML += optionVehicle
    })
  }
}



function showInfoCharacter(character){
  

    let info = `
    <p class="title-card"><b>${character.name.toUpperCase()}</b></p><br><br>
    <p><b>Gender:</b> ${character.gender}</p>
    <p><b>Age:</b> ${character.age}</p>
    <p><b>Eye Color:</b> ${character.eye_color}</p>
    <p><b>Hair Color:</b> ${character.hair_color}</p>
    <p><b>Specie:</b> ${character.specie}</p>

    `
    modalInfo.innerHTML = info
    modal.classList.add('show');

    close.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
   
}



//Aqui llamamos la funcion cuando el usuario de click
seleccionador.addEventListener("change", (e) => {
  cardCharacters.innerHTML=""
  cardPlaces.innerHTML=""
  cardVehicles.innerHTML=""
  cardTitle.innerHTML=""
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

}

selectYear.addEventListener("change", (e) => {
  cardCharacters.innerHTML=""
  cardPlaces.innerHTML=""
  cardVehicles.innerHTML=""
  cardTitle.innerHTML=""
  const valueOption = e.target.value;
  const resultFilterYear = filtrarPorAnyo(dataStudioGhibli, valueOption);
  showMovies(resultFilterYear)
});

inputBuscar.addEventListener("input", () => {
  cardCharacters.innerHTML=""
  cardPlaces.innerHTML=""
  cardVehicles.innerHTML=""
  cardTitle.innerHTML=""
  const filterName = searchName(dataStudioGhibli, inputBuscar.value);
  if (filterName.length === 0) {
    alert("No se encontraron resultados");
  }
  showMovies(filterName);
});

selectOrderMovies.addEventListener("change", (e) => {
  cardCharacters.innerHTML=""
  cardPlaces.innerHTML=""
  cardVehicles.innerHTML=""
  cardTitle.innerHTML=""
  const valueOption = e.target.value;
  const resultOrderMovies = orderMovies(dataStudioGhibli, valueOption);
  showMovies(resultOrderMovies);
});


//cursos pointer, que pase el mause y aparexca clicl 