import React, { useEffect } from 'react'
import Button from './Button'
import Input from './Input'
import { useState } from 'react'
import {crmDB, modificarConfiguracion } from '../../db/dbConfig'


function Configuracion() {
  useEffect(() => {
    async function inicializarDB() {
      try {
        await crmDB();
        console.log("Base de datos inicializada");
        
        // Ahora puedes usar la base de datos

      } catch (error) {
        console.error("Error al inicializar la base de datos:", error);
      }
    }
  
    inicializarDB();
  }, [crmDB]);


  const [ratio, setRatio] = useState(0);
  const [glucIdeal, setGlucIdeal] = useState(0);
  const [factor, setFactor] = useState(0);

  function handleChangeRatio(e){
    setRatio(parseFloat(e.target.value));
  }

  function handleChangeGlucIdeal(e){
    setGlucIdeal(parseFloat(e.target.value));
  }

  function handleChangeFactor(e){
    setFactor(parseFloat(e.target.value)); 
  }

  function handleClickGuardar(e){
    e.preventDefault();
    modificarConfiguracion(ratio,glucIdeal,factor);
  }


  return (
    <div className='h-screen flex align-center justify-center'>
        <div id="container-calculate" className="container w-1/2 text-center my-auto text-2xl flex flex-col bg-blurry-material space-y-10 p-10 min-w-fit ">
            <Input icon={"config.svg"} change={handleChangeRatio} type="number" placeholder="Ratio de insulina"/>
            <Input icon={"config.svg"} change={handleChangeGlucIdeal} type="number" placeholder="Valor ideal de glucemia"/>
            <Input icon={"config.svg"} change={handleChangeFactor} type="number" placeholder="Factor de sensibilidad"/>
            <Button btnName="GUARDAR" btnFn={handleClickGuardar}/>
        </div>
    </div>
  )
}

export default Configuracion