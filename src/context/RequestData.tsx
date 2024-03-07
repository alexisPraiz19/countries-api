// Herramietas React y Creación del Contexto
import { createContext, useState } from "react"; 
export const RequestDataContext = createContext({}) as any;

// Componente principal de exportación
export default function RequestData({children}:any):JSX.Element{
    const [flags, setFlags] = useState([{}]) as any;
    const [auxiliaryFlags, setAuxiliaryFlags] = useState([]) as any;

    return (
        <RequestDataContext.Provider value={{flags, setFlags, auxiliaryFlags, setAuxiliaryFlags}}>
            {children}
        </RequestDataContext.Provider>
    );
}