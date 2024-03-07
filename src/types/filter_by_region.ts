export default function filter_by_region(e:any, auxiliaryFlags:any, setFlags:any):void{
    if(e.target.getAttribute("id") != "delete-filter"){
        const filter = auxiliaryFlags.filter((flag:any)=> { return flag.region == e.target.dataset.region });
        setFlags(filter);
    }
    else setFlags(auxiliaryFlags);
}