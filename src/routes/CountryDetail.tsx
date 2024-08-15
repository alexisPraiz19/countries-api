// Componentes de complementación
import Header from "../router_components/reusable_component/Header";
import DetailFlagContainer from "../router_components/forCountryDetail/DetailFlagContainer";

// Componente principal de exportación
export default function CountryDetail():JSX.Element{
    return (
        <>
           <Header/>
           <DetailFlagContainer/>
        </>
    );
}