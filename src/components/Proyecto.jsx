import { useParams } from "react-router-dom";
import { works } from "../data/works";
import { useEffect, useState } from "react";

const Proyecto = () => {
    const params = useParams();
    const [work, setWork] = useState({});

    useEffect(() => {
        let work = works.filter(work => work.id === params.id);
        setWork(work[0]);

    },[params.id]);
    return (
        <>
            <div className="page ">
                <h1 className="heading">Proyecto: {work.name}</h1>
            </div>
            <div>
                <img src={work.img} alt={work.name} />
            </div>
            <p> {work.tecnologias}</p>
            <p> {work.descripcion}</p>
            <p> {work.categoria}</p>
            <a href={work.url} target="_blank">Ver mas</a> 
        </>

               
    );
}

export default Proyecto;
