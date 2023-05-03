// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


//se crea funcion filtro por año
export function filtrarPorAnyo(data,option) {
    const datafiltrada = data.filter(pelicula => pelicula.release_date == option)
    return datafiltrada
    
}

//se crea funion buscar por nombre de la pelicula
export const searchName = (data,nombreBuscar) => {
  const dataFiltrada = data.filter((studioGhibli) => studioGhibli.title.toLowerCase().includes(nombreBuscar.toLowerCase()))
  return dataFiltrada
}
