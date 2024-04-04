import React from "react"
import Header from "../components/Header";
import {Outlet} from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="h-screen w-screen mx-auto px-4 flex flex-col align-center bg-gradient-1">
      <Header/>
      <Outlet/>
      <footer className="p-2">
        <p>@Facundo Maidana. Todos los derechos reservados</p>
      </footer>
    </div>
  )
}

export default MainLayout