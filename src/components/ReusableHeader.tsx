// Lógica TypeScript para alternar <dark mode> <light mode>
import change_theme from "../types/change_theme";

// Componente principal de exportación
export default function Header():JSX.Element{
    return(
        <header className="header bg-and-shadow text-color">
            <h1>Where in the World?</h1>

            <button onClick={()=> { change_theme() }}>
                <img src="/assets/svg/moon.svg" alt="moon-icon" id="icon-moon"/>
                <span className="text-color" id="theme_mode">Light Mode</span>
            </button>
        </header>
    );
}