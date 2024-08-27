// Herramientas React
import { useContext } from "react";
import { RequestDataContext } from "../../context/RequestData";
import { Link } from "react-router-dom";

export default function Main():JSX.Element{
  const { flags, loading } = useContext(RequestDataContext) as any;    
  return (
    <main className="main d-grid padding">
      {loading && <h1 style={{"color": "red"}}>Cargando...</h1>}
      
      {
        flags.map((flag:any) =>(
          <Link to={`/countries-api/${flag.alpha3Code}`}  className="flag-link text-color bg-and-shadow radius">
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

/* */