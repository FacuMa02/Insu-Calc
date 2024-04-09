import React from "react";

function Header(){
    return(
    <header className="space-x-5 m-4 font-bold underline decoration-2 align-top">
        <a href="/">Inicio</a>
        <a href="/registros">Registros</a>
        <a href="/configuracion">Configuración</a>
    </header>
    )
}

export default Header;