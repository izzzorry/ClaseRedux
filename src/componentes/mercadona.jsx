import datos from "../datos/datos.json"; // Ruta ajustada
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,

} from "./carritocompras.jsx";


export function  mercadona() {

  const peliculas = datos.entries.filter(pelicula => 
    pelicula.programType === 'movie' && pelicula.releaseYear >= 2010
  ).sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);

  // Función para manejar el clic en el título de una película
  const handleMovieClick = (pelicula) => {
    dispatch(increment(pelicula))
  
    
  };

    return (  
      <>
        <div className="Productos">
        {peliculas.length > 0 ? (
          <ul>
            {peliculas.map(pelicula => (
              <li key={pelicula.title}>
                <img src={pelicula.images['Poster Art'].url} alt={`Poster de ${pelicula.title}`} />
                {/* Agregamos un evento de clic al título */}
                <p onClick={() => handleMovieClick(pelicula)} style={{cursor: 'pointer'}}>{pelicula.title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No se encontraron películas.</p>
        )}
        </div>
        <div className="car">

        <button
          className={"button"}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Delete
        </button>
        </div>
      </>
    );
}

export default mercadona;