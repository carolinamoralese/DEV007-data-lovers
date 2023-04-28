// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};


//se crea func
export function filtrarPorAnyo(data,option) {
    const datafiltrada = data.filter(pelicula => pelicula.release_date == option)
    return datafiltrada
    
}


