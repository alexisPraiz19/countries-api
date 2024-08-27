export default function filter_by_region(e:any, auxFlag:any, setFlags:any):void{
    const target   = e.target as HTMLLIElement;
    const children = Array.from(target.parentElement!.children) as HTMLLIElement[];

    if(target.dataset.id != "delete-filter"){
        const filter = auxFlag.filter((flag:any)=> { return flag.region == target.dataset.region });
        children.forEach((child:any)=>{child == target ? child.classList.add("region-active") : child.classList.remove("region-active")});
        setFlags(filter);
    }
    else{
        children.forEach((child:any)=>{child.classList.remove("region-active")});
        setFlags(auxFlag);
    }
}