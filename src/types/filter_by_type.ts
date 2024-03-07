export default function filter_by_type(e:any, auxiliaryFlags:any, setFlags:any):void{
    let counter_null_country = 0 as number;
    
    const filter = auxiliaryFlags.filter((flag:any)=>{ 
        if(flag.name.toLowerCase().includes(e.target.value.trim()) || flag.nativeName.toLowerCase().includes(e.target.value.trim())) return flag;
        else counter_null_country++;
    });

    if(counter_null_country != 250) setFlags(filter);
    else setFlags([]);
}