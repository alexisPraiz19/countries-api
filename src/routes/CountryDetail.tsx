

// Componentes de complementación
import ReusableHeader from "../components/ReusableHeader";
import DetailFlagContainer from "../components/detail_components/DetailFlagContainer";

// Componente principal de exportación
export default function CountryDetail():JSX.Element{
    return (
        <>
           <ReusableHeader/>
           <DetailFlagContainer/>
        </>
    );
}