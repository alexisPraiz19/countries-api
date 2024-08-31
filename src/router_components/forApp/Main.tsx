// Herramientas React
import { useContext } from "react";
import { RequestDataContext } from "../../context/RequestData";
import { Link } from "react-router-dom";

// Componentes de complementación
import UnMatchFlag from "./UnMatchFlag";
import Loading from "./Loading";

export default function Main():JSX.Element{
  const { flags, loading, unMatch } = useContext(RequestDataContext) as any;    

  return (
    <main className="main d-grid padding">
      {/* Componentes que serán visible si hay un error de busqueda o si los datos "fetch" del "contexto" siguen cargando (según se amerite)*/}
      {loading && <Loading/>}
      {unMatch && <UnMatchFlag/>}

      {/* Enlaces a "más detalles" de las banderas/paises */}
      {
        flags.map((flag:any) =>(
          <Link key={flag.name} to={`/countries-api/${flag.alpha3Code}`}  className="flag-link text-color bg-and-shadow radius">
            <img src={ flag.flag } alt={ flag.name } title={ flag.name } className="flag-image"/>
            
            <strong>{ flag.name }</strong>
            <p>
              <span>Population:</span> { flag.population } <br/>
              <span>Region:</span> { flag.region } <br/>
              <span>Capital:</span> { flag.capital }
            </p>
          </Link>
        ))
      }
    </main>
  );
}