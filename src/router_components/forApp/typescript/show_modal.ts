const modal = document.createElement("DIV") as HTMLDivElement;
    modal.classList.add("modal");

export default function show_modal():void{ 
    const filter_options = document.getElementById("filter-options") as HTMLUListElement;
    filter_options.classList.toggle("show-options"); 
    filter_options.classList.contains("show-options") ? document.body.appendChild(modal) : document.body.removeChild(modal);
}