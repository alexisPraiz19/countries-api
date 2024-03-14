// Herramientas React
import { useContext } from "react"; 
import { RequestDataContext } from "../../context/RequestData";

// Herramientas de React Router
import { useParams } from "react-router";

// Componentes de React Router
import { Link } from "react-router-dom"; 

// Componente principal de exportación
export default function DetailFlagContainer():JSX.Element{
    // Las siguentes 3 líneas de código son para adquirir dinámicamente la bandera seleccionada a través de la URL
    const { auxiliaryFlags } = useContext(RequestDataContext) as any;
    const { flagname }       = useParams() as any;
    const flag_selected      = auxiliaryFlags.find((flag:any) => flag.alpha3Code === flagname) as any;

    const borders_countries          = flag_selected.borders ? flag_selected.borders : [] as any; 
    const validate_borders_countries = borders_countries.length == 0 ? "" : <span>Border Countries: </span> as any;
    
    return (
        <section className="detail-container text-color">
            <Link to="/countries-api/" className="btn-go-back text-color">
                <i className="fa-solid fa-arrow-left-long"></i>
                Back
            </Link>

            <div className="detail">
                <img src={ flag_selected.flag } alt="flag-image" className="flag-image"/>

                <div className="detail-text">
                    <h2 className="flag-name">{ flag_selected.name }</h2>

                    <div className="info">
                        <div>
                            <span>Native Name: </span> { flag_selected.nativeName } <br/>
                            <span>Population: </span> { flag_selected.population } <br/>
                            <span>Region: </span> { flag_selected.region } <br/>
                            <span>Sub Region: </span> { flag_selected.subregion } <br/>
                            <span>Capital: </span> { flag_selected.capital }
                        </div>

                        <div>
                            <span>Top Level Domain: </span> { flag_selected.topLevelDomain[0] } <br/>
                            <span>Currencies: </span> { flag_selected.currencies.map((i:any)=> { if(flag_selected.currencies.length > 1){ return `${ i.name }, `} else return i.name; }) } ({flag_selected.currencies[0].symbol}) <br/>
                            <span>Languages:</span> { flag_selected.languages.map((i:any)=> { if(flag_selected.languages.length > 1){ return `${ i.name }, `} else return i.name; }) }
                        </div>
                    </div>

                    <div className="border-countries">
                        { validate_borders_countries }

                        <div className="countries">
                            {
                                borders_countries.map((i:any)=> (
                                    <button key={ i } className="go-to bg-and-shadow">
                                        <Link to={`/countries-api/${ i }`} className="border-link text-color">
                                          { i }
                                        </Link>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}