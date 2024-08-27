export default function Header():JSX.Element{
    // Fragmento de lógica para alternar <dark mode> <light mode>
    function change_theme(e:any):void{
        const body       = document.body.classList as DOMTokenList;
        const target     = e.target as HTMLSpanElement|HTMLImageElement;
        const btn_switch = target.parentElement as HTMLButtonElement;

        body.toggle("light-theme");
        document.body.style.transition = "background-color 080ms linear";

        if(body.contains("light-theme")){
            btn_switch.firstElementChild?.setAttribute("src","assets/svg/moon-outline.svg");
            btn_switch.lastElementChild!.textContent = "Dark Mode";

        }else{
            btn_switch.firstElementChild?.setAttribute("src","assets/svg/moon.svg");
            btn_switch.lastElementChild!.textContent = "Light Mode";
        }
    }

    return(
        <header className="header d-flex padding text-color bg-and-shadow">
            <h1 className="title">Where in the World?</h1>

            <button className="change-theme d-flex" onClick={change_theme}>
                <img src="assets/svg/moon.svg" alt="icon-moon"/>
                <span className="text-color">Light Mode</span>
            </button>
        </header>
    );
}