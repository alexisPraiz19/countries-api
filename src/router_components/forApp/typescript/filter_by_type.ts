export default function filter_by_type(e:any, auxFlag:[{}], setFlags:any, setUnmatch:any, setType:any):void{
    const target_value   = e.target.value.toLowerCase().trim() as string;
    const open_filter = document.querySelector(".open-filter") as HTMLButtonElement;

    const filter = auxFlag.filter((flag:any)=>{ 
        const flag_name   = flag.name.toLowerCase() as string;
        const native_name = flag.nativeName.toLowerCase() as string;

        if(flag_name.includes(target_value) || native_name.includes(target_value)) return flag;
    });

    if(filter.length == 0){
        setFlags([]) & setUnmatch(true) & e.target.parentElement.classList.add("error-flag");
        open_filter.setAttribute("disabled", "true");
        open_filter.style.cursor = "not-allowed";
    }else{
        setFlags(filter) & setUnmatch(false) & e.target.parentElement.classList.remove("error-flag");
        setType(target_value);
        open_filter.removeAttribute("disabled");
        open_filter.style.cursor = "pointer";
    }
}