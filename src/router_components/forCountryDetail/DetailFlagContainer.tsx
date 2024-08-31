// Herramientas React/React Router
import { useContext } from "react"; 
import { RequestDataContext } from "../../context/RequestData";
import { useParams } from "react-router";
import { Link } from "react-router-dom"; 

export default function DetailFlagContainer():JSX.Element{
    const { auxFlag }   = useContext(RequestDataContext) as any;
    const { flagname }  = useParams() as any;
    const {flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = auxFlag.find((flag:any) => flag.alpha3Code === flagname) as any;
    const border_countries = borders ? borders : [] as any;
    return (
        <section className="detail-flag padding text-color">
            <Link to="/" className="btn-go-back text-color bg-and-shadow radius">
              <img src="assets/svg/arrow-left-long.svg" alt="icon-arrow-left" className="icon-color"/>
               Back
            </Link>

            <div className="detail d-grid">
                <img src={ flag } alt="country-image" className="flag-image radius"/>

                <div className="detail-contain d-grid">
                    <h2 className="country-name">{ name }</h2>

                    <table className="country-info d-grid">
                        <tr className="d-flex">
                            <td>Native Name: <span>{ nativeName }</span></td> 
                            <td>Region: <span>{ region }</span></td> 
                            <td>Population: <span>{ population }</span></td>
                            <td>Sub Region: <span>{ subregion }</span></td> 
                            <td>Capital: <span>{ capital }</span></td>
                        </tr>
                        
                        <tr className="d-flex">
                            <td>Top Level Domain: <span>{ topLevelDomain[0] }</span></td>
                            <td>Currencies: <span>{currencies[0].name}, {currencies[0].code}, {currencies[0].symbol}</span></td>
                            <td>Languages: <span>{languages.map((language:any)=>{return `${language.name}, ${language.nativeName}, `})}</span></td>
                        </tr>
                    </table>

                    <div className="border-countries d-flex">
                        { 
                        border_countries.length == 0 ? "" : 
                        <>
                            <span>Border Countries: </span>

                            <ul className="countries d-flex">
                                { border_countries.map((country:any)=>( 
                                <li className="bg-and-shadow">
                                   <Link key={ country } to={`/${country}`} className="link-to-country text-color"> {country} </Link>
                                </li>
                                ))}
                            </ul>
                        </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}