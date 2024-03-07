// Componentes de complementación
import Hero from "./Hero";
import Flags from "./Flags";

// Componente principal de exportación
export default function Main():JSX.Element{
    return (
      <main className="main-container">
          <Hero/>
          <Flags/>
      </main>
    );
}