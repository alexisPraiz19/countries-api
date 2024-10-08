// Herramietas React y Creación del Contexto
import { createContext, useState, useEffect } from "react"; 
export const RequestDataContext = createContext({}) as any;

// Componente principal de exportación
export default function RequestData({children}:any):JSX.Element{
    const [flags, setFlags] = useState([]);
    const [auxFlag, setAuxFlag] = useState([]);
    const [loading, setLoading] = useState(true);
    const [unMatch, setUnMatch] = useState(false);
    const [type, setType]       = useState("");
    const [filterRegion, setFilterRegion] = useState("");

    useEffect(()=>{ 
        fetch("data.json")
        .then(response => response.json())
        .then(response =>{ setFlags(response); setAuxFlag(response)})
        .finally(()=> setLoading(false));
    }, []);
    
    return (
        <RequestDataContext.Provider value={
            {flags, 
            setFlags, 
            auxFlag, 
            setAuxFlag, 
            loading, 
            unMatch, 
            setUnMatch, 
            type, 
            setType,
            filterRegion,
            setFilterRegion}}>

            {children}
        </RequestDataContext.Provider>
    );
}