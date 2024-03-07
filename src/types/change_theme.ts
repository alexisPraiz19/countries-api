export default function change_theme():void{
    const body       = document.getElementById("body") as HTMLBodyElement;
    const icon_moon  = document.getElementById("icon-moon") as HTMLImageElement;
    const theme_mode = document.getElementById("theme_mode") as HTMLSpanElement;

    body.classList.toggle("light");

    if(body.classList.contains("light")){
        icon_moon.setAttribute("src", "/assets/svg/moon-outline.svg");
        theme_mode.textContent = "Dark Mode";
    }
    else {
        icon_moon.setAttribute("src", "/assets/svg/moon.svg");
        theme_mode.textContent = "Light Mode";
    }
}