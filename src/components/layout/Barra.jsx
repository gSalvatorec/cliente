import React from 'react'
import {Link} from 'react-router-dom';

const Barra = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Salvador</span></p>
            
            <nav className="nav-principal">
                <Link to='/'>Cerrar Sesion</Link>
            </nav>
        </header>
     );
}
 
export default Barra;