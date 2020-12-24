import React from 'react';
import Proyecto from './Proyecto';

const ListadoProyectos = () => {

    const proyectos =[
        {nombre: 'Tienda Virtual'},
        {nombre: 'Internet'},
        {nombre:'Omnitrix'}
    ]
    

    return ( 
        <ul
        className="listado-proyectos"
        >
            {proyectos.map(proyecto=>(
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
     );
}
 
export default ListadoProyectos;