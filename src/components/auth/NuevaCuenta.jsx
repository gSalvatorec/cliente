import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    //State para Crear cuenta
    const [nuevousuario, nuevoUsuario]= useState({
        nombre:"",
        email:"",
        password:"",
        confirmar:""
    })
    //EXtraer datos de usuario
    const {nombre,email,password,confirmar}=nuevousuario;
    const onChange = e =>{
        nuevoUsuario({
            ...nuevousuario,[e.target.name]:e.target.value
        });
    }
    const onSubmit = e =>{
        e.preventDefault();
        //Validar que no haya campos Vacios

        //Password minimo de 6 caracteres

        //Password coincidan

        //pasarlo al action
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obten una cuenta</h1>
                <form
                onSubmit={onSubmit}
                >
                    {/* Div para Nombre de usuario */}
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre de Usuario: </label>
                        <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingresa tu UserName"
                        value={nombre}
                        onChange={onChange}
                        />
                    </div>
                    {/* Div para email de usuario */}
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Ingresa tu Email"
                        value={email}
                        onChange={onChange}
                        />
                    </div>
                    {/* Div para Password */}
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu password"
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    {/* Confirmar Password */}
                    <div className="campo-form">
                        <label htmlFor="confirmar">Contraseña</label>
                        <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        placeholder="Tu password"
                        value={confirmar}
                        onChange={onChange}
                        />
                    </div>
                    {/* Boton para Registro */}
                    <div className="campo-form">
                        <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Registrar"
                        />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
     );
}
 
export default NuevaCuenta;