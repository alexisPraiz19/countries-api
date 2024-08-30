// Herramientas React para hacer uso del Contexto
import { useContext } from "react";
import { RequestDataContext } from "../../context/RequestData"; 

// Lógica para Filtrar banderas por Region/Escritura y mostrar el "modal"
import filter_by_region from "./typescript/filter_by_region";
import filter_by_type from "./typescript/filter_by_type";
import show_modal from "./typescript/show_modal";


export default function Hero():JSX.Element{
    // Consumiendo Contexto para hacer uso del Array con información de las banderas
    const { auxFlag, setFlags, setUnMatch } = useContext(RequestDataContext) as any;

    return (
        <section className="hero d-flex padding text-color">
            {/* Input para Filtrar paises */}
            <label htmlFor="input-search" className="label-search d-flex bg-and-shadow radius">
                <img src="assets/svg/search.svg" alt="icon-search" className="icon-color"/>
                <input 
                   type="search" 
                   name="search-country" 
                   id="input-search" 
                   className="input-search" 
                   onChange={(e)=>{filter_by_type(e, auxFlag, setFlags, setUnMatch)}} 
                   placeholder="Search for a country..."
                />
            </label>
            
            {/* Caja para el listado de Regiones por las que se puede Filtrar paises */}
            <div className="filter-container text-color bg-and-shadow radius">
                <button className="open-filter d-flex text-color" onClick={ show_modal }> 
                    Filter by Region
                    <img src="assets/svg/arrow-down.svg" alt="icon-arrow" className="icon-color"/>
                </button>
                
                <ul className="filter-options bg-and-shadow radius" id="filter-options" onClick={(e)=>{filter_by_region(e, auxFlag, setFlags)}}>
                    <li data-region="Africa">Africa</li>
                    <li data-region="Americas">America</li>
                    <li data-region="Asia">Asia</li>
                    <li data-region="Europe">Europe</li>
                    <li data-region="Oceania">Oceania</li>
                    <li data-id="delete-filter">Delete Filter</li>
                </ul>
            </div>
        </section>
    );
}