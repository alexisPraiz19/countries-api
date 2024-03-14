export default function filter_by_type(e:any, auxiliaryFlags:any, setFlags:any):void{
    const target_value = e.target.value.toLowerCase().trim();
    let counter_null_country = 0 as number;
    
    const filter = auxiliaryFlags.filter((flag:any)=>{ 
        const flag_name   = flag.name.toLowerCase() as string;
        const native_name = flag.nativeName.toLowerCase() as string;

        if(flag_name.includes(target_value) || native_name.includes(target_value)) return flag;
        else counter_null_country++;
    });

    if(counter_null_country != 250) setFlags(filter);
    else setFlags([]);
}