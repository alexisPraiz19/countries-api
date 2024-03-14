// Herramientas React
import { useEffect, useContext } from "react";

// Información de Contexto
import { RequestDataContext } from "../../context/RequestData"; 

// Componentes de React Router
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

// Componente principal de exportación
export default function Flags():JSX.Element{
    const { flags, setFlags, setAuxiliaryFlags } = useContext(RequestDataContext) as any;

    useEffect(()=>{ fetch("data.json").then(response => response.json()).then(response => { setFlags(response); setAuxiliaryFlags(response) }) },[]);

    useEffect(()=>{
        const container_flag  = document.querySelector(".container-flags") as HTMLDivElement;
        const container_error = document.createElement("DIV") as HTMLDivElement;
        const error_title     = document.createElement("H2") as HTMLElement;
        const image           = document.createElement("IMG") as HTMLImageElement;

        error_title.textContent = "Flag not found. Try to spell their name correctly";
        image.src = "assets/image/flag-notfound.gif";

        container_error.classList.add("container-error");
        container_error.appendChild(error_title);
        container_error.appendChild(image);

        if(flags.length == 0) container_flag.appendChild(container_error);
        else if(container_flag.children[0].classList.contains("container-error")) container_flag.removeChild(container_flag.children[0])
        
    },[flags.length]);
    
    return (
        <section className="container-flags">
            {
                flags.map((flag:any) => (
                    <LazyLoad key={ flag.name }  className="lazyload">
                        <Link to={`/countries-api/${flag.alpha3Code}`}  className="flag-link text-color bg-and-shadow" >
                            <img src={ flag.flag } alt={ flag.name } className="flag-image"/>
                            <div className="flag-info">
                            <h3>{ flag.name }</h3>
                            <p>
                                <span>Population:</span> { flag.population } <br/>
                                <span>Region:</span> { flag.region } <br/>
                                <span>Capital:</span> { flag.capital }
                            </p>
                            </div>
                        </Link>
                    </LazyLoad>
                ))
            }
        </section>
    );
}