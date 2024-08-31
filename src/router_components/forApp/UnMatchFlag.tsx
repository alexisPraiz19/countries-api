// Herramientas React
import { useEffect, useState } from "react";

export default function UnMatchFlag():JSX.Element{
    const [num, setNum] = useState(Number);
    useEffect(()=>{
        const random = Math.floor(Math.random() * 3) as number;
        setNum(random);
    },[]);

    return(
        <figure className="unmatch-flag d-grid">
            <img src={`assets/image/flag-notfound${num}.gif`} alt="its-fine"/>
            <figcaption>Please spell the name of the country you are looking for correctly</figcaption>
        </figure>
    )
}