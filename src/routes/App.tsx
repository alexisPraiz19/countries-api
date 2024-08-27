// Componentes de complementación
import Header from "../router_components/reusable_component/Header";
import Hero from "../router_components/forApp/Hero";
import Main from "../router_components/forApp/Main";

export default function App():JSX.Element{
  return (
    <>
      <Header/>
      <Hero/>
      <Main/>
    </>
  )
}