const tiposDePokemon = {
    "agua": "blue",
    "fuego": "red",
    "planta": "green",
    "electrico": "yellow",
    "lucha": "orange",
    "psiquico": "purple",
    "tierra": "brown",
    "volador": "lightblue",
    "hielo": "white",
    "veneno": "purple",
    "bicho": "lightgreen",
    "normal": "gray"
};


function obtenerColorTipo(tipo){
    return tiposDePokemon[tipo] || 'white'; // Devuelve 'white' si el tipo no se encuentra en la lista
}

export { obtenerColorTipo };