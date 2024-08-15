// Herramientas React para hacer uso del Contexto
import { useContext } from "react";
import { RequestDataContext } from "../../context/RequestData"; 

// Lógica TS para filtrar banderas por Region y filtrar por escritura
import filter_by_region from "../../types/filter_by_region";
import filter_by_type from "../../types/filter_by_type";

// Componente principal de exportación
export default function Hero():JSX.Element{
    // Consumiendo Contexto para hacer uso del Array con información de las banderas
    const { auxiliaryFlags, setFlags } = useContext(RequestDataContext) as any;

    // Lógica TS para abrir las opciones para filtrado de banderas
    function open_filter():void{ document.querySelector(".filter-options")!.classList.toggle("show-filter"); }

    // Lógica TS para simular eliminar el filtro "type" si se hace "click" sobre el icono de cruz en el "input search"
    function delete_filter_type(e:any):void{ if(e.target.value != "") setFlags(auxiliaryFlags); }

    return (
        <div className="hero text-color">
            <label htmlFor="input-search" className="label-search bg-and-shadow">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for a country..." id="input-search" onClick={(e)=>{ delete_filter_type(e) }} onKeyUp={(e)=>{ filter_by_type(e, auxiliaryFlags, setFlags) }}/>
            </label>

            <div className="filter-container bg-and-shadow text-color">
                <button  className="open-filter text-color" id="open-filter" onClick={ open_filter }> 
                    Filter by Region
                    <i className="icon-arrow fa-solid fa-angle-down"></i>
                </button>
                
                <ul className="filter-options bg-and-shadow" onClick={ (e)=> { filter_by_region(e, auxiliaryFlags, setFlags) } }>
                    <li data-region="Africa">Africa</li>
                    <li data-region="Americas">America</li>
                    <li data-region="Asia">Asia</li>
                    <li data-region="Europe">Europe</li>
                    <li data-region="Oceania">Oceania</li>
                    <li id="delete-filter">Delete Filter</li>
                </ul>
            </div>
        </div>
    );
}