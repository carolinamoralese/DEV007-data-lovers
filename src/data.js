// estas funciones son de ejemplo



//se crea funcion filtro por año
export function filtrarPorAnyo(data, option) {
  const datafiltrada = data.filter(pelicula => pelicula.release_date === option)
  return datafiltrada
    
}


export function getFilmById(data, filmId) {
  const films = data.filter(film => film.id === filmId) 
  return films[0]
}


//se crea funion buscar por nombre de la pelicula
export function searchName(data,nombreBuscar) {
  const dataFiltrada = data.filter((studioGhibli) => studioGhibli.title.toLowerCase().includes(nombreBuscar.toLowerCase()))
  return dataFiltrada
}

//se crea funcion para ordenar de forma alfabetica, ascdente
export function orderMovies(data,upward) {
  const dataFiltrada = data.sort((a, b) =>{
    const nameA = a.title;
    const nameB = b.title;
    if(nameA < nameB){
      return -1;
    }else{
      return 1
    }
    
  })
  if(upward === "AZ"){
    return dataFiltrada
  } else {
    return dataFiltrada.reverse()
  }
}